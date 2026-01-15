<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  /** Contenuti */
  export let eyebrow: string | undefined = undefined;
  export let title: string = '';
  export let text: string | undefined = undefined;

  /** Media */
  export let image: string = '';
  export let alt: string = '';

  /** Opzioni layout */
  export let reverse: boolean = false;                 // true = immagine a destra su lg+
  export let sectionClass: string = 'py-16 md:py-20 lg:py-24';  // spacing verticale

  /** Highlights opzionali */
  export let highlights: { icon?: string; text: string }[] = [];

  /** CTA opzionali */
  export let primaryHref: string | undefined = undefined;
  export let primaryLabel: string | undefined = undefined;
  export let secondaryHref: string | undefined = undefined;
  export let secondaryLabel: string | undefined = undefined;
  export let secondaryVariant: 'outline' | 'soft' = 'outline';
</script>

<Section className={sectionClass}>
  <Container>
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-0">
      <!-- Media -->
      <div class="w-full lg:w-[48%]" class:lg:order-2={reverse}>
        <div class="rounded-[40px] overflow-hidden w-full h-72 sm:h-80 lg:h-[520px]">
          {#if image}
            <img src={image} alt={alt} class="w-full h-full object-cover" />
          {:else}
            <div class="w-full h-full grid place-items-center bg-accent2-100">
              <span class="text-ink/70">Inserisci un’immagine</span>
            </div>
          {/if}
        </div>
      </div>

      <!-- Testo -->
      <div class="w-full lg:w-[48%]" class:lg:order-1={reverse}>
        {#if eyebrow}
          <p class="text-sm font-medium tracking-wide uppercase text-accent1 mb-1">{eyebrow}</p>
        {/if}

        <!-- Slot opzionale per accentuare parole con <em> -->
        <Heading level={3} className="mb-8"><slot name="title">{title}</slot></Heading>

        {#if text}
          <Paragraph variant="lead" className="mb-5 max-w-prose">{text}</Paragraph>
        {/if}

        {#if highlights && highlights.length}
          <ul class="mb-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            {#each highlights as h}
              <li class="inline-flex items-center gap-2 w-auto flex-none">
                {#if h.icon}
                  <span class="text-xl leading-none" aria-hidden="true">{h.icon}</span>
                {:else}
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-accent1-500" aria-hidden="true"></span>
                {/if}
                <span class="text-ink/80 whitespace-nowrap">{h.text}</span>
              </li>
            {/each}
          </ul>
        {/if}

        {#if (primaryHref && primaryLabel) || (secondaryHref && secondaryLabel)}
          <div class="flex flex-wrap gap-3">
            {#if primaryHref && primaryLabel}
              <Button variant="solid" color="accent1" href={primaryHref}>{primaryLabel}</Button>
            {/if}
            {#if secondaryHref && secondaryLabel}
              <Button variant={secondaryVariant} color="accent1" href={secondaryHref}>{secondaryLabel}</Button>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </Container>
</Section>
