<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  /** Testo */
  export let title: string = 'Prontə a iniziare?';
  export let text: string =
    'Parliamo del tuo progetto: obiettivi, tempi e percorso più adatto.';

  /** CTA */
  export let primaryHref: string = '/contact';
  export let primaryLabel: string = 'Prenota un contatto';
  export let secondaryHref: string | undefined = '/about';
  export let secondaryLabel: string | undefined = 'Scopri di più';
  export let secondaryVariant: 'outline' | 'soft' = 'outline';

  /** Sfondo sezione */
  export let bg: 'none' | 'gradient' | 'accent2' = 'none';

  // Applica bg della sezione via style (evita classi dinamiche)
  $: sectionBgStyle =
    bg === 'gradient'
      ? 'background: var(--site-bg-gradient);'
      : bg === 'accent2'
      ? 'background: var(--accent2-50);'
      : undefined;
</script>

<Section align="center" style={sectionBgStyle}>
  <Card bg="glass" padding="lg" className="max-w-3xl w-full mx-auto">
    <Heading level={2} align="center" className="mb-3">{title}</Heading>
    <Paragraph align="center" className="mb-5 max-w-prose mx-auto">{text}</Paragraph>
    <div class="flex flex-wrap justify-center gap-3">
      <Button variant="solid" color="accent1" href={primaryHref}>{primaryLabel}</Button>
      {#if secondaryHref && secondaryLabel}
        <Button variant={secondaryVariant} color="accent1" href={secondaryHref}>
          {secondaryLabel}
        </Button>
      {/if}
    </div>
  </Card>
</Section>
