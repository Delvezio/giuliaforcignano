<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import Services from '$lib/components/sections/Services.svelte';
  import Testimonials from '$lib/components/sections/Testimonials.svelte';
  import FinalCta from '$lib/components/sections/FinalCta.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Button from '$lib/components/ui/Button.svelte';
</script>

<Hero
  subtitle="Ti posso aiutare a riconoscere dinamiche relazionali, ruoli e blocchi che influenzano la tua vita."
  highlights={[
    { icon: '🏠', text: 'Sedute in presenza' },
    { icon: '💻', text: 'Sedute online' }
  ]}
  image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&h=1200&q=80"
  primaryHref="/contact"
  primaryLabel="Prenota"
  secondaryHref="/about"
  secondaryLabel="Scopri di più"
  secondaryVariant="outline"
/>

<Services title="Servizi" intro="Tre aree in evidenza: descrizione breve e call to action." />

<Testimonials title="Dicono di me" intro="Cosa dicono le persone che hanno lavorato con me." />

<!-- Esempio sezione di follow-up -->
<Section>
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

<!-- CTA finale -->
<FinalCta
  title="Prontə a iniziare?"
  text="Parliamo del tuo progetto: obiettivi, tempi e percorso più adatto."
  primaryHref="/contact"
  primaryLabel="Prenota un contatto"
  secondaryHref="/about"
  secondaryLabel="Scopri di più"
  secondaryVariant="outline"
  bg="accent2"
/>
