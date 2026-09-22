<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import Services from '$lib/components/sections/Services.svelte';
  import FinalCta from '$lib/components/sections/FinalCta.svelte';
  import MediaText from '$lib/components/sections/MediaText.svelte';
  import SectionHeader from '$lib/components/sections/SectionHeader.svelte';
  import Orientamento from '$lib/components/sections/Orientamento.svelte';
  import FirstMeetingTeaser from '$lib/components/sections/FirstMeetingTeaser.svelte';
</script>

<Hero
eyebrow="Psicologa"
  subtitle="Consulenza e sostegno psicologico rivolte ad adolescenti e adulti a Torino."
  highlights={[
    { icon: '/img/icon/Therapy-Counseling.png', text: 'Sedute in presenza' },
    { icon: '/img/icon/hello.png', text: 'Sedute online' }
  ]}
  image="/img/photo/giulia-forcignano-psicologa-6.jpg"
  primaryHref="tel:+393403783231"
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
  text="Puoi iniziare il tuo percorso nel mio studio a Torino oppure da casa, con colloqui online."
  image="/img/photo/pexels-liza-summer-6383268.jpg"
  alt="Materiali e follow-up"
/>


<Orientamento />

<Services />

<FirstMeetingTeaser />

<!-- <Testimonials title="Dicono di me" intro="Cosa dicono le persone che hanno lavorato con me." />-->

<FinalCta
  title="Possiamo partire da una prima domanda."
  text="Se vuoi chiedermi un’informazione o capire se possiamo fissare un primo incontro, puoi contattarmi senza impegno."
  primaryHref="mailto:info@giuliaforcignano.it"
  primaryLabel="Scrivimi"
  secondaryHref="tel:+393403783231"
  secondaryLabel="Chiamami"
/>
