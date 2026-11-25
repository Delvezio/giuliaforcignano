<!-- src/routes/+page.svelte -->
<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import Services from '$lib/components/sections/Services.svelte';
	import MediaText from '$lib/components/sections/MediaText.svelte';
	import JourneySection from '$lib/components/sections/JourneySection.svelte';
	import SectionHeader from '$lib/components/sections/SectionHeader.svelte';
</script>

<Hero
	eyebrow="Psicologa a Torino"
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
	title="Inizia un percorso consapevole verso"
	titleAccent="il cambiamento"
	intro="Ti posso aiutare a riconoscere e superare dinamiche relazionali, ruoli e blocchi che influenzano la tua vita."
	iconSrc="/img/icon/upgrade.svg"
	iconAlt="Persona che intraprende un percorso di cambiamento"
	sectionClass="py-20 md:py-24 lg:py-28"
	introWidth="max-w-xl"
/>

<!-- Sezione 2: Media + Text (riga 1, invertita) -->
<MediaText
	reverse
	eyebrow="Cos'è l'Analisi Transazionale"
	title="Un approccio psicologico che analizza le interazioni tra le persone"
	text="Aiuto a riconoscere schemi di comportamento disfunzionali, decisioni prese nell'infanzia e a sviluppare consapevolezza per un cambiamento personale e relazionale."
	image="/img/photo/pexels-shvets-production-7176026.jpg"
	alt="Colloquio psicologico online"
/>

<!-- Sezione 2: Media + Text (riga 2) -->
<MediaText
	eyebrow="Supporto psicologico continuativo"
	title="Una psicologa vicino a te, ovunque tu sia: sedute in studio a Torino e online"
	text="Puoi iniziare il tuo percorso psicologico nel mio studio a Torino oppure da casa, con colloqui online."
	image="/img/photo/pexels-liza-summer-6383268.jpg"
	alt="Studio di psicologia a Torino"
/>

<Services />

<!-- <Testimonials title="Dicono di me" intro="Cosa dicono le persone che hanno lavorato con me." />-->

<JourneySection
	title="Il tuo viaggio "
	titleAccent="inizia qui"
	intro="Un percorso che unisce ascolto, metodo e continuità: ti riconosci in una di queste situazioni?"
/>
