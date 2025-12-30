<!-- src/lib/components/ui/Container.svelte -->
<script lang="ts">
  /** Tag HTML */
  export let as: 'div' | 'section' | 'article' = 'div';
  /** Padding orizzontale: usa classi Tailwind standard */
  export let px: string = 'px-4 sm:px-8 md:px-16';
  /** Padding verticale opzionale (vuoto di default) */
  export let py: string = '';
  /** Background opzionale: es. 'bg-white', 'bg-accent2-50' */
  export let bg: string = '';
  /** Classi aggiuntive */
  export let className: string = '';
</script>

<svelte:element
  this={as}
  class={`cont w-full ${px} ${py} ${bg} ${className}`.trim()}
>
  <slot />
</svelte:element>
