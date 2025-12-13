<script lang="ts">
  import Services from '$lib/components/sections/Services.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  const servizi = [
    {
      icon: '🧭',
      title: 'Consulenza',
      text: 'Sessioni 1:1 per chiarire obiettivi, priorità e roadmap.',
      href: '/contact',
      label: 'Prenota',
      color: 'accent2',
      tone: '200'
    },
    {
      icon: '🎨',
      title: 'Progetto',
      text: 'Struttura, stile e componenti UI in un design system solido.',
      href: '/about',
      label: 'Scopri',
      color: 'accent4',
      tone: '200'
    },
    {
      icon: '✍️',
      title: 'Contenuti',
      text: 'Testi e articoli per blog e pagine: chiari, coerenti, utili.',
      href: '/blog',
      label: 'Leggi',
      color: 'accent5',
      tone: '200'
    }
  ];
</script>

<!-- Intro -->
<Section className="pt-[calc(var(--section-py)*0.7)]">
  <div class="container-gf text-center space-y-3">
    <Heading level={1}>Servizi</Heading>
    <Paragraph variant="lead" className="max-w-3xl mx-auto">
      Un percorso completo: dalla direzione iniziale alla messa online, con stile e contenuti.
    </Paragraph>
  </div>
</Section>

<!-- Griglia servizi -->
<Services title="Cosa posso fare per te" intro="Scegli l'area di interesse o contattami per un pacchetto su misura." {items}={servizi} />

<!-- Processo in 3 step -->
<Section columns={3} gap="gap-6 md:gap-8">
  <Card bg="white" padding="lg">
    <h3 class="text-xl font-heading mb-2">1) Scoperta</h3>
    <p class="opacity-80">Raccolta esigenze, obiettivi e vincoli. Definizione KPI e priorità.</p>
  </Card>
  <Card bg="white" padding="lg">
    <h3 class="text-xl font-heading mb-2">2) Progetto</h3>
    <p class="opacity-80">Architettura pagine, componenti riutilizzabili, palette e tipografia.</p>
  </Card>
  <Card bg="white" padding="lg">
    <h3 class="text-xl font-heading mb-2">3) Contenuti & Go-live</h3>
    <p class="opacity-80">Copy, ottimizzazioni, integrazioni e pubblicazione su Vercel.</p>
  </Card>
</Section>

<!-- CTA -->
<Section align="center">
  <Card bg="glass" padding="lg" className="max-w-3xl mx-auto">
    <Heading level={2} align="center" className="mb-3">Parliamo del tuo progetto</Heading>
    <Paragraph align="center" className="mb-4">Ti aiuto a scegliere il percorso giusto e a pianificare i prossimi passi.</Paragraph>
    <div class="flex flex-wrap justify-center gap-3">
      <Button variant="solid" color="accent1" href="/contact">Prenota un contatto</Button>
      <Button variant="outline" color="accent1" href="/about">Scopri il mio approccio</Button>
    </div>
  </Card>
</Section>
