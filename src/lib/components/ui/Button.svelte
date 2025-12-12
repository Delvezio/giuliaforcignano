<script lang="ts">
  /**
   * Button con 3 varianti:
   * - variant: 'solid' | 'outline' | 'soft'
   * - color:   'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5' | 'ink'
   * - size:    'sm' | 'md' | 'lg'
   * - full:    true per width 100%
   * - href:    se valorizzato, renderizza <a> invece di <button>
   * - type:    'button' | 'submit' | 'reset' (default 'button')
   */
  export let className: string = '';
  export let variant: 'solid' | 'outline' | 'soft' = 'solid';
  export let color: 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5' | 'ink' = 'accent1';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let full: boolean = false;
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';

  const padd = { sm: 'px-4 py-2 text-sm', md: 'px-5 py-2.5', lg: 'px-6 py-3 text-lg' }[size];

  const base =
    `inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition
     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
     disabled:opacity-50 disabled:pointer-events-none ${padd} ${full ? 'w-full' : ''} ${className}`;

  const border500 = {
    accent1: 'border-accent1-500',
    accent2: 'border-accent2-500',
    accent3: 'border-accent3-500',
    accent4: 'border-accent4-500',
    accent5: 'border-accent5-500',
    ink:     'border-ink'
  } as const;

  const textBase = {
    accent1: 'text-accent1',
    accent2: 'text-accent2',
    accent3: 'text-accent3',
    accent4: 'text-accent4',
    accent5: 'text-accent5',
    ink:     'text-white'
  } as const;

  const solidText = (color === 'accent1' || color === 'ink') ? 'text-white' : 'text-ink';

  const classes =
    variant === 'solid'
      ? `${base} ${solidText} hover:opacity-90`
      : variant === 'outline'
      ? `${base} border ${border500[color]} bg-white/70 ${textBase[color]} hover:bg-accent1-50`
      : `${base} text-ink hover:brightness-95`;
</script>

{#if href}
  <a
    class={classes}
    href={href}
    style={
      variant === 'solid'
        ? `background: var(--color-${color}-500);`
        : variant === 'soft'
        ? `background: var(--color-${color}-200);`
        : undefined
    }
  >
    <slot name="left" />
    <span><slot /></span>
    <slot name="right" />
  </a>
{:else}
  <button
    class={classes}
    type={type}
    style={
      variant === 'solid'
        ? `background: var(--color-${color}-500);`
        : variant === 'soft'
        ? `background: var(--color-${color}-200);`
        : undefined
    }
  >
    <slot name="left" />
    <span><slot /></span>
    <slot name="right" />
  </button>
{/if}
