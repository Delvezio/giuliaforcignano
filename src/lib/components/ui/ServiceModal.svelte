<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import { browser } from '$app/environment';
  import Button from '$lib/components/ui/Button.svelte';

  export let open = false;
  export let title = '';
  export let image: string | undefined = undefined;
  export let description: string | undefined = undefined;
  export let html: string | undefined = undefined;

  // === Scroll lock globale con contatore ===
  let dialogEl: HTMLDivElement | null = null;
  let mounted = false;
  let hasKeyListener = false;
  let isLockedByThis = false;

  // Variabili di modulo (condivise tra istanze)
  let lockCount = 0;
  let savedOverflow = '';
  let savedPaddingRight = '';

  function lockScroll() {
    if (!browser) return;
    if (lockCount === 0) {
      const root = document.documentElement;
      savedOverflow = root.style.overflow || '';
      savedPaddingRight = root.style.paddingRight || '';
      const sbw = window.innerWidth - root.clientWidth; // larghezza scrollbar
      root.style.overflow = 'hidden';
      if (sbw > 0) root.style.paddingRight = `${sbw}px`;
    }
    lockCount++;
    isLockedByThis = true;
  }

  function unlockScroll() {
    if (!browser) return;
    if (isLockedByThis) {
      lockCount = Math.max(0, lockCount - 1);
      isLockedByThis = false;
      if (lockCount === 0) {
        const root = document.documentElement;
        root.style.overflow = savedOverflow;
        root.style.paddingRight = savedPaddingRight;
      }
    }
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') open = false;
  }

  onMount(() => {
    mounted = true;
    if (!browser) return;

    if (open) {
      lockScroll();
      if (!hasKeyListener) {
        window.addEventListener('keydown', onKey);
        hasKeyListener = true;
      }
      tick().then(() => dialogEl?.focus());
    }
  });

  // Reattivo: attacca/stacca in modo bilanciato
  $: if (browser && mounted) {
    if (open) {
      if (!isLockedByThis) lockScroll();
      if (!hasKeyListener) {
        window.addEventListener('keydown', onKey);
        hasKeyListener = true;
      }
      tick().then(() => dialogEl?.focus());
    } else {
      if (hasKeyListener) {
        window.removeEventListener('keydown', onKey);
        hasKeyListener = false;
      }
      if (isLockedByThis) unlockScroll();
    }
  }

  onDestroy(() => {
    if (!browser) return;
    if (hasKeyListener) {
      window.removeEventListener('keydown', onKey);
      hasKeyListener = false;
    }
    // In caso il componente venga distrutto mentre è ancora aperto
    if (isLockedByThis) unlockScroll();
  });

  function close() {
    open = false;
  }
</script>

{#if open}
  <!-- Backdrop -->
  <div class="fixed inset-0 z-50">
    <button
      class="absolute inset-0 bg-black/40 backdrop-blur"
      aria-label="Chiudi"
      on:click={close}
    ></button>

    <!-- Bottom sheet -->
    <div class="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full max-w-screen-md">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-dialog-title"
        tabindex="-1"
        bind:this={dialogEl}
        class="bg-white rounded-t-3xl border border-black/5 overflow-hidden
               flex flex-col
               max-h-[min(100vh-1rem)] md:max-h-[min(100vh-2rem)]
               pb-[env(safe-area-inset-bottom)]"
      >
        <!-- Header con titolo e X -->
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

        {#if image}
          <div class="overflow-hidden shrink-0">
            <img src={image} alt={title} class="block h-40 w-full md:h-56 object-cover" />
          </div>
        {/if}

        <!-- Corpo scrollabile -->
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
            <!-- Primary: sempre visibile, full width su lg -->
            <Button
              variant="solid"
              color="accent1"
              href="tel:+393403783231"
              className="w-full lg:w-full"
            >
              Chiama
            </Button>

            <!-- Secondary: nascosto su lg -->
            <Button
              variant="outline"
              color="accent1"
              href="mailto:info@giuliaforcignano.it"
              className="w-full sm:w-auto lg:hidden"
            >
              Scrivi
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
