import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const items = (await getCollection('news')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Climate Finance Wiki — News',
    description:
      'Curated climate-finance news, explained in plain English and linked to the wiki. Regulation, markets, greenwashing, carbon markets and net-zero finance.',
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: `/news/${item.id}/`,
      categories: [item.data.tag],
    })),
    customData: `<language>en-us</language>`,
  });
}
