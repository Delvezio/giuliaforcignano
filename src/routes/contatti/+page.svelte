<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<PageHeader eyebrow="CONTATTI" title="Possiamo partire da una prima domanda." />

<Section className="pb-12 md:pb-16">
	<Container>
		<div class="mx-auto max-w-3xl space-y-9 text-lg leading-relaxed text-ink/85">
			<div class="space-y-4" data-reveal="up">
				<p>
					Se vuoi chiedere informazioni, conoscere le disponibilità o fissare un primo incontro puoi
					contattarmi direttamente.
				</p>
				<p>
					Non è necessario spiegare tutto nel primo messaggio: puoi semplicemente scrivermi che
					desideri avere informazioni o valutare un appuntamento.
				</p>
			</div>

			<div class="grid gap-6 sm:grid-cols-2">
				<section class="rounded-3xl bg-accent2-50 p-6" data-reveal="left">
					<h2 class="font-heading mb-3 text-2xl text-ink">Studio</h2>
					<address class="not-italic font-semibold">Corso Moncalieri 266<br />10133 Torino</address>
				</section>
				<section
					class="rounded-3xl bg-accent2-50 p-6"
					data-reveal="right"
					style="--reveal-delay: 80ms;"
				>
					<h2 class="font-heading mb-3 text-2xl text-ink">Contatti</h2>
					<p class="font-semibold">Telefono</p>
					<p><a class="text-accent1-800 underline" href="tel:+393403783231">+39 340 378 3231</a></p>
					<p class="mt-4 font-semibold">Email</p>
					<p>
						<a class="break-all text-accent1-800 underline" href="mailto:info@giuliaforcignano.it"
							>info@giuliaforcignano.it</a
						>
					</p>
				</section>
			</div>

			<section class="space-y-3" data-reveal="up">
				<h2 class="font-heading text-2xl text-ink">Colloqui online</h2>
				<p>
					È possibile valutare anche incontri online, in base alle esigenze e alle caratteristiche
					del percorso.
				</p>
			</section>

			<section class="space-y-4" data-reveal="up">
				<h2 class="font-heading text-2xl text-ink">Prima volta?</h2>
				<p>Se hai dubbi su cosa aspettarti puoi leggere la pagina dedicata.</p>
				<Button href="/iniziare-un-percorso">Scopri come funziona il primo incontro →</Button>
			</section>

			<aside
				class="border-l-2 border-accent1 pl-5 text-sm text-ink/75"
				aria-label="Nota di emergenza"
				data-reveal="fade"
			>
				I contatti dello studio non costituiscono un servizio di emergenza. In caso di pericolo
				immediato per te o per un’altra persona, contatta il 112 o rivolgiti al servizio di
				emergenza più vicino.
			</aside>
		</div>
	</Container>
</Section>
