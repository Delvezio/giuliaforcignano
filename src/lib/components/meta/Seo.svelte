<script lang="ts">
  import { page } from '$app/stores';
  import { site } from '$lib/config/site';

  export let title: string = site.title;
  export let description: string = site.description;
  export let image: string = site.ogImage;
  export let canonical: string | null = null;

  $: pathname = $page.url.pathname;
  $: url = canonical ?? `${site.url}${pathname}`;
  $: computedTitle = title ?? site.title;
  $: computedDesc = description ?? site.description;
</script>

<svelte:head>
  <title>{computedTitle}</title>
  <meta name="description" content={computedDesc} />
  <link rel="canonical" href={url} />

  <!-- OpenGraph -->
  <meta property="og:type" content="website" />
  <meta property="og:locale" content={site.locale} />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:title" content={computedTitle} />
  <meta property="og:description" content={computedDesc} />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={image} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  {#if site.twitter}<meta name="twitter:site" content={site.twitter} />{/if}
  <meta name="twitter:title" content={computedTitle} />
  <meta name="twitter:description" content={computedDesc} />
  <meta name="twitter:image" content={image} />

  <!-- Favicon (SVG) -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <meta name="theme-color" content="#60a7b2" />
</svelte:head>
