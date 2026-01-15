<!-- src/lib/components/ui/Section.svelte-->
<script lang="ts">
  export let as: 'section' | 'div' | 'article' = 'section';
  /** Tailwind max-width della sezione (standard): 
   *  es: 'max-w-screen-xl', 'max-w-screen-2xl', 'max-w-5xl' */
  export let max: string = 'max-w-[82rem]';
  /** Classi aggiuntive Tailwind */
  export let className: string = '';
</script>

<svelte:element this={as} class={`w-full mx-auto ${max} ${className}`}>
  <slot />
</svelte:element>
