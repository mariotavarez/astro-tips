import rss from '@astrojs/rss'

import { getCollection } from 'astro:content'

export async function get(context) {
  const posts = await getCollection('tips')

  return rss({
    // `<title>` field in output xml
    title: 'Astro Tips',
    // `<description>` field in output xml
    description: 'Astro Tips Page',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  })
}
