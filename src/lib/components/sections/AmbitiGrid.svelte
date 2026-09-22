<script lang="ts">
	import { resolve } from '$app/paths';
	import ambiti from '$lib/content/ambiti.json';
</script>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each ambiti as ambito (ambito.slug)}
		<a
			href={resolve('/ambiti/[slug]', { slug: ambito.slug })}
			class="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 motion-reduce:transform-none motion-reduce:transition-none"
		>
			<div class="flex h-48 items-center justify-center bg-accent2-50 p-6">
				<img src={ambito.image} alt="" loading="lazy" class="h-full w-full object-contain" />
			</div>
			<div class="flex flex-1 flex-col justify-between gap-5 p-6">
				<h3 class="font-heading text-2xl text-ink">{ambito.cardTitle}</h3>
				<span class="font-medium text-accent1-800 group-hover:underline"
					>Approfondisci <span aria-hidden="true">→</span></span
				>
			</div>
		</a>
	{/each}
</div>
