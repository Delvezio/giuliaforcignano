<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Heading from '$lib/components/ui/Heading.svelte';
	import FirstMeetingLink from '$lib/components/sections/FirstMeetingLink.svelte';
</script>

<Section className="py-12 md:py-16">
	<Container>
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
			<header
				class="flex min-h-[30rem] flex-col justify-center rounded-[36px] border border-black/5 bg-white px-7 py-12 md:col-span-2 md:px-10 lg:row-span-2 lg:min-h-0 lg:px-12"
				data-reveal="scale"
				style="--reveal-duration: 900ms;"
			>
				<p
					class="mb-4 text-sm font-medium uppercase tracking-wide text-accent1-800"
					data-reveal="up"
					data-reveal-text
				>
					Contatti
				</p>
				<div data-reveal="up" data-reveal-text style="--reveal-delay: 55ms;">
					<Heading level={1}>Possiamo partire da una prima domanda.</Heading>
				</div>
				<div
					class="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/80"
					data-reveal="up"
					data-reveal-text
					style="--reveal-delay: 110ms;"
				>
					<p>
						Se vuoi chiedere informazioni, conoscere le disponibilità o fissare un primo incontro
						puoi contattarmi direttamente.
					</p>
					<p>
						Non è necessario spiegare tutto nel primo messaggio: puoi semplicemente scrivermi che
						desideri avere informazioni o valutare un appuntamento.
					</p>
				</div>
			</header>

			<section
				class="rounded-[32px] border border-black/5 bg-accent2-100 p-7 md:col-span-1 md:p-8 lg:col-span-2"
				data-reveal="up"
				style="--reveal-delay: 55ms;"
			>
				<p class="mb-3 text-sm font-medium uppercase tracking-wide text-accent1-800">
					Dove ricevo
				</p>
				<h2 class="font-heading mb-4 text-3xl text-ink">Studio</h2>
				<address class="text-lg not-italic leading-relaxed text-ink/80">
					Corso Moncalieri 266<br />10133 Torino
				</address>
				<a
					href="https://www.google.com/maps/search/?api=1&query=Corso+Moncalieri+266+Torino"
					target="_blank"
					rel="noreferrer"
					class="mt-5 inline-flex items-center gap-2 font-medium text-accent1-800 underline decoration-1 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1-800"
				>
					Apri la mappa <span aria-hidden="true">→</span>
				</a>
			</section>

			<section
				class="rounded-[32px] border border-black/5 bg-white p-7 md:col-span-1 md:p-8 lg:col-span-2"
				data-reveal="up"
				style="--reveal-delay: 110ms;"
			>
				<p class="mb-3 text-sm font-medium uppercase tracking-wide text-accent1-800">
					Come contattarmi
				</p>
				<h2 class="font-heading mb-4 text-3xl text-ink">Contatti</h2>
				<div class="space-y-4 text-lg">
					<p>
						<span class="block text-sm font-medium uppercase tracking-wide text-ink/55">Telefono</span>
						<a class="text-accent1-800 underline underline-offset-4" href="tel:+393403783231"
							>+39 340 378 3231</a
						>
					</p>
					<p>
						<span class="block text-sm font-medium uppercase tracking-wide text-ink/55">Email</span>
						<a
							class="break-all text-accent1-800 underline underline-offset-4"
							href="mailto:info@giuliaforcignano.it">info@giuliaforcignano.it</a
						>
					</p>
				</div>
			</section>

			<section
				class="rounded-[32px] border border-black/5 bg-accent1-50 p-7 md:col-span-1 md:p-8 lg:col-span-2"
				data-reveal="up"
				style="--reveal-delay: 55ms;"
			>
				<p class="mb-3 text-sm font-medium uppercase tracking-wide text-accent1-800">
					Modalità
				</p>
				<h2 class="font-heading mb-4 text-3xl leading-tight text-ink">
					Colloqui in presenza o online
				</h2>
				<p class="text-lg leading-relaxed text-ink/80">
					Gli incontri possono svolgersi in presenza nel mio studio a Torino oppure online, da
					uno spazio adatto e riservato. Valuteremo insieme la modalità più adatta alle tue
					esigenze e alle caratteristiche del percorso.
				</p>
			</section>

			<section
				class="rounded-[32px] border border-black/5 bg-white p-7 md:col-span-1 md:p-8 lg:col-span-2"
				data-reveal="up"
				style="--reveal-delay: 110ms;"
			>
				<p class="mb-3 text-sm font-medium uppercase tracking-wide text-accent1-800">
					Il primo incontro
				</p>
				<h2 class="font-heading mb-4 text-3xl text-ink">Prima volta?</h2>
				<p class="mb-6 text-lg leading-relaxed text-ink/80">
					Se hai dubbi su cosa aspettarti puoi leggere la pagina dedicata.
				</p>
				<FirstMeetingLink />
			</section>

			<aside
				class="rounded-2xl border border-black/5 bg-white/65 px-6 py-5 text-sm leading-relaxed text-ink/70 md:col-span-2 lg:col-span-4"
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
