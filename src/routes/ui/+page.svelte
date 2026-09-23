<script lang="ts">
	import AmbitiGrid from '$lib/components/sections/AmbitiGrid.svelte';
	import AmbitiAnimatedGrid from '$lib/components/sections/AmbitiAnimatedGrid.svelte';
	import FinalCta from '$lib/components/sections/FinalCta.svelte';
	import FirstMeetingLink from '$lib/components/sections/FirstMeetingLink.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import MediaText from '$lib/components/sections/MediaText.svelte';
	import Orientamento from '$lib/components/sections/Orientamento.svelte';
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import PathContactBanner from '$lib/components/sections/PathContactBanner.svelte';
	import SectionHeader from '$lib/components/sections/SectionHeader.svelte';
	import StickyAside from '$lib/components/sections/StickyAside.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import ComponentLabel from '$lib/components/ui/ComponentLabel.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Heading from '$lib/components/ui/Heading.svelte';
	import Paragraph from '$lib/components/ui/Paragraph.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';

	const index = [
		['ui-typography', 'Tipografia'],
		['ui-buttons', 'Pulsanti e link'],
		['ui-cards', 'Card'],
		['ui-hero', 'Hero'],
		['ui-ambiti-animated', 'Ambiti animate'],
		['ui-page-header', 'Page Header'],
		['ui-section-header', 'Section Header'],
		['ui-media-text', 'Media + testo'],
		['ui-ambiti', 'Card ambiti'],
		['ui-service-card', 'Service Card'],
		['ui-orientamento', 'Card percorso'],
		['ui-contact-banner', 'Banner contatto'],
		['ui-sticky-aside', 'Sticky Aside'],
		['ui-final-cta', 'CTA finale'],
		['ui-footer', 'Footer']
	] as const;
</script>

