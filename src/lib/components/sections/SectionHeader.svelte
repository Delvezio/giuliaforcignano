<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  /** Contenuti */
  export let eyebrow: string | undefined = undefined;
  export let title: string = '';
  export let titleAccent: string = '';
  export let intro: string = '';

  /** CTA */
  export let primaryHref: string = '';
  export let primaryLabel: string = '';
  export let secondaryHref: string | undefined = '';
  export let secondaryLabel: string | undefined = '';
  export let secondaryVariant: 'outline' | 'soft' = 'outline';

  /** Icona/immagine opzionale */
  export let iconSrc: string | undefined = undefined;
  export let iconAlt: string = '';
  export let icon: string | undefined = undefined;

  /** Layout */
  export let sectionClass: string = 'py-12 md:py-16';
  export let max: string = 'max-w-screen-md';
  export let introWidth: string = 'max-w-sm md:max-w-lg';
  export let bg: string = '';

  /** NUOVO: animazione leggera dell’icona (opzionale) */
  export let iconFloat: boolean = false;        // ON/OFF
  export let iconFloatDistance: string = '6px'; // intensità (es. '6px' | '0.5rem')
  export let iconFloatDuration: string = '3s';  // durata ciclo (es. '3s' | '2.5s')
</script>

<Section className={sectionClass} max={max}>
  <Container className="text-center" bg={bg}>
    <div class="flex flex-col items-center gap-4 md:gap-6">
      {#if $$slots.icon}
        <div
          class="w-12 h-12 md:w-14 md:h-14 grid place-items-center rounded-2xl"
          class:float-y={iconFloat}
          style={`--float-d:${iconFloatDistance};--float-t:${iconFloatDuration};`}
        >
          <slot name="icon" />
        </div>
      {:else if iconSrc}
        <div
          class="w-20 h-20 md:w-30 md:h-30 grid place-items-center rounded-2xl"
          class:float-y={iconFloat}
          style={`--float-d:${iconFloatDistance};--float-t:${iconFloatDuration};`}
        >
          <img src={iconSrc} alt={iconAlt} class="max-w-full max-h-full object-contain" />
        </div>
      {:else if icon}
        <span
          class="text-3xl md:text-4xl leading-none"
          class:float-y={iconFloat}
          style={`--float-d:${iconFloatDistance};--float-t:${iconFloatDuration}; display:inline-block;`}
        >
          {icon}
        </span>
      {/if}
      {#if eyebrow}
        <p class="text-sm font-medium tracking-wide uppercase text-accent1">{eyebrow}</p>
      {/if}

      <Heading level={2} align="center">
        {title} {#if titleAccent}<em class="italic"> {titleAccent}</em>{/if}
      </Heading>

      {#if intro}
        <Paragraph align="center" variant="lead" className={`mx-auto ${introWidth}`}>
          {intro}
        </Paragraph>
      {/if}

      {#if primaryHref && primaryLabel}
        <div class="flex flex-wrap justify-center gap-4 mt-6">
            <Button variant="solid" color="accent1" href={primaryHref}>{primaryLabel}</Button>
            {#if secondaryHref && secondaryLabel}
                <Button variant={secondaryVariant} color="accent1" href={secondaryHref}>
                {secondaryLabel}
                </Button>
            {/if}
        </div>
      {/if}
    </div>
  </Container>
</Section>

<style>
  /* Animazione verticale delicata */
  @keyframes float-y {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(calc(var(--float-d, 6px) * -1)); }
  }
  .float-y {
    animation: float-y var(--float-t, 3s) ease-in-out infinite;
    will-change: transform;
  }

  /* Accessibilità: rispetta riduzione del movimento */
  @media (prefers-reduced-motion: reduce) {
    .float-y { animation: none !important; }
  }
</style>
