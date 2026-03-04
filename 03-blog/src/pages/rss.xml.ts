import type { APIRoute } from "astro";
import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from "astro:content";

export const GET = ( async ({ params, request, site }) => {
    const blogPosts = await getCollection('blog');


  return rss({
    stylesheet: '/styles/rss.xsl',
    title: 'Isaac Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: site ?? '',
    items: blogPosts.map ( ({data, slug }) => ({
        title: data.title,
        pubDate: data.date,
        description: data.description,
        link: `posts/${slug}`,
    })),
    customData: `<language>en-US</language>`
  });
}) satisfies APIRoute;