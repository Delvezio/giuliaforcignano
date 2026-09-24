<script lang="ts">
	import type { PageData } from './$types';
	import { resolve } from '$app/paths';
	import ambiti from '$lib/content/ambiti.json';
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import PathContactBanner from '$lib/components/sections/PathContactBanner.svelte';

	export let data: PageData;
</script>

<Section className="pt-8">
	<Container>
		<nav aria-label="Percorso di navigazione" class="text-sm text-ink/70" data-reveal="fade">
			<a href={resolve('/ambiti')} class="underline hover:text-accent1-800">Ambiti</a>
			<span aria-hidden="true"> / </span><span aria-current="page">{data.ambito.cardTitle}</span>
		</nav>
	</Container>
</Section>

<Section className="pb-12 pt-8 md:pb-16 md:pt-12">
	<Container>
		<div
			class="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-12 xl:gap-16"
		>
			<aside data-reveal="up" style="--reveal-duration: 850ms;">
				<nav
					aria-label="Ambiti di intervento"
					class="lg:sticky lg:top-28"
				>
					<a
						href={resolve('/ambiti')}
						class="font-heading text-2xl text-ink underline decoration-1 underline-offset-4 transition hover:text-accent1-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800"
					>
						Tutti gli ambiti
					</a>

					<ul
						class="mt-5 flex snap-x gap-2 overflow-x-auto pb-3 lg:block lg:overflow-visible lg:border-t lg:border-black/10 lg:pb-0"
					>
						{#each ambiti as ambito (ambito.slug)}
							<li class="shrink-0 snap-start lg:shrink">
								<a
									href={resolve('/ambiti/[slug]', { slug: ambito.slug })}
									aria-current={ambito.slug === data.ambito.slug ? 'page' : undefined}
									class={`group flex min-h-11 items-center gap-3 rounded-full border px-4 py-2 text-sm leading-snug transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 lg:min-h-0 lg:justify-between lg:rounded-none lg:border-x-0 lg:border-t-0 lg:px-2 lg:py-4 lg:text-base ${
										ambito.slug === data.ambito.slug
											? 'border-black/5 bg-accent2-100 text-ink lg:bg-accent2-100'
											: 'border-black/10 bg-white/60 text-ink hover:border-accent1-800 hover:text-accent1-800 lg:bg-transparent'
									}`}
								>
									<span>{ambito.cardTitle}</span>
									<span
										aria-hidden="true"
										class={`hidden transition-transform group-hover:translate-x-1 lg:block ${ambito.slug === data.ambito.slug ? 'opacity-100' : 'opacity-45'}`}
										>→</span
									>
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</aside>

			<main
				class="min-w-0"
				data-reveal="up"
				style="--reveal-delay: 70ms; --reveal-duration: 850ms;"
			>
				<header class="max-w-4xl">
					<p class="mb-4 text-sm font-medium uppercase tracking-wide text-accent1-800">
						Ambiti di intervento
					</p>
					<h1
						class="font-heading text-[2.65rem] leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
					>
						{data.ambito.title}
					</h1>
				</header>

				<article class="mt-10 max-w-4xl space-y-10 leading-relaxed text-ink/85 md:mt-12">
					<div class="space-y-5 text-lg" data-reveal="up">
						{#each data.ambito.intro as paragraph (paragraph)}<p>{paragraph}</p>{/each}
					</div>
					{#each data.ambito.sections as section, index (section.heading)}
						<section
							class="space-y-4"
							data-reveal="up"
							style={`--reveal-delay: ${index * 55}ms;`}
						>
							<h2 class="font-heading text-3xl text-ink">{section.heading}</h2>
							{#each section.paragraphs as paragraph (paragraph)}<p class="text-lg">
									{paragraph}
								</p>{/each}
						</section>
					{/each}
					{#if data.ambito.emergency}
						<aside
							class="border-l-2 border-accent1 pl-5 text-sm text-ink/75"
							aria-label="Nota di emergenza"
							data-reveal="fade"
						>
							I contatti dello studio non costituiscono un servizio di emergenza. In caso di
							pericolo immediato per te o per un’altra persona, contatta il 112 o rivolgiti al
							servizio di emergenza più vicino.
						</aside>
					{/if}
				</article>
			</main>
		</div>
	</Container>
</Section>

<PathContactBanner />
