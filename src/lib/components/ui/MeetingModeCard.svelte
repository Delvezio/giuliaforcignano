<script lang="ts">
	export let eyebrow: string;
	export let title: string;
	export let text: string;
	export let image: string;
	export let imageAlt: string = '';
	export let href: string | undefined = undefined;
	export let linkLabel: string | undefined = undefined;
	export let tone: 'white' | 'soft' = 'white';

	$: surfaceClass = tone === 'soft' ? 'bg-accent3-50' : 'bg-white';
	$: mediaClass = tone === 'soft' ? 'bg-white/65' : 'bg-accent2-50';
</script>

<article
	class={`grid min-h-[18rem] grid-cols-1 overflow-hidden rounded-[32px] ${surfaceClass} sm:grid-cols-[0.85fr_1.15fr]`}
	data-reveal="up"
	style="--reveal-duration: 850ms;"
>
	<div class={`flex min-h-52 items-center justify-center p-5 sm:min-h-full sm:p-6 ${mediaClass}`}>
		<img
			src={image}
			alt={imageAlt}
			class="block max-h-44 w-full object-contain transition-transform duration-500 hover:scale-[1.025] motion-reduce:transition-none sm:max-h-[14rem]"
		/>
	</div>

	<div class="flex min-w-0 flex-col justify-center px-5 py-7 sm:px-7 sm:py-8">
		<p class="mb-2 text-xs font-medium uppercase tracking-wide text-accent1-800">{eyebrow}</p>
		<h3 class="font-heading text-[1.45rem] leading-tight text-ink sm:text-[1.75rem]">{title}</h3>
		<p class="mt-4 whitespace-pre-line text-[0.98rem] leading-relaxed text-ink/75">{text}</p>

		{#if href && linkLabel}
			<a
				{href}
				target={href.startsWith('http') ? '_blank' : undefined}
				rel={href.startsWith('http') ? 'noreferrer' : undefined}
				class="mt-5 inline-flex w-fit items-center gap-2 font-medium text-accent1-800 underline decoration-1 underline-offset-4 transition hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 motion-reduce:transition-none"
			>
				{linkLabel}<span aria-hidden="true">→</span>
			</a>
		{/if}
	</div>
</article>
