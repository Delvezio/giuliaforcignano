<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Heading from '$lib/components/ui/Heading.svelte';

	export let title: string = '';

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
</script>

<Section className="section-rhythm">
	<Container>
		{#if title}
			<div class="mx-auto mb-[var(--space-block)] max-w-4xl" data-reveal="up" data-reveal-text>
				<Heading level={2} align="center">{title}</Heading>
			</div>
		{/if}

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
					{#if title}
						<h3 class="font-heading mb-4 text-2xl text-ink">{moment.title}</h3>
					{:else}
						<h2 class="font-heading mb-4 text-2xl text-ink">{moment.title}</h2>
					{/if}
					<p class="leading-relaxed text-ink/80">{moment.text}</p>
				</section>
			{/each}
		</div>
	</Container>
</Section>
