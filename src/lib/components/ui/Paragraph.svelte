<!-- src/lib/components/ui/Paragraph.svelte -->
<script lang="ts">
  /**
   * Paragrafo con tre varianti:
   * - variant: 'base' | 'lead' | 'small'
   * - color: 'fg' | 'ink' | 'white' | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5'
   * - className: extra classi
   */
  export let variant: 'base' | 'lead' | 'small' = 'base';
  export let color:
    | 'fg' | 'ink' | 'white'
    | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5' = 'fg';
  export let className: string = '';
  export let align: 'left' | 'center' = 'left'; 

  const size =
    variant === 'lead'  ? 'font-medium' :
    variant === 'small' ? '' : ''; // gestiamo via CSS vars sotto

  const colorClass =
    color === 'fg' ? 'text-fg' :
    color === 'white' ? 'text-white' :
    color === 'ink' ? 'text-ink' :
    color === 'accent1' ? 'text-accent1' :
    color === 'accent2' ? 'text-accent2' :
    color === 'accent3' ? 'text-accent3' :
    color === 'accent4' ? 'text-accent4' :
    color === 'accent5' ? 'text-accent5' : 'text-fg';

  const fontSize =
    variant === 'lead'  ? 'var(--step-1)' :
    variant === 'small' ? 'var(--step--1)' :
                          'var(--step-0)';

  const lineHeight =
    variant === 'lead' ? '1.7' : 'var(--leading-normal)';
</script>

<p
  class={`${size} ${colorClass} ${align === 'center' ? 'text-center' : ''} ${className}`}
  style={`font-size:${fontSize}; line-height:${lineHeight};`}
>
  <slot />
</p>

