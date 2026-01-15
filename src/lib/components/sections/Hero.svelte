<!-- src/lib/components/sections/Hero.svelte -->
<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  export let eyebrow: string | undefined = '';
  export let title: string | undefined = '';
  export let subtitle: string | undefined =
    "Ti posso aiutare a riconoscere dinamiche relazionali, ruoli e blocchi che influenzano la tua vita.";

  // Immagine verticale reale (portrait)
  export let image: string =
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&h=1200&q=80';
  export let alt: string = 'Hero image';

  // Highlights (icone + testo). `icon` può essere emoji/testo oppure un path/URL immagine.
  export let highlights: { icon?: string; text: string }[] = [];

  // Layout
  export let reverse: boolean = false;

  // CTA
  export let primaryHref: string = '/contact';
  export let primaryLabel: string = 'Chiama ora';
  export let secondaryHref: string = '/about';
  export let secondaryLabel: string = 'Scopri di più';
  export let secondaryVariant: 'outline' | 'soft' = 'outline';

  // Helper: considera 'icon' come immagine se è un path/URL a file grafico
  const isImageIcon = (val?: string) =>
    !!val && (/(\.png|\.jpe?g|\.svg|\.gif|\.webp)(\?.*)?$/i.test(val) || val.startsWith('/') || val.startsWith('http'));
</script>

<!-- Section = stessa max della Nav -->
<Section className="py-0">
  <!-- Pannello bianco interno alla Section (niente -mx) -->
  <div class="bg-white rounded-[40px]">
    <!-- Container = padding identico alla Nav -->
    <Container>
      <!-- Wrapper contenuti (niente px orizzontali qui) -->
      <div
        class="flex w-full grow self-stretch
               flex-col lg:flex-row
               flex-wrap lg:flex-nowrap
               gap-[70px] lg:gap-x-[3%] lg:gap-y-0
               lg:justify-between lg:items-stretch
               py-16 lg:pt-0 lg:pb-0 my-18"
      >
        <!-- Colonna testo -->
        <div class="w-full lg:w-[50%] flex flex-col gap-[30px] lg:py-[100px]" class:lg:order-2={reverse}>
          {#if eyebrow}
            <p class="text-sm font-medium tracking-wide uppercase text-accent1">{eyebrow}</p>
          {/if}

          <Heading level={1}>
            Psicologa specializzata in <em class="italic">analisi transazionale</em>
          </Heading>

          <div class="max-w-prose">
            {#if subtitle}
              <Paragraph variant="lead">{subtitle}</Paragraph>
            {/if}
          </div>

          <div class="flex flex-wrap gap-3">
            <Button variant="solid" color="accent1" href={primaryHref}>{primaryLabel}</Button>
            <Button variant={secondaryVariant} color="accent1" href={secondaryHref}>{secondaryLabel}</Button>
          </div>

          {#if highlights && highlights.length}
            <ul class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              {#each highlights as h}
                <li class="inline-flex items-center gap-2 w-auto flex-none">
                  {#if h.icon}
                    {#if isImageIcon(h.icon)}
                      <!-- icona come immagine -->
                      <img
                        src={h.icon}
                        alt=""
                        class="h-8 w-8 md:h-12 md:w-12 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    {:else}
                      <!-- icona come emoji/testo -->
                      <span class="text-xl leading-none" aria-hidden="true">{h.icon}</span>
                    {/if}
                  {:else}
                    <!-- fallback puntino -->
                    <span class="inline-block w-2.5 h-2.5 rounded-full bg-accent1-500" aria-hidden="true"></span>
                  {/if}
                  <span class="text-ink/80 whitespace-nowrap">{h.text}</span>
                </li>
              {/each}
            </ul>
          {/if}
        </div>

        <!-- Colonna immagine: overflow sopra/sotto da lg+ -->
        <div class="w-full lg:w-[42%] relative" class:lg:order-1={reverse}>
          <!-- Desktop / large -->
          <div class="hidden lg:block absolute inset-x-0 -inset-y-8">
            <div class="h-full rounded-[40px] overflow-hidden">
              <img src={image} alt={alt} class="w-full h-full object-cover" />
            </div>
          </div>
          <!-- Mobile/Tablet -->
          <div class="lg:hidden w-full h-[420px] rounded-[40px] overflow-hidden -translate-y-4 -mb-4">
            <img src={image} alt={alt} class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</Section>
