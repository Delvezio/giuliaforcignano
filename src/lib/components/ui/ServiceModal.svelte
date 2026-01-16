<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import Button from '$lib/components/ui/Button.svelte';

  export let open = false;
  export let title = '';
  export let image: string | undefined = undefined;
  export let description: string | undefined = undefined;
  export let html: string | undefined = undefined;

  let mounted = false;
  let prevOverflow = '';
  let prevPaddingRight = '';
  let dialogEl: HTMLDivElement | null = null;

  function lockScroll() {
    const root = document.documentElement;
    prevOverflow = root.style.overflow || '';
    prevPaddingRight = root.style.paddingRight || '';
    const sbw = window.innerWidth - root.clientWidth; // larghezza scrollbar
    root.style.overflow = 'hidden';
    if (sbw > 0) root.style.paddingRight = `${sbw}px`;
  }
  function unlockScroll() {
    const root = document.documentElement;
    root.style.overflow = prevOverflow;
    root.style.paddingRight = prevPaddingRight;
  }
  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') open = false;
  }

  onMount(() => {
    mounted = true;
    if (open) {
      lockScroll();
      window.addEventListener('keydown', onKey);
      tick().then(() => dialogEl?.focus());
    }
  });

  $: if (mounted) {
    if (open) {
      lockScroll();
      window.addEventListener('keydown', onKey);
      tick().then(() => dialogEl?.focus());
    } else {
      unlockScroll();
      window.removeEventListener('keydown', onKey);
    }
  }

  onDestroy(() => {
    unlockScroll();
    window.removeEventListener('keydown', onKey);
  });

  function close() {
    open = false;
  }
</script>

{#if open}
  <!-- Backdrop: scurisce + sfoca -->
  <div class="fixed inset-0 z-50">
    <button
      class="absolute inset-0 bg-black/40 backdrop-blur"
      aria-label="Chiudi"
      on:click={close}
    ></button>

    <!-- Wrapper: occupa tutta la viewport, posiziona il pannello in basso -->
    <div class="fixed inset-0 z-[60] flex items-end justify-center p-2 md:p-4">
      <!-- Pannello bottom-sheet:
           - max-h con unità *svh* per iOS/Chrome mobile
           - layout a colonna, header/footer fissi, body scrolla -->
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-dialog-title"
        tabindex="-1"
        bind:this={dialogEl}
        class="w-full max-w-screen-md
               bg-white border border-black/5
               rounded-t-3xl md:rounded-3xl
               overflow-hidden flex flex-col
               max-h-[100svh] md:max-h-[calc(100svh-2rem)]
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

        <!-- Immagine (opzionale) - non cresce -->
        {#if image}
          <div class="overflow-hidden shrink-0">
            <img src={image} alt={title} class="block h-40 w-full md:h-56 object-cover" />
          </div>
        {/if}

        <!-- Body: cresce e scrolla se supera la viewport -->
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
            <!-- Primary: full width su lg come richiesto -->
            <Button
              variant="solid"
              color="accent1"
              href="tel:+393403783231"
              className="w-full lg:w-full"
            >
              Chiama
            </Button>

            <!-- Secondary: fino a md visibile; nascosto su lg -->
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
