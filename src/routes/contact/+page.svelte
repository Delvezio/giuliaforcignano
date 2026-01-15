<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import { enhance } from '$app/forms';

  let ts = Date.now(); // timestamp anti-bot per il time-gate
</script>

<!-- Header -->
<Section className="pt-[calc(var(--section-py)*0.6)]">
  <div class="container-gf text-center space-y-3">
    <Heading level={1}>Contatti</Heading>
    <Paragraph variant="lead" className="max-w-2xl mx-auto">
      Scrivimi per informazioni, appuntamenti in presenza o online.
    </Paragraph>
  </div>
</Section>

<!-- Contenuto -->
<Section className="py-12 md:py-16">
  <Container>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      <!-- SINISTRA: info -->
      <div class="lg:col-span-1">
        <div class="space-y-8">
          <div>
            <Heading level={3}>Contatti diretti</Heading>
            <ul class="mt-3 space-y-2">
              <li>
                <a href="tel:+393403783231" class="inline-flex items-center gap-2 hover:underline">
                  <span class="w-2.5 h-2.5 rounded-full bg-accent1-500" aria-hidden="true"></span>
                  <span>+39 340 378 3231</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@giuliaforcignano.it" class="inline-flex items-center gap-2 hover:underline">
                  <span class="w-2.5 h-2.5 rounded-full bg-accent1-500" aria-hidden="true"></span>
                  <span>info@giuliaforcignano.it</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Heading level={3}>I miei studi</Heading>
            <ol class="mt-3 space-y-3">
              <li class="flex items-start gap-2">
                <span class="w-2.5 h-2.5 mt-2 rounded-full bg-accent2-500" aria-hidden="true"></span>
                <div>
                  <p>Via Saluzzo, 121</p>
                  <p class="opacity-70">10126 Torino TO</p>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span class="w-2.5 h-2.5 mt-2 rounded-full bg-accent2-500" aria-hidden="true"></span>
                <div>
                  <p>Corso Moncalieri, 266</p>
                  <p class="opacity-70">10133 Torino TO</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <!-- DESTRA: form -->
      <div class="lg:col-span-2">
        <Card bg="white" padding="lg" className="max-w-2xl lg:ml-auto">
          <Heading level={3} className="mb-1">Scrivimi un messaggio</Heading>
          <Paragraph className="opacity-80 mb-4">
            Ti rispondo entro 24 ore lavorative.
          </Paragraph>

          <form method="POST" use:enhance class="space-y-4">
            <!-- honeypot -->
            <div class="hidden" aria-hidden="true">
              <label for="website">Website</label>
              <input id="website" name="website" type="text" tabindex="-1" autocomplete="off" />
            </div>
            <!-- time-gate -->
            <input type="hidden" name="ts" value={ts} />

            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="text-sm font-medium" for="name">Nome</label>
                <input id="name" name="name" type="text" required
                  class="w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-accent1-300" />
              </div>
              <div class="space-y-1">
                <label class="text-sm font-medium" for="email">Email</label>
                <input id="email" name="email" type="email" required
                  class="w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-accent1-300" />
              </div>
            </div>

            <div class="space-y-1">
              <label class="text-sm font-medium" for="message">Messaggio</label>
              <textarea id="message" name="message" rows="6" required
                class="w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-accent1-300"></textarea>
            </div>

            <div class="flex justify-end">
              <!-- Bottoni nativi per invio reale -->
              <button
                type="submit"
                class="inline-flex items-center justify-center gap-2 rounded-2xl font-medium px-5 py-2.5
                       bg-accent1-500 text-white hover:opacity-90 focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50"
              >
                Invia
              </button>
            </div>
          </form>

          <p class="text-xs opacity-70 mt-3">
            Usiamo un sistema anti-spam invisibile (honeypot + tempo minimo).
          </p>
        </Card>
      </div>
    </div>
  </Container>
</Section>
