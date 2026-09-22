<script lang="ts">
	import { resolve } from '$app/paths';
	import ambiti from '$lib/content/ambiti.json';
</script>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each ambiti as ambito (ambito.slug)}
		<a
			href={resolve('/ambiti/[slug]', { slug: ambito.slug })}
			aria-label={`Approfondisci: ${ambito.cardTitle}`}
			class="group flex min-h-80 min-w-0 cursor-pointer flex-col items-center overflow-hidden rounded-3xl border border-black/5 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 md:min-h-88 md:p-8 motion-reduce:transform-none motion-reduce:transition-none"
		>
			<h3 class="font-heading mb-4 text-2xl text-ink">{ambito.cardTitle}</h3>
			<div class="flex h-56 w-full flex-1 items-center justify-center md:h-64">
				<img
					src={ambito.image}
					alt=""
					loading="lazy"
					class="block h-full w-full object-contain transition duration-300 group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
				/>
			</div>
		</a>
	{/each}
</div>
