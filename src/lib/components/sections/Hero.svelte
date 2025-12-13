<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  /** Testo */
  export let eyebrow: string | undefined = undefined;
  export let title: string = 'Titolo Hero';
  export let subtitle: string | undefined =
    'Sottotitolo descrittivo in 1–2 frasi. Pastelli delicati, chiarezza e cura.';

  /** Immagine */
  export let image: string | undefined = undefined;  // es. '/img/hero.jpg'
  export let alt: string = 'Hero image';

  /** Layout */
  export let reverse: boolean = false;                // true = immagine a sinistra su desktop
  export let bg: 'none' | 'gradient' | 'accent2' = 'none'; // bg della sezione

  /** CTA (opzionali) */
  export let primaryHref: string | undefined = '/contact';
  export let primaryLabel: string | undefined = 'Prenota';
  export let secondaryHref: string | undefined = '/about';
  export let secondaryLabel: string | undefined = 'Scopri di più';
  export let secondaryVariant: 'outline' | 'soft' = 'outline';

  // stile background della sezione (niente classi dinamiche)
  $: sectionBgStyle =
    bg === 'gradient'
      ? 'background: var(--site-bg-gradient);'
      : bg === 'accent2'
      ? 'background: var(--accent2-50);'
      : undefined;
</script>

<!-- Wrapper di sezione (consente padding globale e bg opzionale) -->
<Section className="pt-[calc(var(--section-py)*0.7)]" style={sectionBgStyle}>
  <Container>
    <div class="grid items-center gap-8 md:grid-cols-2">
      <!-- Colonna testo -->
      <div class:md:order-2={reverse}>
        {#if eyebrow}
          <p class="text-sm font-medium tracking-wide uppercase text-accent1 mb-2">{eyebrow}</p>
        {/if}

        <Heading level={1} className="mb-3">{title}</Heading>

        {#if subtitle}
          <Paragraph variant="lead" className="mb-6 max-w-prose">{subtitle}</Paragraph>
        {/if}

        <div class="flex flex-wrap gap-3">
          {#if primaryHref && primaryLabel}
            <Button variant="solid" color="accent1" href={primaryHref}>
              {primaryLabel}
            </Button>
          {/if}
          {#if secondaryHref && secondaryLabel}
            <Button variant={secondaryVariant} color="accent1" href={secondaryHref}>
              {secondaryLabel}
            </Button>
          {/if}
        </div>
      </div>

      <!-- Colonna media -->
      <div class:md:order-1={reverse}>
        <Card bg="glass" padding="none" className="aspect-[4/3] overflow-hidden">
          {#if image}
            <img src={image} alt={alt} class="w-full h-full object-cover rounded-2xl" />
          {:else}
            <!-- Segnaposto se non c'è l'immagine -->
            <div class="w-full h-full rounded-2xl grid place-items-center"
                 style="background: var(--color-accent2-100);">
              <span class="text-ink/70">Inserisci un’immagine (prop <code>image</code>)</span>
            </div>
          {/if}
        </Card>
      </div>
    </div>
  </Container>
</Section>
