<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import FirstMeetingLink from '$lib/components/sections/FirstMeetingLink.svelte';
</script>

<Section className="pb-12 md:pb-20">
	<Container>
		<div
			class="grid gap-8 rounded-[32px] border border-black/5 bg-white/80 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12"
			data-reveal="scale"
			style="--reveal-duration: 850ms;"
		>
			<div class="max-w-3xl" data-reveal="left" style="--reveal-delay: 120ms;">
				<p class="mb-2 text-sm font-medium uppercase tracking-wide text-accent1-800">
					INIZIARE UN PERCORSO
				</p>
				<h3 class="mb-3 font-heading text-3xl leading-tight tracking-tight text-ink md:text-4xl">
					Non devi sapere già da dove cominciare.
				</h3>
				<p class="max-w-2xl text-lg leading-relaxed text-ink/80">
					Non servono parole giuste né una spiegazione già pronta. Chiamami o scrivimi, capiremo
					insieme se ti posso aiutare.
				</p>
			</div>

			<div
				class="flex flex-col items-start gap-5 lg:items-end"
				data-reveal="right"
				style="--reveal-delay: 200ms;"
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
