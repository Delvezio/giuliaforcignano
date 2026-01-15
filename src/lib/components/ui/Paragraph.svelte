<!-- src/lib/components/ui/Paragraph.svelte -->
<script lang="ts">
  /**
   * Paragrafo con tre varianti:
   * - variant: 'base' | 'lead' | 'small'
   * - color: 'fg' | 'ink' | 'white' | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5'
   * - className: extra classi
   * - align: 'left' | 'center'
   */
  export let variant: 'base' | 'lead' | 'small' = 'base';
  export let color:
    | 'fg' | 'ink' | 'white'
    | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5' = 'fg';
  export let className: string = '';
  export let align: 'left' | 'center' = 'left';

  // Classi tipografia per variante
  // lead: Literata (== font-heading), 32px, leading più stretto
  const variantClasses =
    variant === 'lead'
      ? 'font-heading text-2xl leading-tight'
      : variant === 'small'
      ? 'text-[var(--step--1)] leading-[var(--leading-normal)]'
      : 'text-[var(--step-0)] leading-[var(--leading-normal)]';

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

<p class={`${variantClasses} ${colorClass} ${align === 'center' ? 'text-center' : ''} ${className}`.trim()}>
  <slot />
</p>
