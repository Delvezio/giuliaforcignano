<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  /** Contenuti base */
  export let eyebrow: string | undefined = undefined;
  export let title: string = '';
  export let intro: string | undefined = undefined;

  /** Icona opzionale */
  export let iconSrc: string | undefined = undefined;
  export let iconAlt: string = '';
  export let icon: string | undefined = undefined; // emoji/testo
  // opzionale: <slot name="icon" />

  /** CTA opzionali */
  export let primaryHref: string | undefined = undefined;
  export let primaryLabel: string | undefined = undefined;
  export let secondaryHref: string | undefined = undefined;
  export let secondaryLabel: string | undefined = undefined;
  export let secondaryVariant: 'outline' | 'soft' = 'outline';

  /** Pannello bg (tipo Hero) */
  export let panel: boolean = false;
  export let panelBg: string = 'bg-white'; // usato se panel == true
  export let panelPaddingHeight: string = '[--ph-min:28rem] min-h-[var(--ph-min)]'; // altezza minima del pannello

  /** Immagine opzionale (≈1/3 del pannello) */
  export let image: boolean = false;
  export let imageSrc: string = '';
  export let imageAlt: string = '';
  export let imageSide: 'left' | 'right' = 'right';

  /** Nuovo: controllo layout contenuti testuali */
  export let align: 'center' | 'start' | undefined = undefined;          // preferenza esplicita
  export let contentGap: string = 'gap-6 md:gap-10';                       // spacing verticale

  // risoluzione finale dell’allineamento:
  // - se align non è passato: con immagine → start, senza → center
  $: alignResolved = align ?? (image ? 'start' : 'center');
  $: alignClasses =
    alignResolved === 'center'
      ? 'items-center text-center'
      : 'items-start text-left';
</script>

<Section className="py-12 md:py-16">
  {#if panel}
    <!-- PANNELLO con immagine a filo su 3 lati (solo da lg in su), testo centrato verticalmente -->
    <div class={`relative overflow-hidden rounded-[32px] ${panelBg} ${panelPaddingHeight} `}>
      {#if image}
        <!-- IMG ASSOLUTA (DESKTOP-ONLY) -->
        <div
          class="hidden lg:block absolute inset-y-0 w-[45%]"
          class:left-0={imageSide === 'left'}
          class:right-0={imageSide === 'right'}
        >
          <img src={imageSrc} alt={imageAlt} class="w-full h-full object-cover" />
        </div>
      {/if}

      <Container className="py-10 md:py-14">
        <!-- TESTO: padding opposto all’immagine, centrato verticalmente rispetto a min-h -->
        <div
          class="mx-auto lg:min-h-[var(--ph-min)] lg:flex lg:flex-col lg:justify-center"
          class:lg:pr-[52%]={image && imageSide === 'right'}
          class:lg:pl-[52%]={image && imageSide === 'left'}
        >
          <!-- WRAPPER FLEX DEI CONTENUTI -->
          <div class={`flex flex-col ${alignClasses} ${contentGap}`}>
            {#if $$slots.icon || iconSrc || icon}
              <div>
                {#if $$slots.icon}
                  <div class="w-12 h-12 md:w-14 md:h-14 grid place-items-center">
                    <slot name="icon" />
                  </div>
                {:else if iconSrc}
                  <img src={iconSrc} alt={iconAlt} class="w-12 h-12 md:w-14 md:h-14 object-contain" />
                {:else if icon}
                  <span class="text-3xl md:text-4xl leading-none">{icon}</span>
                {/if}
              </div>
            {/if}

            <div class="flex flex-col gap-2">
                {#if eyebrow}
                <p class="text-sm font-medium tracking-wide uppercase text-accent1">{eyebrow}</p>
                {/if}

                <Heading level={1}>
                <slot name="title">{title}</slot>
                </Heading>
            </div>

            {#if $$slots.intro}
              <Paragraph variant="lead" className={`${image ? 'max-w-prose' : 'max-w-2xl'} whitespace-pre-line`}>
                <slot name="intro" />
              </Paragraph>
            {:else if intro}
              <Paragraph variant="lead" className={`${image ? 'max-w-prose' : 'max-w-2xl'} whitespace-pre-line`}>
                {intro}
              </Paragraph>
            {/if}

            {#if (primaryHref && primaryLabel) || (secondaryHref && secondaryLabel)}
              <div class="mt-1 flex flex-wrap gap-3" class:justify-center={alignResolved === 'center'}>
                {#if primaryHref && primaryLabel}
                  <Button variant="solid" color="accent1" href={primaryHref}>{primaryLabel}</Button>
                {/if}
                {#if secondaryHref && secondaryLabel}
                  <Button variant={secondaryVariant} color="accent1" href={secondaryHref}>{secondaryLabel}</Button>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      </Container>
    </div>
  {:else}
    <!-- VERSIONE SENZA PANNELLO (fallback) -->
    <Container>
      <div
        class="mx-auto"
        class:lg:pr-[38%]={image && imageSide === 'right'}
        class:lg:pl-[38%]={image && imageSide === 'left'}
      >
        <!-- WRAPPER FLEX DEI CONTENUTI -->
        <div class={`flex flex-col ${alignClasses} ${contentGap}`}>
          {#if $$slots.icon || iconSrc || icon}
            <div>
              {#if $$slots.icon}
                <div class="w-12 h-12 md:w-14 md:h-14 grid place-items-center">
                  <slot name="icon" />
                </div>
              {:else if iconSrc}
                <img src={iconSrc} alt={iconAlt} class="w-12 h-12 md:w-14 md:h-14 object-contain" />
              {:else if icon}
                <span class="text-3xl md:text-4xl leading-none">{icon}</span>
              {/if}
            </div>
          {/if}
          
          <div class="flex flex-col gap-2">
            {#if eyebrow}
                <p class="text-sm font-medium tracking-wide uppercase text-accent1">{eyebrow}</p>
            {/if}

            <Heading level={1}>
                <slot name="title">{title}</slot>
            </Heading>
          </div>

          {#if $$slots.intro}
            <Paragraph variant="lead" className={`${image ? 'max-w-prose' : 'max-w-2xl'} mt-3 whitespace-pre-line`}>
              <slot name="intro" />
            </Paragraph>
          {:else if intro}
            <Paragraph variant="lead" className={`${image ? 'max-w-prose' : 'max-w-2xl'} mt-3 whitespace-pre-line`}>
              {intro}
            </Paragraph>
          {/if}

          {#if (primaryHref && primaryLabel) || (secondaryHref && secondaryLabel)}
            <div class="mt-1 flex flex-wrap gap-3" class:justify-center={alignResolved === 'center'}>
              {#if primaryHref && primaryLabel}
                <Button variant="solid" color="accent1" href={primaryHref}>{primaryLabel}</Button>
              {/if}
              {#if secondaryHref && secondaryLabel}
                <Button variant={secondaryVariant} color="accent1" href={secondaryHref}>{secondaryLabel}</Button>
              {/if}
            </div>
          {/if}
        </div>

        <!-- IMG SOLO DESKTOP (nascosta su mobile) -->
        {#if image}
          <div class="hidden lg:block mt-8">
            <div class={`w-[45%] ${imageSide === 'left' ? '' : 'ml-auto'}`}>
              <div class="rounded-[24px] overflow-hidden aspect-[4/5]">
                <img src={imageSrc} alt={imageAlt} class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        {/if}
      </div>
    </Container>
  {/if}
</Section>
