<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import AmbitiAnimatedGrid from '$lib/components/sections/AmbitiAnimatedGrid.svelte';
	import StickyAside from '$lib/components/sections/StickyAside.svelte';
	import FirstMeetingSteps from '$lib/components/sections/FirstMeetingSteps.svelte';
	import Heading from '$lib/components/ui/Heading.svelte';
	import Paragraph from '$lib/components/ui/Paragraph.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import MeetingModeCard from '$lib/components/ui/MeetingModeCard.svelte';
	import SectionHeader from '$lib/components/sections/SectionHeader.svelte';
	import FirstMeetingLink from '$lib/components/sections/FirstMeetingLink.svelte';
	import JourneySection from '$lib/components/sections/JourneySection.svelte';
</script>

<PageHeader
	panel
	panelBg="bg-white"
	eyebrow="Il mio metodo"
	intro=" "
>
	<svelte:fragment slot="title">
		<span class="block">Analisi <em class="italic">transazionale</em>:</span>
		<span class="block">cos'è e come <em class="italic">funziona</em></span>
	</svelte:fragment>
	<svelte:fragment slot="intro">
		<span class="block">Conoscersi davvero è un gesto di coraggio.</span>
		<span class="block">Non è necessario farlo da soli.</span>
	</svelte:fragment>
	<svelte:fragment slot="media">
		<AmbitiAnimatedGrid />
	</svelte:fragment>
</PageHeader>

<!-- Contenuto con aside sticky -->
<StickyAside side="left" stickyTop="top-24" gap="gap-8 md:gap-12">
	<!-- ASIDE (sticky) -->
	<svelte:fragment slot="aside">
		<Card padding="lg" bg="white" className="space-y-4">
			<svelte:fragment slot="media">
				<img
					src="/img/photo/giulia-forcignano-chiama-ora-long.jpg"
					alt="Ritratto"
					class="block w-full aspect-[4/3] object-cover"
				/>
			</svelte:fragment>

			<Heading level={4}
				>Vuoi capire se questo approccio può essere adatto alle tue esigenze?</Heading
			>
			<Paragraph className="text-ink/80 my-5">
				Il primo incontro è anche uno spazio in cui conoscere il mio modo di lavorare e fare le
				domande che ritieni importanti.
			</Paragraph>
			<FirstMeetingLink label="Come funziona il primo incontro" />
		</Card>
	</svelte:fragment>

	<!-- CONTENT (2/3) -->
	<article class="prose prose-neutral max-w-none">
		<Heading level={2} className="mb-10">Il Metodo in pratica.</Heading>

		<Paragraph>
			Il mio lavoro si fonda sull’Analisi Transazionale, un approccio che dà grande importanza al
			dialogo interno e alle modalità relazionali che ognuno di noi mette in atto. È questo
			orientamento che ci aiuterà a comprendere meglio come pensi, senti e agisci sia nel rapporto
			con te stesso, sia nelle relazioni con gli altri.
		</Paragraph>

		<Paragraph variant="lead">Cosa significa “transazionale”?</Paragraph>

		<Paragraph>
			La parola transazionale si riferisce agli scambi comunicativi — le “transazioni” — che
			avvengono ogni volta che entriamo in relazione con noi stessi o con gli altri. L’Analisi
			Transazionale aiuta a osservare questi scambi, capire dove sono nati e come influenzano il
			nostro modo di vivere le relazioni.
		</Paragraph>

		<Paragraph variant="lead">Come si sviluppa il percorso psicologico?</Paragraph>

		<Paragraph>
			Stabiliremo obiettivi condivisi: traguardi chiari, su misura per te. Questo sarà il punto di
			partenza per un percorso che costruiremo passo dopo passo, nel rispetto dei tuoi tempi e della
			tua storia. Insieme esploreremo i meccanismi interiori che ti guidano, le emozioni che vivi e
			il modo in cui comunichi. Imparerai a riconoscere gli schemi ripetitivi che si attivano in
			automatico, così da poter scegliere, con più consapevolezza, come agire e come stare nelle
			relazioni.
		</Paragraph>

		<Paragraph variant="lead">
			Non lavoreremo per “correggere” chi sei, ma per portare consapevolezza su ciò che ti guida
			interiormente, così da poter fare scelte più libere e adeguate ai tuoi reali bisogni e a chi
			sei oggi.
		</Paragraph>
	</article>
</StickyAside>

<FirstMeetingSteps title="Il primo incontro: uno spazio per capire da dove partire" />

<Section className="py-12 md:py-16">
	<Container>
		<SectionHeader
			eyebrow="Come ci vediamo"
			title="In studio o sedute online?"
			intro="Puoi iniziare il tuo percorso nel mio studio a Torino oppure online, da uno spazio adatto e riservato."
		/>
		<div class="grid gap-6 lg:grid-cols-2">
			<MeetingModeCard
				eyebrow="IN STUDIO"
				title="Uno spazio a Torino"
				text={`Ricevo in studio in:
Corso Moncalieri 266, 10133 Torino`}
				image="/img/icon/Therapy-Counseling.png"
				imageAlt="Colloquio psicologico in studio"
				href="https://www.google.com/maps/search/?api=1&query=Corso+Moncalieri+266+Torino"
				linkLabel="Apri la mappa"
			/>
			<MeetingModeCard
				eyebrow="ONLINE"
				title="Da uno spazio adatto e riservato"
				text="È possibile svolgere i colloqui online. La modalità viene valutata in base alle tue esigenze."
				image="/img/icon/hello.svg"
				imageAlt="Colloquio psicologico online"
				tone="soft"
			/>
		</div>
	</Container>
</Section>

<JourneySection
	title="Se sei qui, stai già compiendo "
	titleAccent="un primo passo importante"
	intro="Quello di cercare uno spazio per te, dove conoscerti e capire chi sei."
/>
