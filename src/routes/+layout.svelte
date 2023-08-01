<script lang="ts">
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import PageTransition from './transition.svelte';

	import '../app.postcss';

	export let data;
</script>

<div class="flex flex-col min-h-screen">
	<!-- Header -->
	<Header />

	<main class="flex-grow">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<!-- Footer -->
	<Footer />
</div>