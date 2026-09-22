<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Heading from '$lib/components/ui/Heading.svelte';
	import Paragraph from '$lib/components/ui/Paragraph.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	/** Testo */
	export let title: string = '';
	export let text: string = '';

	/** CTA */
	export let primaryHref: string = '';
	export let primaryLabel: string = '';
	export let secondaryHref: string | undefined = '';
	export let secondaryLabel: string | undefined = '';
	export let secondaryVariant: 'outline' | 'soft' = 'outline';
</script>

<Section>
	<Container>
		<Card bg="glass" padding="lg" className="w-full">
			{#if title}
				<Heading level={2} align="center" className="mb-3 break-words">{title}</Heading>
			{/if}
			{#if text}
				<Paragraph align="center" className="mb-5 max-w-4xl mx-auto">{text}</Paragraph>
			{/if}
			{#if primaryHref && primaryLabel}
				<div class="flex flex-wrap justify-center gap-3">
					<Button variant="solid" color="accent1" href={primaryHref}>{primaryLabel}</Button>
					{#if secondaryHref && secondaryLabel}
						<Button variant={secondaryVariant} color="accent1" href={secondaryHref}>
							{secondaryLabel}
						</Button>
					{/if}
				</div>
			{/if}
		</Card>
	</Container>
</Section>
