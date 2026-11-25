<script lang="ts">
	import './layout.css';
	import Seo from '$lib/components/meta/Seo.svelte';
	import Nav from '$lib/components/layout/Nav.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import MotionObserver from '$lib/components/motion/MotionObserver.svelte';
</script>

<Seo />
<MotionObserver />
<Nav />
<!-- overflow-x-clip: evita lo scorrimento orizzontale causato dalle animazioni laterali, senza toccare html/body e lo sfondo -->
<div class="overflow-x-clip">
	<slot />
</div>
<Footer />
