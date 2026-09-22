<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import Orientamento from '$lib/components/sections/Orientamento.svelte';
	import FinalCta from '$lib/components/sections/FinalCta.svelte';
</script>

<PageHeader
	eyebrow="DA DOVE INIZIARE"
	title="Non devi sapere già come definire ciò che stai vivendo."
	intro="Questo breve percorso può aiutarti a riconoscerti in una situazione e a trovare i contenuti più vicini alla tua esperienza. Non è un test e non restituisce diagnosi."
	panel
	panelBg="bg-accent2-50"
/>

<Orientamento standalone showPageLink={false} />

<FinalCta
	title="Non hai trovato parole che ti rappresentano?"
	text="Non è necessario avere già una spiegazione precisa. Puoi contattarmi anche soltanto per fare una prima domanda."
	primaryHref="https://wa.me/393403783231?text=Ciao%20Giulia%2C%20ho%20visitato%20il%20tuo%20sito%20e%20vorrei%20chiederti%20alcune%20informazioni%20sul%20primo%20incontro."
	primaryLabel="Scrivimi su WhatsApp"
	secondaryHref="/iniziare-un-percorso"
	secondaryLabel="Scopri il primo incontro"
/>
