# Copilot Instructions - Giulia Forcignano

## Project Overview

**Stack:** SvelteKit 5 + Vite + Tailwind CSS 4 + TypeScript 5

A modern landing page site with a comprehensive design token system and reusable UI component library. Uses Vercel adapter for deployment. Current branch: `feat/design-system`.

---

## Architecture & Key Patterns

### Design System: Token-First Approach

The site uses **CSS design tokens** as the single source of truth, defined in `src/lib/styles/tokens.css`:

- **Base tokens** (`--white`, `--ink`) in RGB format for alpha channel support
- **5 accent color scales** (accent1-5) with 50→900 intensity levels using `color-mix(in oklab)` for natural blending
- **Semantic aliases** (`--color-primary`, `--color-secondary`, `--color-accent`) for future rebranding without component changes
- **Spacing/layout tokens** (`--container-max: 80rem`, `--section-py: 4rem`) defined once, consumed everywhere

**Key implementation:** Color tokens use CSS `rgb(var(--x-500))` pattern to combine with alpha, and Tailwind v4 `@theme` rules in `src/routes/layout.css` map these to utility classes like `bg-accent1-200`.

### Component Library Structure

All UI components live in `src/lib/components/ui/` following a composition pattern:

- **Section** (`Section.svelte`): Vertical rhythm wrapper with optional grid (1-3 columns). Uses `--section-py` token.
- **Container** (`Container.svelte`): Max-width constraint layer. Maps `--container-max` and `--container-px`.
- **Card** (`Card.svelte`): Rounded box with shadow, padding, and bg variants (glass/white/accent1-5). Renders as `<div|section|article>`.
- **Heading/Paragraph** (`Heading.svelte`, `Paragraph.svelte`): Semantic text with color props and `className` forwarding.
- **Button** (`Button.svelte`): 3 variants (solid/outline/soft) × 6 colors × 3 sizes, with optional icon slots.

**Design principle:** Props expose Tailwind-friendly values (`color: 'accent1'`, `padding: 'lg'`) rather than raw CSS. All components accept `className` for ad-hoc overrides.

### Responsive Design

- Mobile-first Tailwind approach: single-column layouts default, use `md:` prefix for tablet+.
- Tokens adjust at `768px` breakpoint: `--container-px` (1rem→1.5rem), `--section-py` (4rem→5rem).
- Section grid auto-stacks to 1 column on mobile, expands to target columns on md+.

---

## Developer Workflows

### Development

```bash
npm run dev          # Start Vite dev server with HMR
npm run dev -- --open  # Auto-open browser
```

Server runs on `localhost:5173` by default. Svelte 5's runes enable fine-grained reactivity.

### Code Quality

```bash
npm run check        # Svelte type-check + TS validation
npm run check:watch  # Watch mode for continuous checks
npm run lint         # Eslint + Prettier check
npm run format       # Auto-fix formatting (Prettier)
```

**Important:** Prettier is configured to auto-sort Tailwind classes (`prettier-plugin-tailwindcss`). Eslint integrates TypeScript and Svelte-specific rules.

### Building

```bash
npm run build        # Production build (outputs .svelte-kit/)
npm run preview      # Test production build locally
```

Uses `@sveltejs/adapter-vercel` for deployment to Vercel.

---

## Project Conventions & Patterns

### TypeScript & Type Safety

- **Strict mode** enabled (`tsconfig.json`). All components use `export let` with explicit types.
- **`$lib` alias** preferred over relative imports (defined in SvelteKit, no config needed).
- No `any` types; use `'div' | 'section' | 'article'` unions for HTML element props.

### Component Props Pattern

Components expose semantic props that map to design decisions:

```svelte
<!-- Example: Button.svelte accepts variant + color, not raw CSS -->
<script lang="ts">
  export let variant: 'solid' | 'outline' | 'soft' = 'solid';
  export let color: 'accent1' | 'accent2' | ... = 'accent1';
  export let className: string = ''; // escape hatch for one-offs
</script>
```

This keeps components stable while allowing Tailwind customization via class prop.

### Styling Strategy

- **No CSS-in-JS or CSS modules.** All styling via:
  1. Design tokens (CSS variables in `tokens.css`)
  2. Tailwind utility classes with `@theme` mappings
  3. Component-scoped `<style>` only for complex state (e.g., Button variant logic)

- **Accent colors always scale 50→900:** When adding new features, reference `--accent1-200`, `--accent3-600`, etc. for consistent depth.

### Naming Conventions

- **Components:** PascalCase, semantic names (`Section`, `Card`, `Heading`). No redundant prefixes.
- **Token names:** Kebab-case, hierarchical (`--accent1-500`, `--section-py`).
- **CSS classes:** Tailwind utilities; custom classes rare (only in component `<style>`).

---

## Critical Integration Points

### Tailwind ↔ Design Tokens

Tailwind is configured in `vite.config.ts` with `@tailwindcss/vite` and the plugin pattern. Colors defined in `tokens.css` are exposed to Tailwind via `@theme` rules in `layout.css`.

**To add a new color:** Define CSS variable in `tokens.css`, then add `@theme` mapping in `layout.css`. No Tailwind config file needed.

### Layout Foundation

Page structure in `src/routes/+page.svelte` demonstrates the component composition:

```svelte
<Section>
  <Container>
    <Heading level={1}>Title</Heading>
    <Paragraph>Intro</Paragraph>
  </Container>
</Section>

<Section columns={3}>
  <Card><Heading level={3}>Item</Heading></Card>
  <!-- ... -->
</Section>
```

**Pattern:** Sections wrap Containers, Containers constrain width, Cards provide visual grouping.

### Font System

Crete Round (serif) loaded from `/static/fonts/` via `@font-face` in `layout.css`. System fonts (`ui-sans-serif`) fallback.

---

## Gotchas & Antipatterns

1. **Don't hardcode colors as hex.** Always use accent aliases (`--accent1-500`) so rebranding works everywhere.
2. **Don't add responsive logic in component props.** Section's `columns` prop is static; use Tailwind classes for breakpoint-specific behavior.
3. **Don't skip the `className` escape hatch.** Components should accept it even if not used internally—allows consumers to apply one-off Tailwind.
4. **Svelte 5 runes:** Use `$props()` for destructuring (not object notation), `$state()` for reactive variables. Old `export let` still works but new code prefers runes.

---

## Next Steps / Roadmap Context

From `+page.svelte` comments: Site planned to expand to 5+ pages, blog section, and contact form. Current `+layout.svelte` imports `layout.css` globally; future pages should leverage Section/Container/Card for consistency.

---

## Quick Reference: Token Usage Examples

```css
/* In CSS or Tailwind classes: */
background-color: var(--accent1-200);          /* Soft brand */
color: rgb(var(--ink) / 0.7);                  /* Ink with 70% opacity */
padding: var(--section-py);                    /* Vertical spacing */
border-radius: var(--radius-2xl);              /* Rounded corners */
box-shadow: var(--shadow-card);                /* Elevated card shadow */
```

```html
<!-- In Tailwind utility classes (from @theme): -->
<div class="bg-accent1-200 text-accent3-700 rounded-2xl shadow-card">
  Styled with design tokens
</div>
```
