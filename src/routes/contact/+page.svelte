<script lang="ts">
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Paragraph from '$lib/components/ui/Paragraph.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import { enhance } from '$app/forms';
</script>

<Section className="pt-[calc(var(--section-py)*0.7)]">
  <div class="container-gf text-center space-y-3">
    <Heading level={1}>Contatti</Heading>
    <Paragraph variant="lead" className="max-w-2xl mx-auto">
      Scrivimi per informazioni, preventivi o collaborazioni.
    </Paragraph>
  </div>
</Section>

<Section>
  <Card bg="glass" padding="lg" className="max-w-2xl w-full mx-auto">
    <form method="POST" use:enhance class="space-y-4">
      <!-- honeypot anti-spam -->
      <div class="hidden" aria-hidden="true">
        <label for="website">Website</label>
        <input id="website" name="website" type="text" tabindex="-1" autocomplete="off" />
      </div>

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
        <Button variant="solid" color="accent1" type="submit">Invia</Button>
      </div>
    </form>
    <p class="text-xs opacity-70 mt-3">Usiamo un sistema anti-spam invisibile (honeypot).</p>
  </Card>
</Section>
