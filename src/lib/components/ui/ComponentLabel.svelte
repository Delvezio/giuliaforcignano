<script lang="ts">
	export let id: string | undefined = undefined;
	export let name: string;
	export let group = 'Componente';
	export let description: string | undefined = undefined;
</script>

<div {id} class="mx-auto w-full max-w-[82rem] scroll-mt-24 px-4 pt-14 sm:px-8 md:px-16 md:pt-20">
	<div
		class="flex flex-col gap-2 border-b border-black/10 pb-4 sm:flex-row sm:items-end sm:justify-between"
		data-reveal="up"
	>
		<div class="flex min-w-0 items-baseline gap-3">
			<span class="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-accent1-800">
				{group}
			</span>
			<h2 class="font-heading text-2xl leading-tight text-ink md:text-3xl">{name}</h2>
		</div>
		{#if description}
			<p class="max-w-xl text-sm leading-relaxed text-ink/60 sm:text-right">{description}</p>
		{/if}
	</div>
</div>
