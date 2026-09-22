<script lang="ts">
	import { tick } from 'svelte';
	import { resolve } from '$app/paths';
	import percorsi from '$lib/content/orientamento.json';
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	let selected: (typeof percorsi)[number] | null = null;
	let phase = 0;
	let panel: HTMLDivElement;

	async function advance(next: number) {
		phase = next;
		await tick();
		panel?.focus();
	}

	function start(item: (typeof percorsi)[number]) {
		selected = item;
		void advance(1);
	}

	function reset() {
		selected = null;
		phase = 0;
	}
</script>

<Section className="py-12 md:py-20">
	<Container>
		<div class="mx-auto mb-10 max-w-3xl text-center">
			<p class="mb-3 text-sm font-medium uppercase tracking-wide text-accent1-800">
				COSA TI PORTA QUI?
			</p>
			<h2 class="font-heading mb-5 text-3xl text-ink md:text-4xl">
				A volte si può iniziare da ciò che stiamo vivendo.
			</h2>
			<p class="mb-3 text-lg text-ink/80">
				Non è sempre facile dare un nome a ciò che ci accade o sapere già quale percorso cercare.
			</p>
			<p class="text-lg text-ink/80">
				Puoi partire dalla situazione che senti più vicina alla tua esperienza. Non è un test e non
				restituisce diagnosi: è soltanto un modo per orientarti tra i contenuti del sito.
			</p>
		</div>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each percorsi as item (item.id)}
				<button
					type="button"
					class="flex min-h-48 flex-col rounded-3xl border border-black/10 bg-white p-6 text-left shadow-sm transition hover:border-accent1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 motion-reduce:transition-none"
					aria-expanded={selected?.id === item.id && phase > 0}
					aria-controls={phase > 0 ? 'percorso-orientamento' : undefined}
					on:click={() => start(item)}
				>
					<span class="mb-3 text-2xl text-ink">{item.title}</span>
					<span class="mb-5 flex-1 leading-relaxed text-ink/75">{item.description}</span>
					<span class="font-medium text-accent1-800"
						>Parti da qui <span aria-hidden="true">→</span></span
					>
				</button>
			{/each}
		</div>

		<p class="mt-5 text-center text-sm text-ink/65">
			Le risposte restano soltanto su questa pagina durante la navigazione e non vengono salvate.
		</p>

		{#if selected && phase > 0}
			<div
				id="percorso-orientamento"
				bind:this={panel}
				tabindex="-1"
				class="mt-10 rounded-3xl bg-accent2-50 p-6 outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 md:p-10"
			>
				<div class="mx-auto max-w-3xl">
					<div aria-live="polite" aria-atomic="true">
						<p class="mb-2 text-sm font-medium uppercase tracking-wide text-accent1-800">
							{phase === 3 ? 'Da qui puoi continuare' : `Passo ${phase} di 2`}
						</p>
						<h3 class="font-heading mb-7 text-2xl text-ink md:text-3xl">
							{phase === 1
								? selected.question
								: phase === 2
									? 'Che cosa vorresti trovare in uno spazio psicologico?'
									: selected.resultTitle}
						</h3>
					</div>

					{#if phase === 1}
						<div class="grid gap-3 sm:grid-cols-2">
							{#each selected.answers as answer (answer)}
								<button
									type="button"
									class="rounded-2xl border border-black/10 bg-white px-5 py-4 text-left transition hover:border-accent1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 motion-reduce:transition-none"
									on:click={() => void advance(2)}>{answer}</button
								>
							{/each}
						</div>
					{:else if phase === 2}
						<div class="grid gap-3 sm:grid-cols-2">
							{#each ['Uno spazio per comprendere ciò che accade', 'Un modo diverso di guardare la situazione', 'Maggiore consapevolezza nelle mie scelte', 'Non lo so ancora'] as answer (answer)}
								<button
									type="button"
									class="rounded-2xl border border-black/10 bg-white px-5 py-4 text-left transition hover:border-accent1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 motion-reduce:transition-none"
									on:click={() => void advance(3)}>{answer}</button
								>
							{/each}
						</div>
					{:else}
						<div class="space-y-4 text-lg leading-relaxed text-ink/85">
							{#each selected.resultParagraphs as paragraph (paragraph)}<p>{paragraph}</p>{/each}
						</div>
						<h4 class="font-heading mb-4 mt-9 text-xl text-ink">Potresti continuare da qui</h4>
						<ul class="grid gap-3 sm:grid-cols-3">
							{#each selected.links as link (link.href)}
								<li>
									<a
										href={resolve(
											link.href as
												| '/method'
												| '/about'
												| '/iniziare-un-percorso'
												| '/ambiti/ansia'
												| '/ambiti/stress'
										)}
										class="block h-full rounded-2xl bg-white p-5 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 motion-reduce:transition-none"
									>
										<span class="font-medium text-accent1-800"
											>{link.label} <span aria-hidden="true">→</span></span
										>
										{#if link.description}<span class="mt-2 block text-sm text-ink/75"
												>{link.description}</span
											>{/if}
									</a>
								</li>
							{/each}
						</ul>
					{/if}

					<div class="mt-8 flex flex-wrap gap-5 text-sm font-medium">
						{#if phase > 1}<button
								type="button"
								class="text-accent1-800 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800"
								on:click={() => void advance(phase - 1)}>← Cambia risposta</button
							>{/if}
						<button
							type="button"
							class="text-accent1-800 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800"
							on:click={reset}>Ricomincia</button
						>
					</div>
				</div>
			</div>
		{/if}
	</Container>
</Section>
