<script lang="ts">
  import Services from '$lib/components/sections/Services.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  
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
<Services eyebrow="Aree di intervento" title="Con quali difficoltà posso aiutarti" intro="Ogni percorso è personalizzato e basato sulle tue reali esigenze." />
