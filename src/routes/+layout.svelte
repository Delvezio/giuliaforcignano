<script lang="ts">
  import './layout.css';
  import Nav from '$lib/components/layout/Nav.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
</script>

<Nav />
<slot />
<Footer />
