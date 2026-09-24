<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import FirstMeetingLink from '$lib/components/sections/FirstMeetingLink.svelte';
</script>

<Section className="section-rhythm">
	<Container>
		<div
			class="grid gap-8 rounded-[32px] border border-black/5 bg-white/80 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12"
			data-reveal="scale"
			style="--reveal-duration: 850ms;"
		>
			<div class="content-rhythm max-w-3xl">
				<p
					class="text-sm font-medium uppercase tracking-wide text-accent1-800"
					data-reveal="up"
					data-reveal-text
					style="--reveal-delay: 30ms;"
				>
					INIZIARE UN PERCORSO
				</p>
				<h3
					class="font-heading text-3xl leading-tight tracking-tight text-ink md:text-4xl"
					data-reveal="up"
					data-reveal-text
					style="--reveal-delay: 75ms;"
				>
					Non devi sapere già da dove cominciare.
				</h3>
				<p
					class="max-w-2xl text-lg leading-relaxed text-ink/80"
					data-reveal="up"
					data-reveal-text
					style="--reveal-delay: 130ms;"
				>
					Non servono parole giuste né una spiegazione già pronta. Chiamami o scrivimi, capiremo
					insieme se ti posso aiutare.
				</p>
			</div>

			<div
				class="flex flex-col items-start gap-5 lg:items-end"
				data-reveal="up"
				style="--reveal-delay: 185ms;"
			>
				<div class="flex flex-wrap gap-3">
					<Button size="md" href="tel:+393403783231">Chiamami</Button>
					<Button size="md" variant="outline" href="mailto:info@giuliaforcignano.it">
						Scrivimi
					</Button>
				</div>
				<FirstMeetingLink />
			</div>
		</div>
	</Container>
</Section>
