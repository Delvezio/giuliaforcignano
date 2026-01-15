<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';

  /** Lato della colonna sticky su desktop */
  export let side: 'left' | 'right' = 'left';
  /** Offset dall’alto per lo sticky (coerente con Nav + respiro) */
  export let stickyTop: string = 'top-24';
  /** Spaziatura tra colonne */
  export let gap: string = 'gap-8 md:gap-10';
  /** Classi extra sul wrapper esterno (opzionale) */
  export let className: string = '';
</script>

<Section className={`py-12 md:py-16 ${className}`}>
  <Container>
    <div class={`grid grid-cols-1 lg:grid-cols-3 ${gap}`}>
      <!-- ASIDE (1/3) -->
      <aside class={`lg:col-span-1 ${side === 'right' ? 'lg:order-2' : ''}`}>
        <div class={`lg:sticky ${stickyTop}`}>
          <slot name="aside" />
        </div>
      </aside>

      <!-- CONTENT (2/3) -->
      <div class={`lg:col-span-2 ${side === 'right' ? 'lg:order-1' : ''}`}>
        <slot />
      </div>
    </div>
  </Container>
</Section>
