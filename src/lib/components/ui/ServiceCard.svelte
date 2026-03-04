<script lang="ts">
  import { browser } from '$app/environment';
  import ServiceModal from '$lib/components/ui/ServiceModal.svelte';
  import Heading from './Heading.svelte';

  export let title: string;
  export let image: string | undefined = undefined;   // opzionale
  export let text: string | undefined = undefined;    // sottotitolo/descrizione breve
  export let modalTitle: string | undefined = undefined;
  export let modalImg: string | undefined = undefined;
  export let modalDescription: string | undefined = undefined;
  export let modalHtml: string | undefined = undefined;

  let open = false;
</script>

<!-- CARD STANDALONE -->
<article class="relative w-full h-full text-center rounded-3xl border border-black/5 bg-white overflow-hidden
                flex flex-col items-center
">

  <!-- Usare un <button> a tutta larghezza = a11y ok (click + tastiera) -->
  <button
    type="button"
    class="group block w-full min-h-80 md:min-h-88 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent1-300"
    aria-label={`Apri dettagli: ${title}`}
    on:click={() => (open = true)}
  >
    

    <!-- Corpo -->
    <div class="p-6 md:p-8 text-center space-y-4">
      <Heading level={5}>{title}</Heading>
      {#if image}
      <!-- Immagine con angoli arrotondati SOLO sopra -->
      <div class="h-56 md:h-64 w-full flex items-center justify-center my-2">
        <img src={image} alt={title} class="block h-auto w-full object-contain" />
      </div>
    {/if}
      {#if text}
        <p class="sm:hidden opacity-80 text-sm text-center">{text}</p>
      {/if}
    </div>
  </button>
</article>

<!-- MODALE -->
 {#if browser}
  <ServiceModal
    bind:open
    title={modalTitle ?? title}
    image={modalImg ?? image}
    description={modalDescription}
    html={modalHtml}
  />
{/if}
