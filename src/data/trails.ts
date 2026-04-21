export const trails = [
  {
    name: 'The Greenwashing Trail',
    tagline: 'From misleading claims to criminal charges.',
    photo: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80',
    articles: [
      { slug: 'greenwashing', category: 'concepts', title: 'Greenwashing' },
      { slug: 'greenwashing-typology', category: 'concepts', title: 'Greenwashing Typology' },
      { slug: 'volkswagen-dieselgate', category: 'case-studies', title: 'VW Dieselgate' },
      { slug: 'hsbc-greenwashing', category: 'case-studies', title: 'HSBC Greenwashing' },
      { slug: 'dws-sec-fine', category: 'case-studies', title: 'DWS SEC Fine' },
      { slug: 'climate-litigation', category: 'concepts', title: 'Climate Litigation' }
    ]
  },
  {
    name: 'Follow the Money',
    tagline: 'How climate finance actually flows, and where it gets stuck.',
    photo: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    articles: [
      { slug: 'climate-finance', category: 'concepts', title: 'Climate Finance' },
      { slug: 'green-bonds', category: 'instruments', title: 'Green Bonds' },
      { slug: 'the-greenium', category: 'instruments', title: 'The Greenium' },
      { slug: 'sustainability-linked-bonds', category: 'instruments', title: 'Sustainability-Linked Bonds' },
      { slug: 'enel-slb', category: 'case-studies', title: "ENEL's SLB" },
      { slug: 'carbon-offsets', category: 'instruments', title: 'Carbon Offsets' }
    ]
  },
  {
    name: 'Architecture of Climate Policy',
    tagline: 'The agreements, taxonomies, and standards that set the rules.',
    photo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    articles: [
      { slug: 'paris-agreement', category: 'frameworks', title: 'Paris Agreement' },
      { slug: 'unfccc-and-cop', category: 'actors', title: 'UNFCCC and COP' },
      { slug: 'eu-taxonomy', category: 'frameworks', title: 'EU Taxonomy' },
      { slug: 'tcfd', category: 'frameworks', title: 'TCFD' },
      { slug: 'ifrs-s1-s2', category: 'frameworks', title: 'IFRS S1 and S2' },
      { slug: 'csrd', category: 'frameworks', title: 'CSRD' }
    ]
  }
];

export function findTrailForArticle(category: string, slug: string) {
  for (const trail of trails) {
    const idx = trail.articles.findIndex(a => a.slug === slug && a.category === category);
    if (idx !== -1) {
      const prev = idx > 0 ? trail.articles[idx - 1] : null;
      const next = idx < trail.articles.length - 1 ? trail.articles[idx + 1] : null;
      return {
        trailName: trail.name,
        current: idx + 1,
        total: trail.articles.length,
        prevHref: prev ? `/${prev.category}/${prev.slug}/` : undefined,
        nextHref: next ? `/${next.category}/${next.slug}/` : undefined,
      };
    }
  }
  return null;
}
