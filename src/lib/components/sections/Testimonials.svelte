<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  export type Testimonial = {
    quote: string;
    author: string;
    role?: string;
    avatar?: string; // es. /img/people/anna.jpg
    color?: 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5';
    tone?: '50'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900';
  };

  export let title: string = 'Testimonianze';
  export let intro: string | undefined =
    'Cosa dicono le persone che hanno lavorato con me.';
  export let items: Testimonial[] = [
    {
      quote:
        'Giulia ha portato chiarezza e metodo. Il progetto è cresciuto con delicatezza e coerenza.',
      author: 'Anna R.',
      role: 'Imprenditrice',
      color: 'accent2',
      tone: '200'
    },
    {
      quote:
        'Attenta ai dettagli e ai contenuti: risultati concreti, senza fronzoli.',
      author: 'Luca P.',
      role: 'Marketing',
      color: 'accent4',
      tone: '200'
    },
    {
      quote:
        'Una guida sicura. Dalla strategia alla messa online, tutto scorrevole.',
      author: 'Sara M.',
      role: 'Project lead',
      color: 'accent5',
      tone: '200'
    }
  ];
</script>

<!-- Header -->
<Section className="pt-[calc(var(--section-py)*0.6)]">
  <div class="container-gf text-center space-y-3">
    <Heading level={2}>{title}</Heading>
    {#if intro}
      <Paragraph variant="lead" className="max-w-3xl mx-auto">{intro}</Paragraph>
    {/if}
  </div>
</Section>

<!-- Grid -->
<Section columns={3} gap="gap-6 md:gap-8">
  {#each items as t}
    <Card bg={t.color ?? 'accent2'} tone={t.tone ?? '200'} padding="lg" className="h-full">
      <figure class="flex flex-col h-full">
        <!-- Quote icon -->
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
</Section>
