<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Heading from '$lib/components/ui/Heading.svelte';
	import Paragraph from '$lib/components/ui/Paragraph.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	/** Contenuti */
	export let eyebrow: string | undefined = undefined;
	export let title: string = '';
	export let text: string | undefined = undefined;

	/** Media */
	export let image: string = '';
	export let alt: string = '';

	/** Opzioni layout */
	export let reverse: boolean = false; // true = immagine a destra su lg+
	export let sectionClass: string = 'py-16 md:py-20 lg:py-24'; // spacing verticale

	/** Highlights opzionali */
	export let highlights: { icon?: string; text: string }[] = [];

	/** CTA opzionali */
	export let primaryHref: string | undefined = undefined;
	export let primaryLabel: string | undefined = undefined;
	export let secondaryHref: string | undefined = undefined;
	export let secondaryLabel: string | undefined = undefined;
	export let secondaryVariant: 'outline' | 'soft' = 'outline';

	function parallaxImage(node: HTMLImageElement) {
		const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
		let animationFrame = 0;
		let isVisible = false;
		let reducedMotion = motionPreference.matches;

		function updatePosition() {
			animationFrame = 0;
			if (!isVisible || reducedMotion) return;

			const frameElement = node.parentElement;
			if (!frameElement) return;

			const rect = frameElement.getBoundingClientRect();
			const progress = Math.min(
				1,
				Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
			);
			const offset = (progress - 0.5) * 44;
			node.style.setProperty('--media-parallax-y', `${offset.toFixed(2)}px`);
		}

		function requestUpdate() {
			if (!isVisible || reducedMotion || animationFrame) return;
			animationFrame = window.requestAnimationFrame(updatePosition);
		}

		function handleMotionPreference() {
			reducedMotion = motionPreference.matches;
			if (reducedMotion) node.style.setProperty('--media-parallax-y', '0px');
			else requestUpdate();
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				isVisible = entry.isIntersecting;
				if (isVisible) requestUpdate();
			},
			{ rootMargin: '15% 0%' }
		);

		observer.observe(node.parentElement ?? node);
		window.addEventListener('scroll', requestUpdate, { passive: true });
		window.addEventListener('resize', requestUpdate, { passive: true });
		motionPreference.addEventListener('change', handleMotionPreference);

		return {
			destroy() {
				observer.disconnect();
				window.removeEventListener('scroll', requestUpdate);
				window.removeEventListener('resize', requestUpdate);
				motionPreference.removeEventListener('change', handleMotionPreference);
				if (animationFrame) window.cancelAnimationFrame(animationFrame);
			}
		};
	}
</script>

<Section className={sectionClass}>
	<Container>
		<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-0">
			<!-- Media -->
			<div
				class="w-full lg:w-[48%]"
				class:lg:order-2={reverse}
				data-reveal={reverse ? 'right' : 'left'}
				style="--reveal-duration: 900ms; --reveal-distance: 2.5rem;"
			>
				<div class="rounded-[40px] overflow-hidden w-full h-72 sm:h-80 lg:h-[520px]">
					{#if image}
						<img
							use:parallaxImage
							src={image}
							{alt}
							class="media-parallax-image w-full object-cover"
						/>
					{:else}
						<div class="w-full h-full grid place-items-center bg-accent2-100">
							<span class="text-ink/70">Inserisci un’immagine</span>
						</div>
					{/if}
				</div>
			</div>

			<!-- Testo -->
			<div class="w-full lg:w-[48%]" class:lg:order-1={reverse}>
				{#if eyebrow}
					<p
						class="text-sm font-medium tracking-wide uppercase text-accent1-800 mb-1"
						data-reveal="up"
						data-reveal-text
					>
						{eyebrow}
					</p>
				{/if}

				<!-- Slot opzionale per accentuare parole con <em> -->
				<div data-reveal="up" data-reveal-text style="--reveal-delay: 55ms;">
					<Heading level={3} className="mb-8"><slot name="title">{title}</slot></Heading>
				</div>

				{#if text}
					<div data-reveal="up" data-reveal-text style="--reveal-delay: 110ms;">
						<Paragraph variant="lead" className="mb-5 max-w-prose">{text}</Paragraph>
					</div>
				{/if}

				{#if highlights && highlights.length}
					<ul
						class="mb-5 flex flex-wrap items-center gap-x-6 gap-y-3"
						data-reveal="up"
						style="--reveal-delay: 165ms;"
					>
						{#each highlights as h, i (`${h.text}-${i}`)}
							<li class="inline-flex items-center gap-2 w-auto flex-none">
								{#if h.icon}
									<span class="text-xl leading-none" aria-hidden="true">{h.icon}</span>
								{:else}
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

				{#if (primaryHref && primaryLabel) || (secondaryHref && secondaryLabel)}
					<div class="flex flex-wrap gap-3" data-reveal="up" style="--reveal-delay: 220ms;">
						{#if primaryHref && primaryLabel}
							<Button variant="solid" color="accent1" href={primaryHref}>{primaryLabel}</Button>
						{/if}
						{#if secondaryHref && secondaryLabel}
							<Button variant={secondaryVariant} color="accent1" href={secondaryHref}
								>{secondaryLabel}</Button
							>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</Container>
</Section>

<style>
	.media-parallax-image {
		height: calc(100% + 4rem);
		margin-top: -2rem;
		transform: translate3d(0, var(--media-parallax-y, 0), 0);
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		.media-parallax-image {
			transform: none;
			will-change: auto;
		}
	}
</style>
