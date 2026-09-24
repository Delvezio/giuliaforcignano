<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import MeetingModeCard from '$lib/components/ui/MeetingModeCard.svelte';

	export let eyebrow = 'INIZIARE UN PERCORSO';
	export let title = 'Il primo incontro: uno spazio per capire da dove partire';
	export let intro =
		'Decidere di contattare una psicologa può far nascere molte domande. Il primo incontro serve a conoscerci e comprendere insieme ciò che ti ha portato qui.';
</script>

<PageHeader
	{eyebrow}
	{title}
	{intro}
	panel
	panelBg="bg-transparent"
	splitContentPadding="px-0"
>
	<svelte:fragment slot="media">
		<div class="grid h-full gap-4">
			<MeetingModeCard
				eyebrow="IN STUDIO"
				title="Uno spazio a Torino"
				text={`Ricevo in studio in:
Corso Moncalieri 266, 10133 Torino`}
				image="/img/icon/Therapy-Counseling.png"
				imageAlt="Colloquio psicologico in studio"
				href="https://www.google.com/maps/search/?api=1&query=Corso+Moncalieri+266+Torino"
				linkLabel="Apri la mappa"
			/>
			<MeetingModeCard
				eyebrow="ONLINE"
				title="Da uno spazio adatto e riservato"
				text="È possibile svolgere i colloqui online. La modalità viene valutata in base alle tue esigenze."
				image="/img/icon/hello.svg"
				imageAlt="Colloquio psicologico online"
				tone="soft"
			/>
		</div>
	</svelte:fragment>
</PageHeader>
