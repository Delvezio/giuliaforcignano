<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount, onDestroy, tick } from 'svelte';
  import Button from '$lib/components/ui/Button.svelte';

  export let open = false;
  export let title = '';
  export let image: string | undefined = undefined;
  export let description: string | undefined = undefined;
  /** HTML ricco (trusted) per il corpo */
  export let html: string | undefined = undefined;

  let dialogEl: HTMLDivElement | null = null;

  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }

  function close() {
    open = false;
  }

  onMount(() => {
    if (!browser) return;
    window.addEventListener('keydown', onKey);
    if (open) tick().then(() => dialogEl?.focus());
  });

  $: if (browser && open) {
    // focus “gentile” al dialog quando si apre
    tick().then(() => dialogEl?.focus());
  }

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener('keydown', onKey);
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

    <!-- Bottom sheet: ancorata al fondo, con bordo superiore arrotondato -->
    <div class="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full max-w-screen-md">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-dialog-title"
        tabindex="-1"
        bind:this={dialogEl}
        class="bg-white rounded-t-3xl border border-black/5 overflow-hidden
               flex flex-col
               /* vincoli di altezza sulla viewport, senza toccare il body */
               max-h-[min(100dvh-1rem)] md:max-h-[min(100dvh-2rem)]
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

        <!-- Immagine (opzionale, fissa in alto, non cresce) -->
        {#if image}
          <div class="overflow-hidden shrink-0">
            <img src={image} alt={title} class="block h-40 w-full md:h-56 object-cover" />
          </div>
        {/if}

        <!-- Body: occupa lo spazio restante e scrolla se serve -->
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
            <!-- Primary: full width anche su lg -->
            <Button variant="solid" color="accent1" href="tel:+393403783231" className="w-full lg:w-full">
              Chiama
            </Button>
            <!-- Secondary: visibile fino a md; nascosto su lg -->
            <Button variant="outline" color="accent1" href="mailto:info@giuliaforcignano.it" className="w-full sm:w-auto lg:hidden">
              Scrivi
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
