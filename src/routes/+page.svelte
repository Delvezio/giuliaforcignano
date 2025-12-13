<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
</script>

<Hero
  eyebrow="Benvenuta/o"
  title="Giulia Forcignano"
  subtitle="Progetto, contenuti e consulenza. Una base solida per crescere in 5+ pagine, blog e form contatti."
  image="/img/hero.svg"
  primaryHref="/contact"
  primaryLabel="Prenota"
  secondaryHref="/about"
  secondaryLabel="Scopri di più"
  secondaryVariant="outline"
  bg="gradient"
/>

<!-- Esempio sezione di follow-up -->
<Section align="center">
  <Card bg="glass" padding="lg" className="max-w-3xl mx-auto">
    <Heading level={2} align="center" className="mb-3">Pronti per la Landing</Heading>
    <Paragraph align="center" className="mb-4">
      Questa base crescerà in 5+ pagine, blog e form contatti.
    </Paragraph>
    <div class="flex flex-wrap justify-center gap-3">
      <Button variant="solid" color="accent1" href="/contact">Inizia ora</Button>
      <Button variant="outline" color="accent1" href="/about">Roadmap</Button>
    </div>
  </Card>
</Section>
