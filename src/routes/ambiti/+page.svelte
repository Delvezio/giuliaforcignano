<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import AmbitiGrid from '$lib/components/sections/AmbitiGrid.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<PageHeader
	eyebrow="AMBITI DI INTERVENTO"
	title="Ambiti in cui posso aiutarti"
	intro="Non sempre è facile dare immediatamente un nome a ciò che stiamo vivendo."
/>

<Section className="py-8 md:py-12">
	<Container>
		<div class="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80" data-reveal="up">
			<p>
				Una difficoltà può coinvolgere emozioni, relazioni, lavoro, famiglia o più aspetti della
				vita contemporaneamente.
			</p>
			<p>
				Queste pagine descrivono alcuni degli ambiti in cui svolgo la mia attività di sostegno
				psicologico. Non servono per formulare diagnosi o stabilire autonomamente quale percorso sia
				necessario: possono semplicemente aiutarti a capire meglio di cosa mi occupo.
			</p>
			<p>
				Ogni percorso parte dalla persona, dalla sua storia e dagli obiettivi che possiamo definire
				insieme.
			</p>
		</div>
	</Container>
</Section>

<Section className="py-8 md:py-12">
	<Container><AmbitiGrid /></Container>
</Section>

<Section className="py-12 md:py-16">
	<Container>
		<div
			class="w-full rounded-[32px] bg-accent2-50 px-6 py-10 text-center md:p-14"
			data-reveal="scale"
			style="--reveal-duration: 850ms;"
		>
			<h2 class="font-heading mb-4 text-3xl text-ink">
				Non sai quale ambito descrive meglio quello che stai vivendo?
			</h2>
			<p class="mb-7 text-lg">Non è necessario saperlo prima di contattarmi.</p>
			<Button href="/iniziare-un-percorso">Scopri come funziona il primo incontro →</Button>
		</div>
	</Container>
</Section>
