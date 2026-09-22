<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<Section className="py-12 md:py-20">
	<Container>
		<div
			class="mx-auto max-w-3xl rounded-3xl bg-accent2-50 px-6 py-10 text-center md:px-12 md:py-14"
		>
			<p class="mb-3 text-sm font-medium uppercase tracking-wide text-accent1-800">
				INIZIARE UN PERCORSO
			</p>
			<h2 class="mb-6 font-heading text-3xl text-ink md:text-4xl">
				Non devi sapere già da dove cominciare.
			</h2>
			<div class="mx-auto max-w-2xl space-y-4 text-lg leading-relaxed text-ink/80">
				<p>
					Il primo incontro serve anche a questo: raccontare ciò che stai vivendo con i tuoi tempi,
					fare domande e iniziare a comprendere insieme quale può essere il percorso più adatto alle
					tue esigenze.
				</p>
				<p>Non servono parole giuste né una spiegazione già pronta.</p>
			</div>
			<div class="mt-8 flex flex-wrap justify-center gap-3">
				<Button href="/iniziare-un-percorso">Scopri come funziona il primo incontro</Button>
				<Button variant="outline" href="mailto:info@giuliaforcignano.it">Scrivimi</Button>
			</div>
		</div>
	</Container>
</Section>
