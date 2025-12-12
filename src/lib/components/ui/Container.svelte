<!-- src/lib/components/ui/Container.svelte -->
<script lang="ts">
  /**
   * Wrapper con larghezza massima e padding orizzontale
   * controllati dai token (container-max, container-px).
   * Props:
   * - as: tag HTML da usare (div, section, main, article)
   * - className: classi extra tailwind
   * - fluid: se true, rimuove il max-width (full-bleed con padding)
   */
  export let as: 'div' | 'section' | 'main' | 'article' = 'div';
  export let className: string = '';
  export let fluid: boolean = false;
</script>

<svelte:element
  this={as}
  class={`container-gf ${fluid ? 'max-w-none' : ''} ${className}`}
>
  <slot />
</svelte:element>
