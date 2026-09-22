<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import FinalCta from '$lib/components/sections/FinalCta.svelte';

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

<PageHeader
	eyebrow="INIZIARE UN PERCORSO"
	title="Il primo incontro: uno spazio per capire da dove partire"
/>

<Section className="pb-12 md:pb-16">
	<Container>
		<article class="mx-auto max-w-3xl space-y-10 text-lg leading-relaxed text-ink/85">
			<div class="space-y-4">
				<p>Decidere di contattare una psicologa può far nascere molte domande.</p>
				<p>Cosa devo raccontare? Da dove comincio? Devo sapere già qual è il mio problema?</p>
				<p>La risposta è no.</p>
				<p>
					Il primo incontro serve proprio a conoscerci e iniziare a comprendere insieme ciò che ti
					ha portato qui.
				</p>
			</div>

			<section class="space-y-4">
				<h2 class="font-heading text-3xl text-ink">Non devi arrivare con le parole giuste</h2>
				<p>Puoi raccontare ciò che senti importante nel modo che ti viene più naturale.</p>
				<p>
					Potresti avere le idee molto chiare oppure sapere soltanto che qualcosa non sta andando
					come vorresti.
				</p>
				<p>Entrambe le situazioni sono un possibile punto di partenza.</p>
			</section>

			<section class="space-y-4">
				<h2 class="font-heading text-3xl text-ink">Cosa succede durante il primo incontro?</h2>
				<p>
					Ti chiederò cosa ti ha portato a contattarmi e avremo modo di esplorare la situazione che
					stai vivendo.
				</p>
				<p>
					Potrai raccontarmi ciò che ritieni importante e farmi tutte le domande che desideri sul
					mio modo di lavorare.
				</p>
				<p>
					Il primo colloquio permette anche di capire se possiamo costruire insieme un percorso
					adatto alle tue esigenze.
				</p>
			</section>

			<section class="space-y-4">
				<h2 class="font-heading text-3xl text-ink">E dopo?</h2>
				<p>
					Se decideremo di proseguire, inizieremo a definire gli obiettivi del lavoro e le modalità
					del percorso.
				</p>
				<p>
					Frequenza degli incontri, durata, compenso e aspetti organizzativi vengono chiariti prima
					dell’avvio del percorso.
				</p>
				<p>Non è necessario decidere tutto prima di contattarmi.</p>
			</section>

			<section class="space-y-4">
				<h2 class="font-heading text-3xl text-ink">In studio oppure online</h2>
				<p>Ricevo in studio in:</p>
				<address class="not-italic font-semibold">Corso Moncalieri 266<br />10133 Torino</address>
				<p>È possibile svolgere i colloqui anche online.</p>
				<p>
					La modalità può essere valutata in base alle tue esigenze e alle caratteristiche del
					percorso.
				</p>
			</section>

			<section>
				<h2 class="font-heading mb-6 text-3xl text-ink">Domande frequenti</h2>
				<div class="space-y-4">
					{#each questions as item (item.question)}
						<div class="rounded-2xl bg-accent2-50 p-6">
							<h3 class="font-heading mb-2 text-xl text-ink">{item.question}</h3>
							<p>{item.answer}</p>
						</div>
					{/each}
				</div>
			</section>
		</article>
	</Container>
</Section>

<FinalCta
	title="Possiamo partire da una prima domanda."
	text="Non devi essere già sicuro di voler iniziare un percorso per contattarmi."
	primaryHref="mailto:info@giuliaforcignano.it"
	primaryLabel="Scrivimi"
	secondaryHref="tel:+393403783231"
	secondaryLabel="Chiamami"
/>
