<!-- src/lib/components/sections/Testimonials.svelte -->
<script lang="ts" context="module">
  /** Tipo riusabile anche dall’esterno (se serve) */
  export type Testimonial = {
    quote: string;
    author: string;
    role?: string;
    avatar?: string; // es. /img/people/anna.jpg
    color?: 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5';
    tone?: '50'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900';
  };
</script>

<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import SectionHeader from '$lib/components/sections/SectionHeader.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  export let title: string = 'Dicono di me';
  export let intro: string | undefined =
    'Cosa dicono le persone che hanno lavorato con me.';

  export let items: Testimonial[] = [
    {
      quote:
        'Durante un periodo di forte stress, sentivo di non avere più strumenti per affrontare le giornate. Grazie alla terapia con Giulia ho imparato a gestire meglio l’ansia e ad ascoltarmi davvero.',
      author: 'Marco P.',
      role: '',
      color: 'accent2',
      tone: '200'
    },
    {
      quote:
        'Con Giulia ho trovato uno spazio sicuro dove potermi esprimere senza paura di essere giudicata. Il percorso con lei mi ha aiutata a capire meglio cosa mi bloccava e a ritrovare fiducia in me stessa.',
      author: 'Elena T.',
      role: '',
      color: 'accent4',
      tone: '200'
    },
    {
      quote:
        'Ero scettico all’idea di iniziare una terapia, ma Giulia è riuscita a mettermi a mio agio sin da subito. La sua presenza calma e il suo metodo mi hanno aiutato a lavorare su aspetti profondi con serenità.',
      author: 'Sara M.',
      role: '',
      color: 'accent5',
      tone: '200'
    }
  ];
</script>

<!-- Spaziatura coerente con il resto del sito -->
<Section className="py-12 md:py-16">
  <Container>
    <!-- Header sezione (centrato e allineato ai padding della Nav) -->
    <SectionHeader title={title} intro={intro} iconSrc="/img/icon/listening-to-feedback.svg" />

    <!-- Griglia fluida: auto-fit + minmax = colonne dinamiche e card a tutta altezza -->
    <div
      class="mt-8 md:mt-10 grid gap-6 md:gap-8
             [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
    >
      {#each items as t}
        <Card bg={t.color ?? 'accent2'} tone={t.tone ?? '200'} padding="lg" className="h-full">
          <figure class="flex flex-col h-full">
            <!-- Pittogramma citazione -->
            <div class="w-10 h-10 rounded-xl grid place-items-center mb-3"
                 style="background: var(--color-accent1-100);" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
                <path d="M7.17 6A5 5 0 0 0 2 11v7h7v-7H6.5A2.5 2.5 0 0 1 9 7.5V6H7.17Zm9 0A5 5 0 0 0 11 11v7h7v-7h-2.5A2.5 2.5 0 0 1 18 7.5V6h-1.83Z"/>
              </svg>
            </div>

            <blockquote class="text-base leading-relaxed mb-4">“{t.quote}”</blockquote>

            <figcaption class="mt-auto flex items-center gap-3">
              {#if t.avatar}
                <img src={t.avatar} alt={t.author} class="w-10 h-10 rounded-full object-cover" />
              {:else}
                <div class="w-10 h-10 rounded-full grid place-items-center"
                     style="background: var(--color-accent1-200);" aria-hidden="true">
                  <span class="text-sm">{t.author.slice(0,1)}</span>
                </div>
              {/if}
              <div>
                <p class="font-medium">{t.author}</p>
                {#if t.role}<p class="text-sm opacity-70">{t.role}</p>{/if}
              </div>
            </figcaption>
          </figure>
        </Card>
      {/each}
    </div>
  </Container>
</Section>
