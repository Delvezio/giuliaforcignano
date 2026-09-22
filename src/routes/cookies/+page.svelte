<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section className="pt-[calc(var(--section-py)*0.7)]">
  <div class="container-gf text-center space-y-3">
    <Heading level={1}>Cookie e statistiche</Heading>
    <Paragraph variant="lead" className="max-w-3xl mx-auto">
      Come misuriamo le visite senza usare cookie.
    </Paragraph>
  </div>
</Section>

<Section>
  <Card bg="white" padding="lg" className="space-y-4">
    <Heading level={3}>Nessun cookie di analisi o profilazione</Heading>
    <Paragraph>Il sito non usa cookie per le statistiche né per la pubblicità. Non è presente un banner per i cookie.</Paragraph>

    <Heading level={3}>Statistiche aggregate</Heading>
    <Paragraph>Usiamo Vercel Web Analytics per contare le visite e capire quali pagine vengono consultate. Il servizio non imposta cookie: elabora dati aggregati e usa un identificatore temporaneo che viene eliminato dopo 24 ore. Le statistiche possono comprendere la pagina visitata, la provenienza, l’area geografica approssimativa e informazioni generali su browser e dispositivo. Per la pagina visitata inviamo solo il percorso, senza parametri nell’URL; escludiamo le pagine di conferma dei moduli e non inviamo il contenuto dei messaggi.</Paragraph>

    <Heading level={3}>Contatti</Heading>
    <Paragraph>Per chiarimenti: <a href="mailto:info@giuliaforcignano.it" class="text-accent1 underline">info@giuliaforcignano.it</a>.</Paragraph>
  </Card>
</Section>
