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
  import MediaText from '$lib/components/sections/MediaText.svelte';
  import SectionHeader from '$lib/components/sections/SectionHeader.svelte';
</script>

<Hero
  subtitle="Consulenza e sostegno psicologico rivolte ad adolescenti e adulti a Torino."
  highlights={[
    { icon: '/img/icon/Therapy-Counseling.png', text: 'Sedute in presenza' },
    { icon: '/img/icon/hello.png', text: 'Sedute online' }
  ]}
  image="/img/photo/giulia-forcignano-psicologa-6.jpg"
  primaryHref="/contact"
  primaryLabel="Chiama ora"
  secondaryHref="/about"
  secondaryLabel="Scopri di più"
  secondaryVariant="outline"
/>

<SectionHeader
  title="Inizia un percorso consapevole verso "
  titleAccent="il cambiamento"
  intro="Ti posso aiutare a riconoscere e superare dinamiche relazionali, ruoli e blocchi che influenzano la tua vita."
  iconSrc="/img/icon/upgrade.svg"
  iconAlt="Mongolfiera"
  iconFloat={false}
  iconFloatDistance="8px"
  iconFloatDuration="2.5s"
/>

<!-- Sezione 2: Media + Text (riga 1) -->
<MediaText
  eyebrow="Chi sono"
  title="Psicologa laureata all'Università di Torino"
  text="Sono una psicologa laureata in Psicologia del lavoro e del benessere presso l'Università di Torino, con orientamento all'Analisi Transazionale."
  image="/img/photo/giulia-forcignano-psicologa-2.jpg"
  alt="Seduta in presenza"
  primaryHref="/about"
  primaryLabel="Scopri di più"
/>

<!-- Sezione 2: Media + Text (riga 2, invertita) -->
<MediaText
  reverse
  eyebrow="Cos'è l'Analisi Transazionale"
  title="Un approccio che analizza le interazioni tra le persone"
  text="Aiuto a riconoscere schemi di comportamento disfunzionali, decisioni prese nell'infanzia e a sviluppare consapevolezza per un cambiamento personale e relazionale."
  image="/img/photo/pexels-shvets-production-7176026.jpg"
  alt="Seduta online"
/>

<!-- Sezione 2: Media + Text (riga 3) -->
<MediaText
  eyebrow="Continuità e supporto"
  title="Vicino a te, ovunque tu sia, con sedute in presenza e online"
  text="Puoi iniziare il tuo percorso in uno dei miei studi oppure da casa, con sedute online. Entrambe le modalità offrono uno spazio protetto, flessibile e su misura per te."
  image="/img/photo/pexels-liza-summer-6383268.jpg"
  alt="Materiali e follow-up"
/>


<Services eyebrow="Aree di intervento" title="Con quali difficoltà posso aiutarti" intro="Ogni percorso è personalizzato e basato sulle tue reali esigenze." />

<!-- <Testimonials title="Dicono di me" intro="Cosa dicono le persone che hanno lavorato con me." />-->

<SectionHeader
  title="Il tuo viaggio "
  titleAccent="inizia qui"
  intro="Un percorso che unisce ascolto, metodo e continuità: scegli la modalità più adatta a te."
  iconSrc="/img/icon/hot-air-balloon.svg"
  iconAlt="Mongolfiera"
  iconFloat={true}
  iconFloatDistance="8px"
  iconFloatDuration="2.5s"
  primaryHref="tel:+393403783231"
  primaryLabel="Chiamami ora"
  bg="accent2"
  secondaryHref="mailto:info@giuliaforcignano.it"
  secondaryLabel="Scrivimi"
/>
