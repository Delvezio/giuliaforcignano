<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import AmbitiAnimatedGrid from '$lib/components/sections/AmbitiAnimatedGrid.svelte';
	import Orientamento from '$lib/components/sections/Orientamento.svelte';
	import PathContactBanner from '$lib/components/sections/PathContactBanner.svelte';
</script>

<PageHeader
	eyebrow="DA DOVE INIZIARE"
	title="Non devi sapere già come definire ciò che stai vivendo."
	intro="Questo breve percorso può aiutarti a riconoscerti in una situazione e a trovare i contenuti più vicini alla tua esperienza. Non è un test e non restituisce diagnosi."
	panel
	panelBg="bg-white"
>
	<svelte:fragment slot="media">
		<AmbitiAnimatedGrid />
	</svelte:fragment>
</PageHeader>

<Orientamento standalone showPageLink={false} />

<PathContactBanner />
