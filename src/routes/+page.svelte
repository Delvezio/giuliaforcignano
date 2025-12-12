<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<!-- Hero -->
<Section className="pt-[calc(var(--section-py)*0.7)]">
  <Container className="text-center space-y-6">
    <Heading level={1} color="ink" className="mb-2">Giulia Forcignano</Heading>
    <Paragraph variant="lead" className="max-w-2xl mx-auto">
      Base SvelteKit + Tailwind con design tokens, sezioni responsive e componenti UI pronti.
    </Paragraph>
    <div class="flex justify-center gap-3">
      <Button variant="solid" color="accent1">Call to Action</Button>
      <Button variant="outline" color="accent1">Scopri di più</Button>
      <Button variant="soft" color="accent2">Contattami</Button>
    </div>
  </Container>
</Section>

<Section columns={5} className="bg-white/40 rounded-2xl">
  <div class="h-10 rounded bg-accent1"></div>
  <div class="h-10 rounded bg-accent2"></div>
  <div class="h-10 rounded" style="background: var(--color-accent3)"></div>
  <div class="h-10 rounded bg-accent4"></div>
  <div class="h-10 rounded bg-accent5"></div>
</Section>

<Section columns={3} className="bg-black/40 rounded-2xl">
<Card bg="accent4" tone="50"  padding="lg">Azzurro 50</Card>
<Card bg="accent4" tone="100"  padding="lg">Azzurro 100</Card>
<Card bg="accent4" tone="200" padding="lg">Azzurro 200</Card>
<Card bg="accent4" tone="300" padding="lg">Azzurro 300</Card>
<Card bg="accent4" tone="400" padding="lg">Azzurro 400</Card>
<Card bg="accent4" tone="500" padding="lg" className="text-white">Azzurro 500</Card>
<Card bg="accent4" tone="600" padding="lg" className="text-white">Azzurro 600</Card>
<Card bg="accent4" tone="600" padding="lg" className="text-white">Azzurro 700</Card>
<Card bg="accent4" tone="800" padding="lg" className="text-white">Azzurro 800</Card>
<Card bg="accent4" tone="900" padding="lg" className="text-white">Azzurro 900</Card>
</Section>

<!-- Grid 3 colonne -->
<Section columns={3} className="bg-white/40 rounded-2xl">
  <Card padding="lg">
    <Heading level={3} className="mb-2">Layout controllato</Heading>
    <Paragraph>Padding e margini globali da un unico punto via tokens.</Paragraph>
  </Card>
  <Card padding="lg" bg="accent3" tone="800">
    <Heading level={3} className="mb-2">Colori a scala</Heading>
    <Paragraph>Palette pastel con scale 50→900 e alias base.</Paragraph>
  </Card>
  <Card padding="lg" bg="accent2">
    <Heading level={3} className="mb-2">Componenti modulari</Heading>
    <Paragraph>Section/Container/Heading/Paragraph/Button/Card riutilizzabili.</Paragraph>
  </Card>
</Section>

<!-- CTA -->
<Section align="center">
  <Card padding="lg" bg="accent3" tone="200" as="section" className="max-w-3xl mx-auto">
    <Heading level={2} align="center" className="mb-3">Pronti per la Landing</Heading>
    <Paragraph align="center" className="mb-4">Questa base crescerà in 5+ pagine, blog e form contatti.</Paragraph>
    <div class="flex flex-wrap justify-center gap-3">
      <Button variant="solid" color="accent1">Inizia ora</Button>
      <Button variant="outline" color="accent1">Roadmap</Button>
    </div>
  </Card>
</Section>

