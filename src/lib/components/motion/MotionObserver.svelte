<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';

	let observer: IntersectionObserver | undefined;
	let mutationObserver: MutationObserver | undefined;
	let frame = 0;
	let reduceMotion = false;

	function scan() {
		if (!browser) return;

		for (const element of document.querySelectorAll<HTMLElement>('[data-reveal]')) {
			if (element.dataset.revealObserved) continue;
			element.dataset.revealObserved = 'true';

			if (reduceMotion) {
				element.classList.add('is-revealed');
			} else {
				observer?.observe(element);
			}
		}
	}

	function scheduleScan() {
		if (!browser) return;
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(scan);
	}

	afterNavigate(scheduleScan);

	onMount(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		document.documentElement.classList.add('reveal-enabled');

		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add('is-revealed');
					observer?.unobserve(entry.target);
				}
			},
			{ threshold: 0.01, rootMargin: '0px 0px -4% 0px' }
		);

		mutationObserver = new MutationObserver(scheduleScan);
		mutationObserver.observe(document.body, { childList: true, subtree: true });
		scheduleScan();
	});

	onDestroy(() => {
		if (!browser) return;
		cancelAnimationFrame(frame);
		observer?.disconnect();
		mutationObserver?.disconnect();
		document.documentElement.classList.remove('reveal-enabled');
	});
</script>
