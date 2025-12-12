import type { PageLoad } from './$types';
import { posts } from '$lib/data/posts';

export const load: PageLoad = ({ params }) => {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return { status: 404 };
  }
  return { post };
};
