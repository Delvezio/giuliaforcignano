<script lang="ts">
	import SectionHeader from '$lib/components/sections/SectionHeader.svelte';
	import Orientamento from '$lib/components/sections/Orientamento.svelte';
	import PathContactBanner from '$lib/components/sections/PathContactBanner.svelte';

	export let title: string;
	export let titleAccent: string;
	export let intro: string;
	export let iconSrc = '/img/icon/hot-air-balloon.svg';
</script>

<SectionHeader
	{title}
	{titleAccent}
	{intro}
	{iconSrc}
	iconAlt="Mongolfiera"
	iconFloat
	iconFloatDistance="8px"
	iconFloatDuration="2.5s"
	sectionClass="section-rhythm"
/>

<Orientamento standalone showIntro={false} showPageLink={false} />

<PathContactBanner />
