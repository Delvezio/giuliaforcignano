<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';

  const year = new Date().getFullYear();
</script>

<footer id="contatti" class="mt-16">
  <!-- Usiamo Section + Container per allineare alla griglia del sito -->
  <Section className="py-12 md:py-16">
    <Container>
      <!-- Top: 4 colonne su md+ -->
      <div class="grid gap-10 md:grid-cols-4">
        <!-- Brand + intro + social -->
        <div class="space-y-3">
          <a href="/" class="font-logo text-2xl text-ink inline-block">
            Giulia<span class="text-accent1 italic">Forcignanò</span>
          </a>
          <Paragraph className="opacity-80">
            Psicologa — sedute in presenza e online.
          </Paragraph>

          <!-- Social -->
          <div class="pt-2">
            <p class="text-xs uppercase tracking-wide opacity-60 mb-2">Seguimi</p>
            <div class="flex items-center gap-3">
              <a href="https://instagram.com/" aria-label="Instagram"
                 class="w-9 h-9 grid place-items-center rounded-xl border border-black/10 hover:bg-accent1-50">
                <!-- Instagram SVG -->
                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm12 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
                </svg>
              </a>

              <!-- TikTok SVG
              <a href="https://tiktok.com/" aria-label="TikTok"
                 class="w-9 h-9 grid place-items-center rounded-xl border border-black/10 hover:bg-accent1-50">
                
                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M14 3v8.5a3.5 3.5 0 1 1-3-3.465V6.01a6.01 6.01 0 1 0 6.99 5.93V8.8a6.3 6.3 0 0 0 3 1.2V7.9c-1.1-.2-2.1-.8-3-1.7A6.3 6.3 0 0 1 14 3Z"/>
                </svg>
              </a> -->
            </div>
          </div>
        </div>

        <!-- Navigazione -->
        <nav class="space-y-3">
          <Heading level={5} className="text-xs opacity-60">Scopri di più</Heading>
          <ul class="list-none m-0 p-0 space-y-1">
            <li><a class="hover:underline" href="/">Home</a></li>
            <li><a class="hover:underline" href="/about">Chi sono</a></li>
            <li><a class="hover:underline" href="/metodo">Metodo</a></li>
          </ul>
        </nav>

        <!-- Contatti -->
        <div class="space-y-3">
          <Heading level={5} className="text-xs opacity-60">Contatti</Heading>
          <ul class="list-none m-0 p-0 space-y-2">
            <li>
              <a href="tel:+393403783231" class="inline-flex items-center gap-2 hover:underline cursor-pointer">
                <!-- icona telefono -->
                <svg viewBox="0 0 24 24" class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.18a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+39 340 378 3231</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@giuliaforcignano.it" target="_blank" class="inline-flex items-center gap-2 hover:underline cursor-pointer">
                <!-- icona email -->
                <svg viewBox="0 0 24 24" class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                  <path d="m22 6-10 7L2 6"/>
                </svg>
                <span>info@giuliaforcignano.it</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Studi -->
        <div class="space-y-3">
          <Heading level={5} className="text-xs opacity-60">I miei studi</Heading>
          <ul class="list-none m-0 p-0 space-y-2">
            <li class="flex items-start gap-2">
              <!-- icona pin -->
              <svg viewBox="0 0 24 24" class="w-4 h-4 mt-1 shrink-0" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M12 22s-7-5.33-7-11a7 7 0 1 1 14 0c0 5.67-7 11-7 11z"/>
                <circle cx="12" cy="11" r="3"/>
              </svg>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Via+Saluzzo,+121,+10126+Torino+TO&travelmode=walking"
                target="_blank" rel="noopener noreferrer"
                class="hover:underline cursor-pointer"
                aria-label="Apri indicazioni per Via Saluzzo 121, 10126 Torino su Google Maps"
              >
                <p>Via Saluzzo, 121</p>
                <p class="opacity-70">10126 Torino TO</p>
              </a>
            </li>

            <li class="flex items-start gap-2">
              <svg viewBox="0 0 24 24" class="w-4 h-4 mt-1 shrink-0" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M12 22s-7-5.33-7-11a7 7 0 1 1 14 0c0 5.67-7 11-7 11z"/>
                <circle cx="12" cy="11" r="3"/>
              </svg>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Corso+Moncalieri,+266,+10133+Torino+TO&travelmode=walking"
                target="_blank" rel="noopener noreferrer"
                class="hover:underline cursor-pointer"
                aria-label="Apri indicazioni per Corso Moncalieri 266, 10133 Torino su Google Maps"
              >
                <p>Corso Moncalieri, 266</p>
                <p class="opacity-70">10133 Torino TO</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-10 pt-6 border-t border-black/5 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <span class="opacity-70">© {year} Giulia Forcignano — Tutti i diritti riservati</span>
        <span class="opacity-60">Design & dev · <a class="underline hover:no-underline" href="/">Delvup</a></span>
      </div>
    </Container>
  </Section>
</footer>
