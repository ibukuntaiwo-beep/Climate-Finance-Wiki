import { visit } from 'unist-util-visit';
import { wikiLinkMap } from './wikilinks.ts';

export default function remarkWikilinks(options = {}) {
  const base = (options.base || '').replace(/\/$/, '');
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index === null || index === undefined) return;

      const regex = /\[\[([^\]]+)\]\]/g;
      const value = node.value;
      let match;
      const children = [];
      let lastIndex = 0;

      while ((match = regex.exec(value)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          children.push({ type: 'text', value: value.slice(lastIndex, match.index) });
        }

        const fullMatch = match[1];
        // Handle [[Target|Display Text]] syntax
        const parts = fullMatch.split('|');
        const target = parts[0].trim();
        const displayText = parts.length > 1 ? parts[1].trim() : target;

        const entry = wikiLinkMap[target];
        if (entry) {
          const href = `${base}/${entry.category}/${entry.slug}/`;
          children.push({
            type: 'link',
            url: href,
            data: {
              hProperties: { class: 'wikilink' }
            },
            children: [{ type: 'text', value: displayText }]
          });
        } else {
          // If no mapping found, render as plain text with a title attribute for debugging
          children.push({
            type: 'html',
            value: `<span class="wikilink-broken" title="Unresolved: ${target}">${displayText}</span>`
          });
        }

        lastIndex = match.index + match[0].length;
      }

      // Add remaining text
      if (lastIndex < value.length) {
        children.push({ type: 'text', value: value.slice(lastIndex) });
      }

      if (children.length > 0) {
        parent.children.splice(index, 1, ...children);
        return index + children.length;
      }
    });
  };
}
