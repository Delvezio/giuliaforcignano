<!-- src/lib/components/ui/Heading.svelte -->
<script lang="ts">
  /**
   * Heading tipografico H1–H5 con controllo di allineamento e colore.
   *
   * Props:
   * - level: 1|2|3|4|5 → renderizza h1..h5 (default: 2)
   * - align: 'left' | 'center' (default: 'left')
   * - color: 'fg' | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5' | 'white' | 'ink' (default: 'fg')
   * - className: string → classi extra (es. "mb-6")
   *
   * Usa la scala tipografica dai token:
   * h1 → var(--step-5)
   * h2 → var(--step-4)
   * h3 → var(--step-3)
   * h4 → var(--step-2)
   * h5 → var(--step-1)
   */
  export let level: 1 | 2 | 3 | 4 | 5 = 2;
  export let align: 'left' | 'center' = 'left';
  export let color:
    | 'fg'
    | 'accent1'
    | 'accent2'
    | 'accent3'
    | 'accent4'
    | 'accent5'
    | 'white'
    | 'ink' = 'fg';
  export let className: string = '';

  const tag = (`h${level}`) as keyof HTMLElementTagNameMap;

  const sizeVar = {
    1: 'var(--step-5)',
    2: 'var(--step-4)',
    3: 'var(--step-3)',
    4: 'var(--step-2)',
    5: 'var(--step-1)'
  }[level];

  const colorClass =
    color === 'fg' ? 'text-fg' :
    color === 'white' ? 'text-white' :
    color === 'ink' ? 'text-ink' :
    color === 'accent1' ? 'text-accent1' :
    color === 'accent2' ? 'text-accent2' :
    color === 'accent3' ? 'text-accent3' :
    color === 'accent4' ? 'text-accent4' :
    color === 'accent5' ? 'text-accent5' : 'text-fg';
</script>

<svelte:element
  this={tag}
  class={`font-heading font-normal tracking-tight ${align === 'center' ? 'text-center' : ''} ${colorClass} ${className}`}
  style={`font-size:${sizeVar}; line-height:${level <= 2 ? 'var(--leading-tight)' : 'var(--leading-normal)'};`}
>
  <slot />
</svelte:element>
