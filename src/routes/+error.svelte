<script lang="ts">
  export let error: { message?: string } | undefined;
  export let status: number | undefined;
</script>

<div class="min-h-[60vh] grid place-items-center px-4">
  <div class="max-w-xl w-full text-center space-y-4">
    <h1 class="font-heading text-4xl">Oops {status ?? 404}</h1>
    <p class="opacity-80">
      {error?.message ?? 'La pagina richiesta non è stata trovata.'}
    </p>
    <a href="/" class="inline-block mt-2 px-5 py-2 rounded-2xl bg-accent1 text-white">
      Torna alla Home
    </a>
  </div>
</div>
