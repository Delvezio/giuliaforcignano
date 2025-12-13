<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section className="pt-[calc(var(--section-py)*0.7)]">
  <div class="container-gf text-center space-y-3">
    <Heading level={1}>Cookie Policy</Heading>
    <Paragraph variant="lead" className="max-w-3xl mx-auto">
      Informazioni sull’uso dei cookie su questo sito.
    </Paragraph>
  </div>
</Section>

<Section>
  <Card bg="white" padding="lg" className="space-y-4">
    <Heading level={3}>Cosa sono i cookie</Heading>
    <Paragraph>I cookie sono piccoli file di testo che i siti visitati inviano al tuo dispositivo per memorizzare informazioni.</Paragraph>

    <Heading level={3}>Tipologie di cookie utilizzati</Heading>
    <ul class="list-disc pl-5 space-y-2">
      <li><strong>Tecnici</strong>: necessari al funzionamento del sito (es. preferenze di navigazione).</li>
      <li><strong>Di misurazione anonimizzata</strong>: opzionali, per statistiche aggregate senza profilazione.</li>
    </ul>

    <Heading level={3}>Gestione del consenso</Heading>
    <Paragraph>Puoi modificare le preferenze sui cookie dal banner (quando presente) o dalle impostazioni del browser.</Paragraph>

    <Heading level={3}>Durata e conservazione</Heading>
    <Paragraph>I cookie hanno una durata variabile (di sessione o persistenti). Puoi cancellarli in qualsiasi momento.</Paragraph>

    <Heading level={3}>Contatti</Heading>
    <Paragraph>Per chiarimenti: <a href="mailto:info@example.com" class="text-accent1 underline">info@example.com</a></Paragraph>
  </Card>
</Section>
