<script lang="ts">
	import { onDestroy, tick } from 'svelte';
	import { resolve } from '$app/paths';
	import percorsi from '$lib/content/orientamento.json';
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	export let standalone = false;
	export let showIntro = true;
	export let showPageLink = true;
	export let title: string | undefined = undefined;

	const cardSurfaces = [
		'bg-accent2-100',
		'bg-accent4-100',
		'bg-accent5-100',
		'bg-accent3-100',
		'bg-accent1-100',
		'bg-accent2-100'
	];

	let selected: (typeof percorsi)[number] | null = null;
	let phase = 0;
	let panel: HTMLDivElement;
	let trigger: HTMLButtonElement | null = null;
	let previousBodyOverflow = '';
	const whatsappHref =
		'https://wa.me/393403783231?text=Ciao%20Giulia%2C%20ho%20completato%20il%20percorso%20di%20orientamento%20sul%20tuo%20sito%20e%20vorrei%20chiederti%20alcune%20informazioni%20sul%20primo%20incontro.';

	async function advance(next: number) {
		phase = next;
		await tick();
		panel?.focus();
	}

	function lockScroll() {
		if (typeof document === 'undefined') return;
		previousBodyOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
	}

	function unlockScroll() {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = previousBodyOverflow;
	}

	function start(item: (typeof percorsi)[number], event: MouseEvent) {
		trigger = event.currentTarget as HTMLButtonElement;
		selected = item;
		lockScroll();
		void advance(1);
	}

	async function reset() {
		const returnTarget = trigger;
		selected = null;
		phase = 0;
		unlockScroll();
		await tick();
		returnTarget?.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!selected) return;

		if (event.key === 'Escape') {
			event.preventDefault();
			void reset();
			return;
		}

		if (event.key !== 'Tab' || !panel) return;

		const focusable = Array.from(
			panel.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
			)
		).filter((element) => element.offsetParent !== null);

		if (focusable.length === 0) {
			event.preventDefault();
			panel.focus();
			return;
		}

		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		const active = document.activeElement;

		if (event.shiftKey && (active === first || !panel.contains(active))) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && active === last) {
			event.preventDefault();
			first.focus();
		}
	}

	onDestroy(unlockScroll);
</script>

<svelte:window on:keydown={handleKeydown} />

<Section className="section-rhythm">
	<Container>
		{#if showIntro}<div
				class="mx-auto mb-[var(--space-block)] flex max-w-4xl flex-col items-center gap-[var(--space-content)] text-center"
				data-reveal="up"
				style="--reveal-duration: 850ms;"
			>
				<p class="text-sm font-medium uppercase tracking-wide text-accent1-800">
					COSA TI PORTA QUI?
				</p>
				<h2 class="font-heading text-3xl text-ink md:text-5xl">
					{title ??
						(standalone
							? 'Puoi partire dalla situazione che senti più vicina.'
							: 'A volte si può iniziare da ciò che stiamo vivendo.')}
				</h2>
				<div class="space-y-3">
					<p class="text-lg text-ink/80">
						Non è sempre facile dare un nome a ciò che ci accade o sapere già quale percorso
						cercare.
					</p>
					<p class="text-lg text-ink/80">
						Puoi partire dalla situazione che senti più vicina alla tua esperienza. È soltanto un
						modo per orientarti tra i contenuti del sito.
					</p>
				</div>
				{#if showPageLink && !standalone}
					<a
						href={resolve('/da-dove-iniziare')}
						class="inline-flex font-medium text-accent1-800 underline decoration-1 underline-offset-4 transition hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 motion-reduce:transition-none"
					>
						Preferisci prenderti qualche minuto? Apri il percorso in una pagina dedicata →
					</a>
				{/if}
			</div>{/if}

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each percorsi as item, index (item.id)}
				<div class="h-full" data-reveal="up" style={`--reveal-delay: ${index * 65}ms;`}>
					<button
						type="button"
						class={`flex h-full min-h-48 w-full flex-col items-center rounded-3xl ${cardSurfaces[index % cardSurfaces.length]} p-6 text-center transition-colors duration-300 hover:bg-white focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 motion-reduce:transition-none`}
						aria-expanded={selected?.id === item.id && phase > 0}
						aria-controls={phase > 0 ? 'percorso-orientamento' : undefined}
						on:click={(event) => start(item, event)}
					>
						<span class="font-heading mb-3 text-2xl italic tracking-tight text-ink"
							>“{item.title}”</span
						>
						<span class="mb-5 flex-1 leading-relaxed text-ink/75">{item.description}</span>
						<span class="font-medium text-accent1-800"
							>Parti da qui <span aria-hidden="true">→</span></span
						>
					</button>
				</div>
			{/each}
		</div>
	</Container>
</Section>

{#if selected && phase > 0}
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/35 p-4 backdrop-blur-md md:p-8"
	>
		<div
			id="percorso-orientamento"
			bind:this={panel}
			tabindex="-1"
			role="dialog"
			aria-modal="true"
			aria-labelledby="percorso-orientamento-title"
			class="relative max-h-[calc(100dvh-2rem)] w-full max-w-4xl overflow-y-auto rounded-3xl bg-accent2-50 p-6 shadow-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 md:max-h-[calc(100dvh-4rem)] md:p-10"
			data-reveal="scale"
			style="--reveal-duration: 500ms; --reveal-distance: 0.75rem; --reveal-blur: 2px;"
		>
			<button
				type="button"
				class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl leading-none text-ink shadow-sm transition hover:bg-accent1-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 motion-reduce:transition-none md:right-6 md:top-6"
				aria-label="Chiudi il percorso"
				on:click={() => void reset()}>×</button
			>
			<div class="mx-auto max-w-3xl">
				<div aria-live="polite" aria-atomic="true">
					<p class="mb-2 text-sm font-medium uppercase tracking-wide text-accent1-800">
						{phase === 3 ? 'Da qui puoi continuare' : `Passo ${phase} di 2`}
					</p>
					<h3
						id="percorso-orientamento-title"
						class="font-heading mb-7 pr-12 text-2xl text-ink md:text-3xl"
					>
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
					<div class="mt-8 rounded-3xl border border-accent1-200 bg-white p-6 text-center md:p-8">
						<h4 class="font-heading mb-2 text-2xl text-ink">Vuoi fare una prima domanda?</h4>
						<p class="mx-auto mb-5 max-w-2xl text-base leading-relaxed text-ink/75">
							Il messaggio non include le risposte che hai dato. Potrai scegliere liberamente cosa
							raccontare e con quali parole.
						</p>
						<Button href={whatsappHref}>Scrivimi su WhatsApp</Button>
					</div>
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
	</div>
{/if}
