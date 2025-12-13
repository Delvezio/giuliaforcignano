<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';

  const year = new Date().getFullYear();
  const socials = [
    { href: 'https://instagram.com/', label: 'Instagram', icon: 'instagram' },
    { href: 'https://facebook.com/', label: 'Facebook', icon: 'facebook' },
    { href: 'mailto:info@example.com', label: 'Email', icon: 'mail' }
  ];
</script>

<footer class="mt-16 border-t border-black/5 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/60">
  <Container className="py-10">
    <div class="grid gap-8 md:grid-cols-3">
      <!-- Brand -->
      <div class="space-y-2">
        <a href="/" class="font-heading text-2xl text-ink">
          Giulia<span class="text-accent1">Forcignano</span>
        </a>
        <Paragraph className="opacity-80">
          Progetto, contenuti e consulenza. Pastelli delicati, chiarezza e cura.
        </Paragraph>
      </div>

      <!-- Menu -->
      <nav class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <Heading level={5} className="uppercase tracking-wide text-xs opacity-60">Sito</Heading>
          <ul class="space-y-1">
            <li><a class="hover:underline" href="/">Home</a></li>
            <li><a class="hover:underline" href="/about">About</a></li>
            <li><a class="hover:underline" href="/blog">Blog</a></li>
            <li><a class="hover:underline" href="/contact">Contatti</a></li>
          </ul>
        </div>
        <div class="space-y-2">
          <Heading level={5} className="uppercase tracking-wide text-xs opacity-60">Risorse</Heading>
          <ul class="space-y-1">
            <li><a class="hover:underline" href="/privacy">Privacy</a></li>
            <li><a class="hover:underline" href="/cookies">Cookie</a></li>
          </ul>
        </div>
      </nav>

      <!-- Contatti / Social -->
      <div class="space-y-3">
        <Heading level={5} className="uppercase tracking-wide text-xs opacity-60">Contatti</Heading>
        <div>
          <a class="block hover:underline" href="mailto:info@example.com">info@example.com</a>
          <span class="block opacity-70">P.IVA 00000000000</span>
        </div>
        <div class="flex items-center gap-3 pt-1">
          {#each socials as s}
            <a href={s.href} aria-label={s.label} class="w-9 h-9 grid place-items-center rounded-xl border border-black/10 hover:bg-accent1-50">
              {#if s.icon === 'instagram'}
                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm12 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>
              {:else if s.icon === 'facebook'}
                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor"><path d="M13 22v-8h3l1-3h-4V9a1 1 0 011-1h3V5h-3a4 4 0 00-4 4v2H8v3h2v8h3z"/></svg>
              {:else if s.icon === 'mail'}
                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              {/if}
            </a>
          {/each}
        </div>
      </div>
    </div>

    <div class="mt-8 pt-6 border-t border-black/5 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
      <span class="opacity-70">© {year} Giulia Forcignano — Tutti i diritti riservati</span>
      <span class="opacity-60">Design & dev · <a class="underline hover:no-underline" href="/">Brand</a></span>
    </div>
  </Container>
</footer>
