<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';

  /** Contenuti */
  export let title: string = '';
  export let intro: string = '';

  /** Icona/immagine in alto (opzionale)
   *  - Usa lo slot <slot name="icon" /> per SVG personalizzati
   *  - Oppure passa iconSrc (URL) o icon (emoji/testo) */
  export let iconSrc: string | undefined = undefined;
  export let iconAlt: string = '';
  export let icon: string | undefined = undefined;

  /** Layout */
  export let sectionClass: string = 'py-16 md:py-20 lg:py-24';
  export let max: string = 'max-w-screen-xl';      // passa a <Section />
  export let introWidth: string = 'max-w-prose';   // larghezza intro

  /** Facoltativo: bg sul container (es. 'bg-accent2-50') */
  export let bg: string = '';
</script>

<Section className={sectionClass} max={max}>
  <Container className="text-center" bg={bg}>
    <div class="flex flex-col items-center gap-4 md:gap-5">
      {#if $$slots.icon}
        <div class="w-12 h-12 md:w-14 md:h-14 grid place-items-center rounded-2xl">
          <slot name="icon" />
        </div>
      {:else if iconSrc}
        <img src={iconSrc} alt={iconAlt} class="w-12 h-12 md:w-14 md:h-14 object-contain" />
      {:else if icon}
        <span class="text-3xl md:text-4xl leading-none">{icon}</span>
      {/if}

      <Heading level={2} align="center">{title}</Heading>

      {#if intro}
        <Paragraph align="center" variant="lead" className={`mx-auto ${introWidth}`}>
          {intro}
        </Paragraph>
      {/if}
    </div>
  </Container>
</Section>
