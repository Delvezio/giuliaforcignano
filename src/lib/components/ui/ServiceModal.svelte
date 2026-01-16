<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount, onDestroy, tick } from 'svelte';
  import Button from '$lib/components/ui/Button.svelte';

  export let open = false;
  export let title = '';
  export let image: string | undefined = undefined;
  export let description: string | undefined = undefined;
  export let html: string | undefined = undefined;

  let dialogEl: HTMLDivElement | null = null;

  // === Scroll lock globale (ref-counter) ===
  let prevOverflow = '';
  let prevPaddingRight = '';

  // un solo contatore condiviso tra TUTTE le istanze (modulo)
  let lockCount = 0;

  function lockScroll() {
    if (!browser) return;
    const root = document.documentElement;
    if (lockCount === 0) {
      // salva stato precedente
      prevOverflow = root.style.overflow || '';
      prevPaddingRight = root.style.paddingRight || '';
      // compensa la scrollbar per evitare "salti" orizzontali
      const sbw = window.innerWidth - root.clientWidth;
      root.style.overflow = 'hidden';
      if (sbw > 0) root.style.paddingRight = `${sbw}px`;
    }
    lockCount += 1;
  }

  function unlockScroll() {
    if (!browser) return;
    if (lockCount > 0) lockCount -= 1;
    if (lockCount === 0) {
      const root = document.documentElement;
      root.style.overflow = prevOverflow;
      root.style.paddingRight = prevPaddingRight;
      prevOverflow = '';
      prevPaddingRight = '';
    }
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }

  function close() {
    // chiudi prima…
    open = false;
    // …e garantisci comunque lo sblocco in microtask
    if (browser) queueMicrotask(unlockScroll);
  }

  onMount(() => {
    if (!browser) return;
    if (open) {
      lockScroll();
      window.addEventListener('keydown', onKey);
      tick().then(() => dialogEl?.focus());
    }
  });

  // reattività sull’apertura/chiusura
  $: if (browser) {
    if (open) {
      lockScroll();
      window.addEventListener('keydown', onKey);
      tick().then(() => dialogEl?.focus());
    } else {
      window.removeEventListener('keydown', onKey);
      unlockScroll();
    }
  }

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener('keydown', onKey);
    // in qualunque caso, a distruzione, rilascia il lock
    unlockScroll();
  });
</script>

{#if open}
  <!-- Backdrop: scurisce + sfoca -->
  <div class="fixed inset-0 z-50">
    <button
      class="absolute inset-0 bg-black/40 backdrop-blur"
      aria-label="Chiudi"
      on:click={close}
    ></button>

    <!-- Bottom sheet wrapper -->
    <div class="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full max-w-screen-md">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-dialog-title"
        tabindex="-1"
        bind:this={dialogEl}
        class="bg-white rounded-t-3xl border border-black/5 overflow-hidden
               flex flex-col
               max-h-[min(100svh-1rem)] md:max-h-[min(100svh-2rem)]
               pb-[env(safe-area-inset-bottom)]"
      >
        <!-- Header con titolo centrato + X -->
        <div class="relative p-5 md:p-6 border-b border-black/5 shrink-0">
          <h3 id="service-dialog-title" class="font-heading text-2xl md:text-3xl text-center">
            {title}
          </h3>
          <button
            type="button"
            class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl
                   hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2"
            aria-label="Chiudi"
            on:click={close}
          >
            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>

        <!-- Immagine (opzionale, non cresce) -->
        {#if image}
          <div class="overflow-hidden shrink-0">
            <img src={image} alt={title} class="block h-40 w-full md:h-56" />
          </div>
        {/if}

        <!-- Body scrollabile -->
        <div class="p-5 md:p-6 grow min-h-0 overflow-y-auto">
          {#if html}
            <div class="prose prose-ink prose-headings:font-heading max-w-none">
              {@html html}
            </div>
          {:else if description}
            <p class="leading-relaxed">{description}</p>
          {/if}
        </div>

        <!-- CTA footer -->
        <div class="p-5 md:p-6 border-t border-black/5 shrink-0">
          <div class="flex flex-col sm:flex-row gap-3">
            <!-- Primary: full width su lg -->
            <Button variant="solid" color="accent1" href="tel:+393403783231" className="w-full lg:w-full">
              Chiama
            </Button>
            <!-- Secondary: visibile fino a md, nascosto su lg -->
            <Button variant="outline" color="accent1" href="mailto:info@giuliaforcignano.it" className="w-full sm:w-auto lg:hidden">
              Scrivi
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
