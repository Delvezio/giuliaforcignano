<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import { posts } from '$lib/data/posts';
  const items = [...posts].sort((a, b) => b.date.localeCompare(a.date));
</script>

<Section className="pt-[calc(var(--section-py)*0.7)]">
  <div class="container-gf text-center space-y-3">
    <Heading level={1}>Blog</Heading>
    <Paragraph variant="lead" className="max-w-2xl mx-auto">
      Articoli, news e approfondimenti.
    </Paragraph>
  </div>
</Section>

<Section columns={2} gap="gap-6 md:gap-8">
  {#each items as p}
    <a href={`/blog/${p.slug}`} class="block">
      <Card bg="white" padding="lg" className="hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-heading mb-1">{p.title}</h3>
        <p class="text-sm opacity-70 mb-2">{new Date(p.date).toLocaleDateString('it-IT')}</p>
        <p>{p.excerpt}</p>
      </Card>
    </a>
  {/each}
</Section>
