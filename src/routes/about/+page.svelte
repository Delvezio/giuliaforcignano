<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import StickyAside from '$lib/components/sections/StickyAside.svelte';
	import Heading from '$lib/components/ui/Heading.svelte';
	import Paragraph from '$lib/components/ui/Paragraph.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import educationContent from '$lib/content/education.json';

	import SectionHeader from '$lib/components/sections/SectionHeader.svelte';

	type EducationCard = {
		overtitle: string;
		title: string;
		footerLabel: string;
		footerText: string;
		date: string | null;
	};

	const educationCards = [...(educationContent as EducationCard[])].sort((a, b) => {
		if (a.date === null && b.date === null) return 0;
		if (a.date === null) return -1;
		if (b.date === null) return 1;
		return b.date.localeCompare(a.date);
	});

	const educationSurfaces = [
		{ bg: 'accent2' as const, className: '!bg-accent2-100' },
		{ bg: 'accent4' as const, className: '!bg-accent4-100' },
		{ bg: 'accent5' as const, className: '!bg-accent5-100' },
		{ bg: 'accent3' as const, className: '!bg-accent3-100' }
	];
</script>

<PageHeader
	panel
	panelBg="bg-accent2-50"
	image
	imageSide="right"
	imageSrc="/img/photo/giulia-forcignano-psicologa-6.jpg"
	imageAlt="Giulia Forcignanò, psicologa a Torino"
	eyebrow="Chi sono"
	title="Psicologa laureata all'Università di Torino"
	intro="Sono una psicologa laureata in Psicologia del lavoro e del benessere presso l'Università di Torino, con orientamento all'Analisi Transazionale."
/>

<SectionHeader
	title="Nel momento in cui scegli di ascoltarti, io sono qui per accoglierti."
	intro="Conoscersi davvero è un gesto di coraggio. Non è necessario farlo da soli."
	max="max-w-screen-lg"
	introWidth="max-w-xl"
/>

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

			<Heading level={4}>Stai pensando di iniziare un percorso?</Heading>
			<Paragraph className="text-ink/80 my-5">
				Se vuoi capire come si svolge un primo incontro o chiedermi una prima informazione, trovi
				qui tutto ciò che può esserti utile.
			</Paragraph>
			<Button variant="solid" color="accent1" href="/iniziare-un-percorso"
				>Scopri come iniziare</Button
			>
		</Card>
	</svelte:fragment>

	<!-- CONTENT (2/3) -->
	<article class="prose prose-neutral max-w-none">
		<section class="border-b border-black/10 pb-[var(--space-block)]">
			<Heading level={2} className="mb-10">Sono Giulia Forcignanò, psicologa.</Heading>

			<Paragraph>
				Il mio approccio si fonda sull’<strong>Analisi Transazionale</strong>. Un orientamento che
				aiuta a migliorare la qualità della vita attraverso una maggiore consapevolezza del proprio
				modo di pensare, sentire e agire, sia nel rapporto con sé stessi che nelle relazioni
				interpersonali.
			</Paragraph>

			<Paragraph variant="lead">
				Accompagno adulti e adolescenti in percorsi di conoscenza di sé, per affrontare con maggiore
				consapevolezza le difficoltà personali legate al proprio io e alle relazioni con gli altri.
			</Paragraph>

			<Paragraph>
				Credo nel potere della relazione terapeutica come spazio sicuro in cui osservare insieme,
				con delicatezza e rispetto, ciò che accade dentro di noi.
			</Paragraph>

			<Paragraph variant="lead">
				Ho aiutato persone con disturbi di personalità, attacchi di panico, disabilità cognitive e
				difficoltà relazionali, così come chi sta vivendo periodi di ansia, stress o depressione,
				affronta sfide legate al lavoro o alla genitorialità.
			</Paragraph>

			<Paragraph>
				Il mio percorso professionale mi ha insegnato che non esiste un solo modo per stare meglio,
				ma che ogni persona ha bisogno del proprio tempo, delle proprie parole, della propria
				storia, e che tutti ci portiamo dentro dinamiche profonde che ci condizionano: talvolta
				senza accorgercene o senza gli strumenti per affrontarle. Il mio ruolo è aiutarti a
				riconoscerle, accoglierle e, quando è necessario, superarle.
			</Paragraph>
		</section>

		<section class="not-prose border-b border-black/10 py-[var(--space-block)]">
			<Heading level={3}>Istruzione & Formazione</Heading>
			<div class="not-prose mt-7 grid items-stretch gap-4 sm:grid-cols-2">
				{#each educationCards as education, index}
					<Card
						as="article"
						bg={educationSurfaces[index % educationSurfaces.length].bg}
						tone="100"
						padding="md"
						className={`h-full ${educationSurfaces[index % educationSurfaces.length].className}`}
					>
						<p class="text-xs font-semibold uppercase tracking-[0.12em] text-accent1-800">
							{education.overtitle}
						</p>
						<Heading level={5} className="mt-4">{education.title}</Heading>

						<div class="mt-6 border-t border-black/10 pt-4">
							<p class="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/55">
								{education.footerLabel}
							</p>
							{#if education.date}
								<time
									datetime={education.date}
									class="mt-1 block font-heading text-xl leading-tight text-ink"
								>
									{education.footerText}
								</time>
							{:else}
								<p class="mt-1 text-sm leading-snug text-ink/75">{education.footerText}</p>
							{/if}
						</div>
					</Card>
				{/each}
			</div>
		</section>

		<section class="not-prose pt-[var(--space-block)]">
			<Card as="div" bg="accent1" tone="50" padding="lg" className="!bg-accent1-50">
				<div class="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
					<div>
						<p class="text-xs font-semibold uppercase tracking-[0.12em] text-accent1-800">
							Il mio approccio
						</p>
						<Heading level={3} className="mt-3">Il metodo</Heading>
						<Paragraph className="mt-5 max-w-2xl text-ink/75">
							Il mio approccio si fonda sull’Analisi Transazionale, un approccio che dà grande
							importanza al dialogo interno e alle modalità relazionali che ognuno di noi mette in
							atto.
						</Paragraph>
					</div>
					<Button variant="outline" color="accent1" href="/method">Scopri di più sul metodo</Button>
				</div>
			</Card>
		</section>
	</article>
</StickyAside>

<!-- CTA finale 
<Section>
  <Container>
    <Card bg="glass" padding="lg" className="max-w-3xl mx-auto ">
      <Heading level={2} align="center" className="mb-8">Se sei qui, stai già compiendo un primo passo importante</Heading>
      <Paragraph variant="lead" align="center" className="mb-10">
        <span class="block">Quello di cercare uno spazio per te,</span> 
        <span class="block">dove conoscerti e capire chi sei.</span>
      </Paragraph>
      <div class="flex flex-wrap justify-center gap-3">
        <Button variant="solid" color="accent1" href="/contact">Chiama ora</Button>
        <Button variant={secondaryVariant} color="accent1" href="/contact">Scrivimi</Button>
      </div>
    </Card>
  </Container>
</Section> -->

<SectionHeader
	title="Se sei qui, stai già compiendo "
	titleAccent="un primo passo importante"
	intro="Quello di cercare uno spazio per te, dove conoscerti e capire chi sei."
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
