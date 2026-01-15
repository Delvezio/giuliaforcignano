<script lang="ts">
  export let as: 'section' | 'div' | 'article' = 'div';
  export let padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  export let elevated: boolean = false;
  export let bg: 'white' | 'glass' | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5' = 'white';
  export let tone: '50'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900' = '300';
  export let className: string = '';

  /** NEW: controllo degli spigoli dell’area media */
  export let mediaCorners: 'top' | 'all' | 'none' = 'top';

  // padding standard + mappa per margini negativi (x, top) del media flush
  const padMap = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  } as const;

  const negMap = {
    none: '',
    sm: '-mx-4 -mt-4',
    md: '-mx-6 -mt-6',
    lg: '-mx-8 -mt-8'
  } as const;

  // superficie
  const surface =
    bg === 'glass'  ? 'card-gf' :
    bg === 'white'  ? 'bg-white' :
    bg === 'accent1'? `bg-accent1-${tone}` :
    bg === 'accent2'? `bg-accent2-${tone}` :
    bg === 'accent3'? `bg-accent3-${tone}` :
    bg === 'accent4'? `bg-accent4-${tone}` :
                      `bg-accent5-${tone}`;

  const radius = 'rounded-3xl';
  const border  = bg === 'glass' ? 'border border-white/20' : 'border border-black/5';
  const shadow  = elevated ? 'shadow-md' : '';
  const paddingCls = padMap[padding];
  const mediaNeg   = negMap[padding];

  // solo top, oppure tutti, oppure nessuno
  const mediaRadius =
    mediaCorners === 'all'  ? radius :
    mediaCorners === 'top'  ? 'rounded-t-3xl' :
                              '';
</script>

<svelte:element
  this={as}
  class={`relative ${radius} ${surface} ${border} ${shadow} ${paddingCls} ${className}`.trim()}
>
  {#if $$slots.media}
    <!-- MEDIA FLUSH: a filo su top + lati; arrotondato solo SOPRA -->
    <div class={`overflow-hidden ${mediaRadius} ${mediaNeg}`}>
      <!-- Metti <img class="block w-full object-cover"> dentro lo slot -->
      <slot name="media" />
    </div>
  {/if}

  <!-- Contenuto -->
  <div class="relative">
    <slot />
  </div>
</svelte:element>
