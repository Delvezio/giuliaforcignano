<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
</script>

<Section className="pt-[calc(var(--section-py)*0.7)]">
  <Card bg="glass" padding="lg" className="max-w-xl mx-auto">
    <Heading level={2} align="center" className="mb-2">Grazie! 🎉</Heading>
    <Paragraph align="center" className="mb-4">
      Il tuo messaggio è stato inviato correttamente. Ti risponderemo al più presto.
    </Paragraph>
    <div class="flex justify-center">
      <Button variant="outline" color="accent1" href="/">Torna alla Home</Button>
    </div>
  </Card>
</Section>
