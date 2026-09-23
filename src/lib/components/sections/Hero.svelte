<!-- src/lib/components/sections/Hero.svelte -->
<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Heading from '$lib/components/ui/Heading.svelte';
	import Paragraph from '$lib/components/ui/Paragraph.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import AmbitiAnimatedGrid from '$lib/components/sections/AmbitiAnimatedGrid.svelte';

	export let eyebrow: string | undefined = '';
	export let subtitle: string | undefined =
		'Ti posso aiutare a riconoscere dinamiche relazionali, ruoli e blocchi che influenzano la tua vita.';

	// Highlights (icone + testo). `icon` può essere emoji/testo oppure un path/URL immagine.
	export let highlights: { icon?: string; text: string }[] = [];

	// CTA
	export let primaryHref: string = '';
	export let primaryLabel: string = 'Chiama ora';
	export let secondaryHref: string = '/about';
	export let secondaryLabel: string = 'Scopri di più';
	export let secondaryVariant: 'outline' | 'soft' = 'outline';

	// Helper: considera 'icon' come immagine se è un path/URL a file grafico
	const isImageIcon = (val?: string) =>
		!!val &&
		(/(\.png|\.jpe?g|\.svg|\.gif|\.webp)(\?.*)?$/i.test(val) ||
			val.startsWith('/') ||
			val.startsWith('http'));
</script>

<Section className="py-0">
	<Container>
		<div class="grid gap-4 py-4 sm:gap-5 sm:py-6 lg:grid-cols-2 lg:items-stretch lg:py-8">
			<!-- Colonna testo -->
			<div
				class="flex min-h-[32rem] w-full flex-col justify-center gap-5 rounded-[36px] bg-white px-7 py-12 sm:min-h-[34rem] sm:px-10 lg:min-h-[36rem] lg:gap-[26px] lg:px-12 lg:py-14 xl:px-14"
			>
				{#if eyebrow}
					<p
						class="text-sm font-medium tracking-wide uppercase text-accent1-800"
						data-reveal="up"
						data-reveal-text
						style="--reveal-delay: 20ms;"
					>
						{eyebrow}
					</p>
				{/if}

				<div class="hero-heading">
					<Heading level={1} className="break-words">
						<span class="block" data-reveal="up" data-reveal-text style="--reveal-delay: 55ms;"
							>Psicoterapeuta in</span
						>
						<span class="block" data-reveal="up" data-reveal-text style="--reveal-delay: 95ms;"
							>formazione analitico</span
						>
						<em
							class="block italic"
							data-reveal="up"
							data-reveal-text
							style="--reveal-delay: 135ms;">transazionale</em
						>
					</Heading>
				</div>

				<div class="max-w-prose" data-reveal="up" data-reveal-text style="--reveal-delay: 180ms;">
					{#if subtitle}
						<Paragraph variant="lead">{subtitle}</Paragraph>
					{/if}
				</div>

				<div class="flex flex-wrap gap-3" data-reveal="up" style="--reveal-delay: 235ms;">
					<Button variant="solid" color="accent1" href={primaryHref}>{primaryLabel}</Button>
					<Button variant={secondaryVariant} color="accent1" href={secondaryHref}
						>{secondaryLabel}</Button
					>
				</div>

				{#if highlights && highlights.length}
					<ul
						class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3"
						data-reveal="up"
						style="--reveal-delay: 290ms;"
					>
						{#each highlights as h, i (`${h.text}-${i}`)}
							<li class="inline-flex items-center gap-2 w-auto flex-none">
								{#if h.icon}
									{#if isImageIcon(h.icon)}
										<!-- icona come immagine -->
										<img
											src={h.icon}
											alt=""
											class="h-12 w-12 md:h-16 md:w-16 object-contain"
											loading="lazy"
											decoding="async"
										/>
									{:else}
										<!-- icona come emoji/testo -->
										<span class="text-xl leading-none" aria-hidden="true">{h.icon}</span>
									{/if}
								{:else}
									<!-- fallback puntino -->
									<span
										class="inline-block w-2.5 h-2.5 rounded-full bg-accent1-500"
										aria-hidden="true"
									></span>
								{/if}
								<span class="text-ink/80 whitespace-nowrap">{h.text}</span>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<!-- Le quattro posizioni rimangono fisse; gli ambiti cambiano con una rotazione verticale. -->
			<div
				class="min-h-[27rem] w-full sm:min-h-[34rem] lg:min-h-[36rem]"
				data-reveal="right"
				style="--reveal-delay: 150ms; --reveal-duration: 950ms; --reveal-distance: 2.5rem;"
			>
				<AmbitiAnimatedGrid />
			</div>
		</div>
	</Container>
</Section>

<style>
	.hero-heading :global(h1) {
		font-size: clamp(2.2rem, 11vw, var(--step-5)) !important;
	}
</style>
