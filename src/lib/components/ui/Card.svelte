<script lang="ts">
  export let as: 'div' | 'section' | 'article' = 'div';
  export let padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  export let elevated: boolean = false;

  export let bg: 'glass' | 'white' | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5' = 'glass';
  export let tone: '50'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900' = '300';

  export let className: string = '';

  const p = padding === 'none' ? '' : padding === 'sm' ? 'p-4' : padding === 'lg' ? 'p-8' : 'p-6';
  const shadow = elevated ? 'shadow-lg' : '';

  const surfaceClass =
    bg === 'glass' ? 'card-gf' :
    bg === 'white' ? 'bg-white' :
    '';

  // Se è un accent, costruisci il valore bg:
  // - 500 usa rgb(var(--accentX-500)) perché è una tripla numerica
  // - gli altri toni usano direttamente var(--accentX-TONE) perché sono colori completi
  $: bgValue =
    bg.startsWith('accent')
      ? (tone === '500'
          ? `rgb(var(--${bg}-500))`
          : `var(--${bg}-${tone})`)
      : undefined;
</script>


<svelte:element
  this={as}
  class={`rounded-2xl ${surfaceClass} ${shadow} ${className}`}
  style:background={bgValue}
>
  <div class={p}>
    <slot />
  </div>
</svelte:element>
