<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import AmbitiGrid from '$lib/components/sections/AmbitiGrid.svelte';
	import Orientamento from '$lib/components/sections/Orientamento.svelte';
	import FirstMeetingLink from '$lib/components/sections/FirstMeetingLink.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<PageHeader
	eyebrow="AMBITI DI INTERVENTO"
	title="Ambiti in cui posso aiutarti"
	intro="Ogni percorso parte dalla persona, dalla sua storia e dagli obiettivi che possiamo definire insieme."
	closingParagraph="Qui trovi alcuni degli ambiti in cui svolgo la mia attività di sostegno psicologico. Non servono a stabilire autonomamente quale percorso sia necessario: possono semplicemente aiutarti a capire meglio di cosa mi occupo."
/>

<Section className="section-rhythm">
	<Container><AmbitiGrid /></Container>
</Section>

<Orientamento title="Ti riconosci in una di queste situazioni?" showPageLink={false} />

<Section className="section-rhythm">
	<Container>
		<div
			class="content-rhythm w-full items-center rounded-[32px] bg-accent2-50 px-6 py-10 text-center md:p-14"
			data-reveal="scale"
			style="--reveal-duration: 850ms;"
		>
			<h2 class="font-heading text-3xl text-ink">
				Non sai quale ambito descrive meglio quello che stai vivendo?
			</h2>
			<p class="text-lg">Non è necessario saperlo prima di contattarmi.</p>
			<div class="flex flex-wrap justify-center gap-3">
				<Button href="mailto:info@giuliaforcignano.it">Scrivimi</Button>
				<Button variant="outline" href="tel:+393403783231">Chiama ora</Button>
			</div>
			<div class="flex justify-center">
				<FirstMeetingLink />
			</div>
		</div>
	</Container>
</Section>
