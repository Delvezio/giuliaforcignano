import { site, pageMeta } from '$lib/config/site';
import { posts } from '$lib/data/posts';

export const prerender = true;

export function GET() {
  const paths = [
    ...Object.entries(pageMeta)
      .filter(([, meta]) => !meta.noindex)
      .map(([path]) => path),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${site.url}${path}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600',
    },
  });
}
