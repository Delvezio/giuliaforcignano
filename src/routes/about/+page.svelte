<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<!-- Hero About -->
<Section className="pt-[calc(var(--section-py)*0.7)]">
  <div class="container-gf text-center space-y-4">
    <Heading level={1} color="ink">Chi è Giulia Forcignano</Heading>
    <Paragraph variant="lead" className="max-w-3xl mx-auto">
      Piccola intro biografica: mission, valori e cosa rende unico il progetto.
    </Paragraph>
  </div>
</Section>

<!-- Bio + Foto -->
<Section>
  <!-- Foto / Media -->
  <Card bg="glass" padding="lg" className="aspect-4/3 overflow-hidden">
    <!-- Sostituisci con una <img> reale -->
    <div class="w-full h-full rounded-2xl bg-accent2-100 grid place-items-center text-ink/70">
      Inserisci qui una foto (img)
    </div>
  </Card>

  <!-- Testo -->
  <div class="space-y-4">
    <Heading level={2}>Storia & Approccio</Heading>
    <Paragraph>
      Racconta la storia in 6–8 righe: esperienza, formazione, stile, e cosa offri
      ai clienti/lettori. Mantieni un tono vicino al brand e ai tuoi valori.
    </Paragraph>
    <Paragraph>
      Evidenzia risultati, riconoscimenti o specializzazioni. Inserisci eventuali
      callout su tecniche o servizi principali.
    </Paragraph>

    <div class="flex gap-3 pt-2">
      <Button variant="solid" color="accent1" href="/contact">Contattami</Button>
      <Button variant="outline" color="accent1" href="/blog">Leggi il blog</Button>
    </div>
  </div>
</Section>

<!-- Valori / Pillars -->
<Section>
  <Card bg="accent2" tone="200" padding="lg">
    <Heading level={3} className="mb-2">Cura</Heading>
    <Paragraph>Attenzione ai dettagli, relazione con la persona e percorsi su misura.</Paragraph>
  </Card>
  <Card bg="accent4" tone="200" padding="lg">
    <Heading level={3} className="mb-2">Professionalità</Heading>
    <Paragraph>Metodologia chiara, tempi e obiettivi condivisi, trasparenza.</Paragraph>
  </Card>
  <Card bg="accent5" tone="200" padding="lg">
    <Heading level={3} className="mb-2">Creatività</Heading>
    <Paragraph>Soluzioni originali ma concrete, con estetica coerente al brand.</Paragraph>
  </Card>
</Section>

<!-- CTA finale -->
<Section>
  <Card bg="glass" padding="lg" className="max-w-3xl mx-auto">
    <Heading level={2} align="center" className="mb-3">Parliamone</Heading>
    <Paragraph align="center" className="mb-4">
      Hai un’idea o un progetto? Scrivimi: troveremo insieme la strada migliore.
    </Paragraph>
    <div class="flex flex-wrap justify-center gap-3">
      <Button variant="solid" color="accent1" href="/contact">Prenota un contatto</Button>
      <Button variant="soft" color="accent2" href="/blog">Scopri gli articoli</Button>
    </div>
  </Card>
</Section>

