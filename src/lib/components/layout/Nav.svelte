<!-- src/lib/components/layout/Nav.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';

	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	type Route = '/' | '/about' | '/method' | '/ambiti' | '/iniziare-un-percorso' | '/contatti';

	type NavItem = { label: string; route: Route };

	const links: NavItem[] = [
		{ label: 'Chi sono', route: '/about' },
		{ label: 'Metodo', route: '/method' },
		{ label: 'Ambiti', route: '/ambiti' },
		{ label: 'Primo incontro', route: '/iniziare-un-percorso' },
		{ label: 'Contatti', route: '/contatti' }
	];

	let open = false;
	$: path = $page.url.pathname;

	const isActive = (route: Route, current: string) =>
		route === '/' ? current === '/' : current.startsWith(route);
</script>

<header class="sticky top-0 z-40">
	<div class="backdrop-blur supports-backdrop-filter:bg-white/10 bg-white/80">
		<Section>
			<Container className="h-16 py-3 lg:py-6 flex items-center justify-between">
				<!-- Logo -->
				<a href={resolve('/')} class="font-logo text-2xl text-ink">
					Giulia<span class="text-accent1-800 italic">Forcignanò</span>
				</a>

				<!-- Desktop nav -->
				<nav class="hidden lg:flex items-center gap-3 xl:gap-6" aria-label="Navigazione principale">
					{#each links as l (l.label)}
						<a
							href={resolve(l.route)}
							class="text-sm font-medium px-2 py-1 rounded-xl transition hover:bg-accent1-50"
							class:text-accent1-800={isActive(l.route, path)}
							aria-current={isActive(l.route, path) ? 'page' : undefined}
						>
							{l.label}
						</a>
					{/each}

					<Button
						size="md"
						variant="solid"
						color="accent1"
						href="tel:+393403783231"
						className="ml-2"
					>
						Chiama ora
					</Button>
				</nav>

				<!-- Mobile toggler -->
				<button
					class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-black/10 bg-white/70"
					aria-label={open ? 'Chiudi menu' : 'Apri menu'}
					aria-expanded={open}
					aria-controls="menu-mobile"
					on:click={() => (open = !open)}
				>
					{#if open}
						<svg
							viewBox="0 0 24 24"
							class="w-5 h-5"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M6 6l12 12M18 6l-12 12" />
						</svg>
					{:else}
						<svg
							viewBox="0 0 24 24"
							class="w-5 h-5"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</Container>
		</Section>

		<!-- Mobile sheet -->
		{#if open}
			<div id="menu-mobile" class="lg:hidden border-t border-black/5 bg-white/90">
				<Container className="py-3">
					<div class="flex flex-col gap-1">
						{#each links as l (l.label)}
							<a
								href={resolve(l.route)}
								class="px-3 py-2 rounded-xl text-base transition hover:bg-accent1-50"
								class:bg-accent1-50={isActive(l.route, path)}
								aria-current={isActive(l.route, path) ? 'page' : undefined}
								on:click={() => (open = false)}
							>
								{l.label}
							</a>
						{/each}

						<Button variant="solid" color="accent1" href="tel:+393403783231" full className="mt-2">
							Chiama ora
						</Button>
					</div>
				</Container>
			</div>
		{/if}
	</div>
</header>
