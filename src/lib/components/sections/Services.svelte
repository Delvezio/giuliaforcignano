<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  type Accent = 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5';

  export let title: string = 'Servizi';
  export let intro: string | undefined =
    'Tre aree in evidenza: descrizione breve e call to action.';

  export let items: {
    icon?: string;         // emoji o carattere
    title: string;
    text: string;
    href?: string;
    label?: string;
    color?: Accent;        // colore della Card
    tone?: '50'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900';
  }[] = [
    {
      icon: '🧭',
      title: 'Consulenza',
      text: 'Inquadriamo obiettivi e priorità con un percorso chiaro.',
      href: '/contact',
      label: 'Prenota',
      color: 'accent2',
      tone: '200'
    },
    {
      icon: '🎨',
      title: 'Progetto',
      text: 'Struttura, stile e contenuti coerenti con il brand.',
      href: '/about',
      label: 'Scopri',
      color: 'accent4',
      tone: '200'
    },
    {
      icon: '✍️',
      title: 'Contenuti',
      text: 'Testi e articoli pensati per informare e coinvolgere.',
      href: '/blog',
      label: 'Leggi',
      color: 'accent5',
      tone: '200'
    }
  ];
</script>

<!-- Wrapper con intestazione opzionale -->
<Section className="pt-[calc(var(--section-py)*0.6)]">
  <div class="container-gf text-center space-y-3">
    <Heading level={2}>{title}</Heading>
    {#if intro}
      <Paragraph variant="lead" className="max-w-3xl mx-auto">{intro}</Paragraph>
    {/if}
  </div>
</Section>

<!-- Griglia 3 colonne (responsiva) -->
<Section>
  {#each items as item}
    <Card bg={item.color ?? 'accent2'} tone={item.tone ?? '200'} padding="lg" className="h-full">
      <div class="flex flex-col h-full">
        <!-- Icona -->
        <div
          class="w-12 h-12 rounded-2xl grid place-items-center mb-3"
          style={`background: var(--color-${item.color ?? 'accent2'}-100);`}
          aria-hidden="true"
        >
          <span class="text-xl">{item.icon ?? '✨'}</span>
        </div>

        <!-- Testi -->
        <h3 class="text-xl font-heading mb-1">{item.title}</h3>
        <p class="opacity-80 mb-4">{item.text}</p>

        <!-- CTA -->
        {#if item.href && item.label}
          <div class="mt-auto">
            <Button variant="outline" color="accent1" href={item.href}>{item.label}</Button>
          </div>
        {/if}
      </div>
    </Card>
  {/each}
</Section>
