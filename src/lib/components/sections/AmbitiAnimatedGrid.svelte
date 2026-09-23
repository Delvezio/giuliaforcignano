<script lang="ts">
	import { resolve } from '$app/paths';
	import { onDestroy, onMount, tick } from 'svelte';
	import ambiti from '$lib/content/ambiti.json';

	type Slot = {
		front: number;
		back: number;
		showBack: boolean;
	};

	const rotationOrder = [0, 3, 1, 2, 0, 2, 3, 1, 2, 0, 1, 3];
	const firstRotationDelay = 1500;
	const pauseBetweenRotations = 1850;

	let root: HTMLDivElement;
	let timer: ReturnType<typeof setTimeout> | undefined;
	let observer: IntersectionObserver | undefined;
	let inView = false;
	let hovered = false;
	let focusWithin = false;
	let reducedMotion = false;
	let nextAmbito = 4;
	let rotationStep = 0;

	let slots: Slot[] = [
		{ front: 0, back: 4, showBack: false },
		{ front: 1, back: 5, showBack: false },
		{ front: 2, back: 6, showBack: false },
		{ front: 3, back: 7, showBack: false }
	];

	function clearTimer() {
		if (timer) clearTimeout(timer);
		timer = undefined;
	}

	function canRotate() {
		return inView && !hovered && !focusWithin && !reducedMotion;
	}

	function scheduleRotation(delay = pauseBetweenRotations) {
		clearTimer();
		if (!canRotate()) return;
		timer = setTimeout(rotateNextCard, delay);
	}

	async function rotateNextCard() {
		timer = undefined;
		if (!canRotate()) return;

		const slotIndex = rotationOrder[rotationStep % rotationOrder.length];
		const slot = slots[slotIndex];
		const incomingAmbito = nextAmbito;

		slots = slots.map((item, index) => {
			if (index !== slotIndex) return item;
			return item.showBack ? { ...item, front: incomingAmbito } : { ...item, back: incomingAmbito };
		});

		await tick();

		slots = slots.map((item, index) =>
			index === slotIndex ? { ...item, showBack: !item.showBack } : item
		);

		nextAmbito = (nextAmbito + 1) % ambiti.length;
		rotationStep += 1;
		scheduleRotation();
	}

	function updateInteraction(nextHovered: boolean, nextFocusWithin: boolean) {
		hovered = nextHovered;
		focusWithin = nextFocusWithin;
		if (hovered || focusWithin) clearTimer();
		else scheduleRotation();
	}

	onMount(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reducedMotion) return;

		observer = new IntersectionObserver(
			([entry]) => {
				const wasInView = inView;
				inView = entry.isIntersecting;
				if (!inView) clearTimer();
				else if (!wasInView) scheduleRotation(firstRotationDelay);
			},
			{ threshold: 0.3 }
		);

		observer.observe(root);
	});

	onDestroy(() => {
		clearTimer();
		observer?.disconnect();
	});
</script>

<div
	bind:this={root}
	class="grid min-h-[27rem] grid-cols-2 grid-rows-2 gap-3 sm:min-h-[34rem] sm:gap-4 lg:min-h-[36rem]"
	role="group"
	aria-label="Ambiti di intervento"
	aria-live="off"
	on:mouseenter={() => updateInteraction(true, focusWithin)}
	on:mouseleave={() => updateInteraction(false, focusWithin)}
	on:focusin={() => updateInteraction(hovered, true)}
	on:focusout={(event) => {
		if (!root.contains(event.relatedTarget as Node | null)) updateInteraction(hovered, false);
	}}
>
	{#each slots as slot, slotIndex (slotIndex)}
		{@const frontAmbito = ambiti[slot.front]}
		{@const backAmbito = ambiti[slot.back]}
		<div class="flip-card min-h-0">
			<div class:flipped={slot.showBack} class="flip-card-inner relative h-full w-full">
				<a
					href={resolve('/ambiti/[slug]', { slug: frontAmbito.slug })}
					aria-label={`Approfondisci: ${frontAmbito.cardTitle}`}
					aria-hidden={slot.showBack}
					tabindex={slot.showBack ? -1 : undefined}
					class="flip-face group absolute inset-0 flex flex-col items-center overflow-hidden rounded-[28px] border border-black/[0.055] bg-white p-4 text-center transition-colors duration-500 hover:border-accent1-300 hover:bg-accent2-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 sm:p-5 lg:p-6"
				>
					<h3
						class="font-heading text-[1.08rem] leading-tight text-ink sm:text-xl lg:text-[1.35rem]"
					>
						{frontAmbito.cardTitle}
					</h3>
					<div class="flex min-h-0 w-full flex-1 items-center justify-center pt-3 sm:pt-4">
						<img
							src={frontAmbito.image}
							alt=""
							class="block h-full max-h-[10.5rem] w-full object-contain transition-transform duration-500 group-hover:scale-[1.025] sm:max-h-[13rem] lg:max-h-[13.5rem]"
						/>
					</div>
				</a>

				<a
					href={resolve('/ambiti/[slug]', { slug: backAmbito.slug })}
					aria-label={`Approfondisci: ${backAmbito.cardTitle}`}
					aria-hidden={!slot.showBack}
					tabindex={slot.showBack ? undefined : -1}
					class="flip-face flip-back group absolute inset-0 flex flex-col items-center overflow-hidden rounded-[28px] border border-black/[0.055] bg-white p-4 text-center transition-colors duration-500 hover:border-accent1-300 hover:bg-accent2-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800 sm:p-5 lg:p-6"
				>
					<h3
						class="font-heading text-[1.08rem] leading-tight text-ink sm:text-xl lg:text-[1.35rem]"
					>
						{backAmbito.cardTitle}
					</h3>
					<div class="flex min-h-0 w-full flex-1 items-center justify-center pt-3 sm:pt-4">
						<img
							src={backAmbito.image}
							alt=""
							class="block h-full max-h-[10.5rem] w-full object-contain transition-transform duration-500 group-hover:scale-[1.025] sm:max-h-[13rem] lg:max-h-[13.5rem]"
						/>
					</div>
				</a>
			</div>
		</div>
	{/each}
</div>

<style>
	.flip-card {
		perspective: 1200px;
	}

	.flip-card-inner {
		transform-style: preserve-3d;
		transition: transform 900ms cubic-bezier(0.45, 0.05, 0.2, 1);
	}

	.flip-card-inner.flipped {
		transform: rotateY(180deg);
	}

	.flip-face {
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	.flip-back {
		transform: rotateY(180deg);
	}

	@media (prefers-reduced-motion: reduce) {
		.flip-card-inner {
			transition: none;
		}
	}
</style>
