<!-- src/lib/components/ui/Section.svelte -->
<script lang="ts">
  /**
   * Section con padding verticale controllato dai token
   * + griglia opzionale a 1–3 colonne.
   *
   * Props:
   * - as: tag HTML ('section' di default)
   * - columns: 1 | 2 | 3 (default: 1)
   * - gap: tailwind gap classes (default: 'gap-6 md:gap-8')
   * - align: 'start' | 'center' (allineamento contenuti)
   * - className: classi aggiuntive
   */
  export let as: 'section' | 'div' | 'article' = 'section';
  export let columns: 1 | 2 | 3 | 4 | 5 = 1;
  export let gap: string = 'gap-6 md:gap-8';
  export let align: 'start' | 'center' = 'start';
  export let className: string = '';
</script>

<svelte:element this={as} class={`section-gf ${className}`}>
  <div class="container-gf">
    <div
      class={`grid ${gap}
        ${columns === 1 ? 'grid-cols-1' : ''}
        ${columns === 2 ? 'md:grid-cols-2 grid-cols-1' : ''}
        ${columns === 3 ? 'md:grid-cols-3 grid-cols-1' : ''}
        ${columns === 4 ? 'md:grid-cols-4 grid-cols-1' : ''}
        ${columns === 5 ? 'md:grid-cols-5 grid-cols-1' : ''}
        ${align === 'center' ? 'place-items-center' : ''}`}
    >
      <slot />
    </div>
  </div>
</svelte:element>
