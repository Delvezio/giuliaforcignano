<!-- src/lib/components/layout/Nav.svelte -->
<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { page } from '$app/stores';

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contatti' }
  ];

  let open = false;
  $: path = $page.url.pathname;

  const isActive = (href: string, path: string) =>
    href === '/' ? path === '/' : path.startsWith(href);
</script>

<header class="sticky top-0 z-40">
  <div class="backdrop-blur supports-backdrop-filter:bg-white/10 bg-white/80 ">
    <Section>
    <Container className="h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="font-logo text-2xl text-ink">
        Giulia<span class="text-accent1 italic">Forcignanò</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6">
        {#each links as l}
          <a
            href={l.href}
            class="text-sm font-medium px-2 py-1 rounded-xl transition hover:bg-accent1-50"
            class:text-accent1={isActive(l.href, path)}
          >
            {l.label}
          </a>
        {/each}

        <Button variant="solid" color="accent1" href="/contact" className="ml-2">
          Prenota
        </Button>
      </nav>

      <!-- Mobile toggler -->
      <button
        class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-black/10 bg-white/70"
        aria-label="Apri menu"
        on:click={() => (open = !open)}
      >
        {#if open}
          <!-- X -->
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        {:else}
          <!-- Hamburger -->
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </Container>
    </Section>

    <!-- Mobile sheet -->
    {#if open}
      <div class="md:hidden border-t border-black/5 bg-white/90">
        <Container className="py-3">
          <div class="flex flex-col gap-1">
            {#each links as l}
              <a
                href={l.href}
                class="px-3 py-2 rounded-xl text-base transition"
                class:bg-accent1-50={isActive(l.href, path)}
                on:click={() => (open = false)}
              >
                {l.label}
              </a>
            {/each}
            <Button variant="solid" color="accent1" href="/contact" full className="mt-2">
              Prenota
            </Button>
          </div>
        </Container>
        
      </div>
    {/if}
  </div>
</header>
