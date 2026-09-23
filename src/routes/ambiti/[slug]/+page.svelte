<script lang="ts">
	import type { PageData } from './$types';
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';

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

<PageHeader eyebrow="AMBITI DI INTERVENTO" title={data.ambito.title} />

<Section className="pb-12 md:pb-16">
	<Container>
		<article class="mx-auto max-w-3xl space-y-10 leading-relaxed text-ink/85">
			<div class="space-y-5 text-lg" data-reveal="up">
				{#each data.ambito.intro as paragraph (paragraph)}<p>{paragraph}</p>{/each}
			</div>
			{#each data.ambito.sections as section, index (section.heading)}
				<section class="space-y-4" data-reveal="up" style={`--reveal-delay: ${index * 55}ms;`}>
					<h2 class="font-heading text-3xl text-ink">{section.heading}</h2>
					{#each section.paragraphs as paragraph (paragraph)}<p class="text-lg">
							{paragraph}
						</p>{/each}
				</section>
			{/each}
			<div
				class="rounded-3xl bg-accent2-50 p-7 md:p-9"
				data-reveal="scale"
				style="--reveal-duration: 850ms;"
			>
				<Button
					href={data.ambito.slug === 'disabilita-cognitive' ? '/contatti' : '/iniziare-un-percorso'}
					>{data.ambito.cta}</Button
				>
			</div>
			{#if data.ambito.emergency}
				<aside
					class="border-l-2 border-accent1 pl-5 text-sm text-ink/75"
					aria-label="Nota di emergenza"
					data-reveal="fade"
				>
					I contatti dello studio non costituiscono un servizio di emergenza. In caso di pericolo
					immediato per te o per un’altra persona, contatta il 112 o rivolgiti al servizio di
					emergenza più vicino.
				</aside>
			{/if}
		</article>
	</Container>
</Section>
