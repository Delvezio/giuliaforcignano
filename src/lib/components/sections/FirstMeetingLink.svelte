<script lang="ts">
	import { resolve } from '$app/paths';

	export let label = 'Scopri come funziona il primo incontro';
</script>

<a
	href={resolve('/iniziare-un-percorso')}
	class="first-meeting-link inline-flex items-center gap-2 font-heading text-lg leading-snug text-accent1-800 underline decoration-1 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800"
>
	<span>{label}</span>
	<span class="arrow" aria-hidden="true">→</span>
</a>

<style>
	.first-meeting-link .arrow {
		transition: transform 180ms ease;
	}

	.first-meeting-link:hover .arrow,
	.first-meeting-link:focus-visible .arrow {
		transform: translateX(0.3rem);
	}

	@media (prefers-reduced-motion: reduce) {
		.first-meeting-link .arrow {
			transition: none;
		}
	}
</style>
