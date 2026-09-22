<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeader from '$lib/components/sections/SectionHeader.svelte';
	import AmbitiGrid from '$lib/components/sections/AmbitiGrid.svelte';

	export let eyebrow = 'AMBITI DI INTERVENTO';
	export let title = 'Ambiti in cui posso aiutarti';
</script>

<Section className="py-12 md:py-16">
	<Container>
		<SectionHeader {eyebrow} {title} />
		<div class="mx-auto max-w-3xl text-center text-lg leading-relaxed text-ink/80 space-y-4 mb-10">
			<p>
				Ogni persona arriva con una storia diversa. Questi sono alcuni degli ambiti che possiamo
				affrontare all’interno di un percorso psicologico costruito sulle tue esigenze.
			</p>
		</div>
		<AmbitiGrid />
	</Container>
</Section>
