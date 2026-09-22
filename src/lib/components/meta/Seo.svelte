<script lang="ts">
  import { page } from '$app/stores';
  import { site, pageMeta } from '$lib/config/site';
  import { posts } from '$lib/data/posts';

  export let title: string | null = null;
  export let description: string | null = null;
  export let image: string = site.ogImage;
  export let canonical: string | null = null;

  // pathname normalizzato, senza slash finale
  $: pathname = $page.url.pathname.replace(/\/+$/, '') || '/';

  $: resolved = (() => {
    const known = pageMeta[pathname];
    if (known) return known;

    if (pathname.startsWith('/blog/')) {
      const slug = pathname.slice('/blog/'.length);
      const post = posts.find((p) => p.slug === slug);
      if (post) {
        return {
          title: `${post.title} | Blog di ${site.name}`,
          description: post.excerpt,
          noindex: false,
        };
      }
    }

    return { title: site.title, description: site.description, noindex: false };
  })();

  $: computedTitle = title ?? resolved.title;
  $: computedDesc = description ?? resolved.description;
  $: url = canonical ?? `${site.url}${pathname === '/' ? '/' : pathname}`;
  $: absImage = image.startsWith('http') ? image : `${site.url}${image}`;
</script>

<svelte:head>
  <title>{computedTitle}</title>
  <meta name="description" content={computedDesc} />
  <link rel="canonical" href={url} />
  {#if resolved.noindex}
    <meta name="robots" content="noindex, follow" />
  {/if}

  <!-- OpenGraph -->
  <meta property="og:type" content="website" />
  <meta property="og:locale" content={site.locale} />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:title" content={computedTitle} />
  <meta property="og:description" content={computedDesc} />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={absImage} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={computedTitle} />
  <meta name="twitter:description" content={computedDesc} />
  <meta name="twitter:image" content={absImage} />

  <!-- Favicon (SVG) -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <meta name="theme-color" content="#60a7b2" />
</svelte:head>
