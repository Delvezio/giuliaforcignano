<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section className="pt-[calc(var(--section-py)*0.7)]">
  <div class="container-gf text-center space-y-3">
    <Heading level={1}>Informativa Privacy</Heading>
    <Paragraph variant="lead" className="max-w-2xl mx-auto">
      Come gestiamo i tuoi dati personali in conformità al Regolamento (UE) 2016/679 (GDPR).
    </Paragraph>
  </div>
</Section>

<Section>
  <Card bg="white" padding="lg" className="space-y-4">
    <Heading level={3}>Titolare del trattamento</Heading>
    <Paragraph>Nome / Ragione sociale — Indirizzo — Email di contatto.</Paragraph>

    <Heading level={3}>Dati raccolti</Heading>
    <Paragraph>Modulo contatti (nome, email, messaggio). Nessun dato viene ceduto a terzi senza basi giuridiche.</Paragraph>

    <Heading level={3}>Finalità</Heading>
    <Paragraph>Rispondere alle richieste inviate tramite il modulo contatti e migliorare i contenuti del sito.</Paragraph>

    <Heading level={3}>Base giuridica</Heading>
    <Paragraph>Consenso dell’interessato e legittimo interesse del Titolare per la gestione delle richieste.</Paragraph>

    <Heading level={3}>Conservazione</Heading>
    <Paragraph>I dati vengono conservati per il tempo necessario a rispondere e comunque non oltre 24 mesi.</Paragraph>

    <Heading level={3}>Diritti dell’interessato</Heading>
    <Paragraph>Accesso, rettifica, cancellazione, limitazione, opposizione, portabilità. Per esercitarli: <a class="text-accent1 underline" href="mailto:info@example.com">info@example.com</a>.</Paragraph>

    <Heading level={3}>Cookie</Heading>
    <Paragraph>Vedi anche la <a class="text-accent1 underline" href="/cookies">Cookie Policy</a> (in preparazione).</Paragraph>
  </Card>
</Section>
