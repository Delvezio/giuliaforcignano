<script lang="ts">
	import MeetingPageHeader from '$lib/components/sections/MeetingPageHeader.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import FinalCta from '$lib/components/sections/FinalCta.svelte';

	const moments = [
		{
			number: '01',
			title: 'Prima di incontrarci',
			text: 'Puoi scrivere o chiamare anche soltanto per chiedere informazioni. Non è necessario spiegare tutto nel primo messaggio.'
		},
		{
			number: '02',
			title: 'Durante il colloquio',
			text: 'Racconti ciò che senti importante con i tuoi tempi e puoi fare tutte le domande che desideri sul mio modo di lavorare.'
		},
		{
			number: '03',
			title: 'Dopo il primo incontro',
			text: 'Valutiamo insieme se possiamo costruire un percorso adatto alle tue esigenze e definiamo con chiarezza come procedere.'
		}
	];

	const reassurances = [
		'Non serve avere una diagnosi',
		'Non devi preparare un discorso',
		'Puoi fare tutte le domande che desideri',
		'Puoi scegliere tra studio e colloqui online'
	];

	const questions = [
		{
			question: 'Devo avere una diagnosi?',
			answer:
				'No. Puoi rivolgerti a una psicologa anche senza avere una diagnosi o sapere già come definire ciò che stai vivendo.'
		},
		{
			question: 'Devo raccontare tutto durante il primo incontro?',
			answer: 'No. Sei tu a decidere cosa raccontare e con quali tempi.'
		},
		{
			question: 'Posso fare soltanto un primo colloquio?',
			answer:
				'Il primo incontro serve anche a valutare insieme come procedere. Non è necessario decidere in anticipo la durata di un eventuale percorso.'
		},
		{
			question: 'Posso svolgere gli incontri online?',
			answer: 'Sì. È possibile valutare incontri in presenza oppure online.'
		},
		{
			question: 'Posso scrivere prima di fissare un appuntamento?',
			answer: 'Sì. Puoi contattarmi anche soltanto per chiedere una prima informazione.'
		}
	];
</script>

<MeetingPageHeader />

<Section className="py-12 md:py-20">
	<Container>
		<div class="grid gap-5 lg:grid-cols-3">
			{#each moments as moment, index (moment.number)}
				<section
					class="relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-7 md:p-9"
					data-reveal="up"
					style={`--reveal-delay: ${index * 80}ms;`}
				>
					<p class="font-heading mb-8 text-5xl text-accent1-200" aria-hidden="true">
						{moment.number}
					</p>
					<h2 class="font-heading mb-4 text-2xl text-ink">{moment.title}</h2>
					<p class="leading-relaxed text-ink/80">{moment.text}</p>
				</section>
			{/each}
		</div>
	</Container>
</Section>

<Section className="pb-12 md:pb-20">
	<Container>
		<section
			class="grid overflow-hidden rounded-[36px] bg-accent2-50 lg:grid-cols-[1.15fr_0.85fr]"
			data-reveal="scale"
			style="--reveal-duration: 900ms;"
		>
			<div
				class="px-6 py-12 sm:px-10 md:px-14 md:py-16"
				data-reveal="up"
				style="--reveal-delay: 55ms;"
			>
				<p class="mb-3 text-sm font-medium uppercase tracking-wide text-accent1-800">
					UNO SPAZIO SENZA PREPARAZIONE
				</p>
				<h2 class="font-heading mb-6 max-w-3xl text-4xl leading-tight text-ink md:text-5xl">
					Non devi arrivare con le parole giuste.
				</h2>
				<div class="max-w-3xl space-y-4 text-lg leading-relaxed text-ink/80">
					<p>Puoi raccontare ciò che senti importante nel modo che ti viene più naturale.</p>
					<p>
						Potresti avere le idee molto chiare oppure sapere soltanto che qualcosa non sta andando
						come vorresti. Entrambe le situazioni sono un possibile punto di partenza.
					</p>
				</div>
			</div>
			<div
				class="flex items-center bg-accent1-100 px-6 py-10 sm:px-10 md:px-12"
				data-reveal="up"
				style="--reveal-delay: 110ms;"
			>
				<ul class="w-full space-y-5">
					{#each reassurances as reassurance, index (reassurance)}
						<li
							class="flex items-start gap-4 border-b border-accent1-300 pb-5 last:border-0 last:pb-0"
							data-reveal="up"
							style={`--reveal-delay: ${165 + index * 45}ms;`}
						>
							<span
								class="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent1-500 text-sm text-white"
								aria-hidden="true">✓</span
							>
							<span class="text-lg text-ink/85">{reassurance}</span>
						</li>
					{/each}
				</ul>
			</div>
		</section>
	</Container>
</Section>

<Section className="pb-12 md:pb-20">
	<Container>
		<section
			class="w-full rounded-[36px] bg-white px-6 py-10 sm:px-10 md:px-14 md:py-16"
			data-reveal="scale"
			style="--reveal-duration: 900ms;"
		>
			<div class="mb-9 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
				<div>
					<p class="mb-3 text-sm font-medium uppercase tracking-wide text-accent1-800">
						DOMANDE FREQUENTI
					</p>
					<h2 class="font-heading text-4xl text-ink md:text-5xl">Prima di iniziare</h2>
				</div>
				<p class="max-w-2xl text-lg leading-relaxed text-ink/75 md:justify-self-end">
					Non è necessario decidere tutto prima di contattarmi. Qui trovi alcune risposte alle
					domande più comuni.
				</p>
			</div>

			<div class="divide-y divide-black/10 border-y border-black/10">
				{#each questions as item, index (item.question)}
					<details
						class="group py-2"
						data-reveal="up"
						style={`--reveal-delay: ${100 + index * 45}ms;`}
					>
						<summary
							class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-heading text-xl text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 md:text-2xl"
						>
							{item.question}
							<span
								class="text-3xl font-normal text-accent1-800 transition group-open:rotate-45 motion-reduce:transition-none"
								aria-hidden="true">+</span
							>
						</summary>
						<p class="max-w-4xl pb-6 pr-10 text-lg leading-relaxed text-ink/80">{item.answer}</p>
					</details>
				{/each}
			</div>
		</section>
	</Container>
</Section>

<FinalCta
	title="Possiamo partire da una prima domanda."
	text="Non devi essere già sicuro di voler iniziare un percorso per contattarmi."
	primaryHref="https://wa.me/393403783231?text=Ciao%20Giulia%2C%20ho%20visitato%20il%20tuo%20sito%20e%20vorrei%20chiederti%20alcune%20informazioni%20sul%20primo%20incontro."
	primaryLabel="Scrivimi su WhatsApp"
	secondaryHref="tel:+393403783231"
	secondaryLabel="Chiamami"
/>