<Section className="py-12 md:py-16">
	<Container>
		<div class="rounded-[36px] bg-white px-6 py-10 md:px-12 md:py-14" data-reveal="scale">
			<p class="mb-3 text-sm font-medium uppercase tracking-wide text-accent1-800" data-reveal="up">
				CATALOGO INTERNO
			</p>
			<div class="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
				<div>
					<Heading level={1}>UI e componenti del sito</Heading>
					<Paragraph variant="lead" className="mt-5 max-w-3xl text-ink/75">
						Ogni elemento è identificato da una riga con il suo nome. Puoi usarla per indicarmi
						quale componente vuoi modificare.
					</Paragraph>
				</div>
				<nav aria-label="Indice dei componenti" class="flex flex-wrap gap-2 lg:justify-end">
					{#each index as item (item[0])}
						<a
							href={`#${item[0]}`}
							class="rounded-full border border-black/10 bg-accent2-50 px-3 py-1.5 text-sm text-ink/75 transition hover:border-accent1-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800"
						>
							{item[1]}
						</a>
					{/each}
				</nav>
			</div>
		</div>
	</Container>
</Section>

<ComponentLabel
	name="Navbar"
	group="Layout globale"
	description="La barra di navigazione è quella visibile in alto in questa pagina."
/>

<ComponentLabel
	id="ui-typography"
	name="Heading e Paragraph"
	group="Tipografia"
	description="Scala completa dei titoli e dei testi utilizzata nel sito."
/>
<Section className="py-8 md:py-12">
	<Container>
		<div class="grid gap-10 rounded-[32px] bg-white p-6 md:grid-cols-2 md:p-10">
			<div class="space-y-6">
				<div>
					<p class="mb-2 text-xs uppercase tracking-wide text-ink/50">Heading H1</p>
					<Heading level={1}>Titolo principale</Heading>
				</div>
				<div>
					<p class="mb-2 text-xs uppercase tracking-wide text-ink/50">Heading H2</p>
					<Heading level={2}>Titolo di sezione</Heading>
				</div>
				<div>
					<p class="mb-2 text-xs uppercase tracking-wide text-ink/50">Heading H3</p>
					<Heading level={3}>Titolo contenuto</Heading>
				</div>
				<div>
					<p class="mb-2 text-xs uppercase tracking-wide text-ink/50">Heading H4</p>
					<Heading level={4}>Titolo card</Heading>
				</div>
				<div>
					<p class="mb-2 text-xs uppercase tracking-wide text-ink/50">Heading H5</p>
					<Heading level={5}>Titolo piccolo</Heading>
				</div>
			</div>
			<div class="space-y-8">
				<div>
					<p class="mb-2 text-xs uppercase tracking-wide text-ink/50">Eyebrow</p>
					<p class="text-sm font-medium uppercase tracking-wide text-accent1-800">
						SOPRATTITOLO DI SEZIONE
					</p>
				</div>
				<div>
					<p class="mb-2 text-xs uppercase tracking-wide text-ink/50">Paragraph lead</p>
					<Paragraph variant="lead"
						>Un testo introduttivo in evidenza, con il carattere dei titoli.</Paragraph
					>
				</div>
				<div>
					<p class="mb-2 text-xs uppercase tracking-wide text-ink/50">Paragraph base</p>
					<Paragraph>Testo corrente usato per spiegazioni e contenuti delle pagine.</Paragraph>
				</div>
				<div>
					<p class="mb-2 text-xs uppercase tracking-wide text-ink/50">Paragraph small</p>
					<Paragraph variant="small">Testo secondario, note e informazioni di supporto.</Paragraph>
				</div>
			</div>
		</div>
	</Container>
</Section>

<ComponentLabel
	id="ui-buttons"
	name="Button e FirstMeetingLink"
	group="Azioni"
	description="Varianti, dimensioni e link testuale animato."
/>
<Section className="py-8 md:py-12">
	<Container>
		<div class="space-y-10 rounded-[32px] bg-white p-6 md:p-10">
			<div>
				<p class="mb-4 text-xs uppercase tracking-wide text-ink/50">Varianti</p>
				<div class="flex flex-wrap items-center gap-4">
					<Button>Solid</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="soft">Soft</Button>
				</div>
			</div>
			<div>
				<p class="mb-4 text-xs uppercase tracking-wide text-ink/50">Dimensioni</p>
				<div class="flex flex-wrap items-center gap-4">
					<Button size="sm">Small</Button>
					<Button size="md">Medium</Button>
					<Button size="lg">Large</Button>
				</div>
			</div>
			<div>
				<p class="mb-4 text-xs uppercase tracking-wide text-ink/50">
					Link sottolineato con freccia
				</p>
				<FirstMeetingLink />
			</div>
		</div>
	</Container>
</Section>

<ComponentLabel
	id="ui-cards"
	name="Card"
	group="Contenitori"
	description="Superfici bianca, glass e colorata con diversi padding."
/>
<Section className="py-8 md:py-12">
	<Container>
		<div class="grid gap-6 md:grid-cols-3">
			<Card bg="white" padding="lg"
				><Heading level={4} className="mb-3">Card bianca</Heading><Paragraph
					>Superficie principale per contenuti e informazioni.</Paragraph
				></Card
			>
			<Card bg="glass" padding="lg"
				><Heading level={4} className="mb-3">Card glass</Heading><Paragraph
					>Superficie traslucida usata per blocchi in evidenza.</Paragraph
				></Card
			>
			<Card bg="accent2" tone="100" padding="lg"
				><Heading level={4} className="mb-3">Card colorata</Heading><Paragraph
					>Superficie con una tonalità della palette.</Paragraph
				></Card
			>
		</div>
	</Container>
</Section>

<ComponentLabel id="ui-hero" name="Hero" group="Sezione" />
<Hero
	eyebrow="Psicologa"
	subtitle="Consulenza e sostegno psicologico rivolte ad adolescenti e adulti a Torino."
	image="/img/photo/giulia-forcignano-psicologa-6.jpg"
	primaryHref="#ui-buttons"
	primaryLabel="Azione primaria"
	secondaryHref="#ui-media-text"
	secondaryLabel="Azione secondaria"
/>

<ComponentLabel
	id="ui-ambiti-animated"
	name="AmbitiAnimatedGrid"
	group="Griglia animata"
	description="Quattro card che mostrano in sequenza tutti gli ambiti di intervento."
/>
<Section className="py-8 md:py-12">
	<Container>
		<div class="mx-auto max-w-2xl">
			<AmbitiAnimatedGrid />
		</div>
	</Container>
</Section>

<ComponentLabel id="ui-page-header" name="PageHeader" group="Sezione" />
<PageHeader
	eyebrow="SOPRATTITOLO"
	title="Titolo principale della pagina"
	intro="Testo introduttivo della pagina, pensato per chiarire subito il contenuto e accompagnare il titolo."
	panel
	panelBg="bg-white"
	image
	imageSrc="/img/photo/giulia-forcignano-psicologa-5.jpeg"
	imageAlt="Esempio di immagine nel Page Header"
/>

<ComponentLabel id="ui-section-header" name="SectionHeader" group="Sezione" />
<SectionHeader
	eyebrow="SOPRATTITOLO"
	title="Titolo della sezione"
	titleAccent="con accento"
	intro="Paragrafo introduttivo centrato che accompagna il titolo della sezione."
	iconSrc="/img/icon/hot-air-balloon.svg"
	iconAlt="Mongolfiera"
	iconFloat
/>

<ComponentLabel id="ui-media-text" name="MediaText" group="Sezione" />
<MediaText
	eyebrow="IMMAGINE E TESTO"
	title="Un contenuto editoriale affiancato a una fotografia"
	text="Il componente alterna immagine e contenuto testuale mantenendo spaziature e proporzioni coerenti."
	image="/img/photo/giulia-forcignano-psicologa-2.jpg"
	alt="Esempio del componente MediaText"
	primaryHref="#ui-page-header"
	primaryLabel="Scopri di più"
/>

<ComponentLabel
	id="ui-ambiti"
	name="AmbitiGrid"
	group="Griglia di card"
	description="Card cliccabili degli ambiti di intervento."
/>
<Section className="py-8 md:py-12"><Container><AmbitiGrid /></Container></Section>

<ComponentLabel
	id="ui-service-card"
	name="ServiceCard e ServiceModal"
	group="Card interattiva"
	description="La card apre il pannello di dettaglio dal fondo della pagina."
/>
<Section className="py-8 md:py-12">
	<Container>
		<div class="max-w-sm">
			<ServiceCard
				title="Sedute in studio"
				image="/img/icon/Therapy-Counseling.png"
				modalDescription="Esempio del contenuto mostrato nella finestra di dettaglio del servizio."
			/>
		</div>
	</Container>
</Section>

<ComponentLabel
	id="ui-orientamento"
	name="Orientamento"
	group="Card percorso"
	description="Le sei situazioni che aprono il percorso guidato in popup."
/>
<Orientamento standalone showIntro={false} showPageLink={false} />

<ComponentLabel id="ui-contact-banner" name="PathContactBanner" group="Banner" />
<PathContactBanner />

<ComponentLabel
	id="ui-sticky-aside"
	name="StickyAside"
	group="Layout editoriale"
	description="Colonna laterale fissa e contenuto principale."
/>
<StickyAside>
	<svelte:fragment slot="aside">
		<Card bg="white" padding="lg">
			<Heading level={4} className="mb-3">Contenuto laterale</Heading>
			<Paragraph>La card rimane visibile durante la lettura del contenuto principale.</Paragraph>
		</Card>
	</svelte:fragment>
	<article class="space-y-6">
		<Heading level={2}>Contenuto principale</Heading>
		<Paragraph variant="lead">Un’introduzione più evidente apre il testo editoriale.</Paragraph>
		<Paragraph
			>Questo spazio mostra il rapporto tra la colonna laterale e il corpo della pagina. La
			struttura viene usata nelle pagine dedicate alla professionista e al metodo.</Paragraph
		>
		<Paragraph
			>Un secondo paragrafo permette di valutare ritmo, larghezza della riga e distanza verticale
			tra i contenuti.</Paragraph
		>
	</article>
</StickyAside>

<ComponentLabel id="ui-final-cta" name="FinalCta" group="Call to action" />
<FinalCta
	title="Possiamo partire da una prima domanda."
	text="Blocco conclusivo con testo, azione primaria e azione secondaria."
	primaryHref="#ui-buttons"
	primaryLabel="Azione primaria"
	secondaryHref="#ui-typography"
	secondaryLabel="Azione secondaria"
/>

<ComponentLabel
	id="ui-footer"
	name="Footer"
	group="Layout globale"
	description="Il footer reale del sito è visualizzato subito sotto questa riga."
/>
