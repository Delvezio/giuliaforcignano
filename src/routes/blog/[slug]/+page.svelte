<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  export let data: { post?: { title: string; date: string; content: string } };
  const post = data.post;
</script>

{#if !post}
  <Section align="center">
    <Card bg="glass" padding="lg" className="max-w-xl mx-auto">
      <Heading level={2} align="center">Articolo non trovato</Heading>
      <Paragraph align="center" className="mt-2">
        Torna al <a href="/blog" class="text-accent1 underline">blog</a>.
      </Paragraph>
    </Card>
  </Section>
{:else}
  <Section className="pt-[calc(var(--section-py)*0.7)]">
    <div class="container-gf space-y-2">
      <Heading level={1}>{post.title}</Heading>
      <p class="text-sm opacity-70">{new Date(post.date).toLocaleDateString('it-IT')}</p>
    </div>
  </Section>

  <Section>
    <Card bg="white" padding="lg" className="prose prose-slate max-w-none">
      <p>{post.content}</p>
    </Card>
  </Section>
{/if}
