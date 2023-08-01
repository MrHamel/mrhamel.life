<script lang="ts">
	import { generateSEOHead } from '$lib/utils'
	import SiteBackButton from '$lib/components/site_back_button.svelte';
</script>

<!-- SEO -->
<svelte:head>
	{@html generateSEOHead("/about", "About Me", "About Ryan Hamel")}
</svelte:head>

<article>
    <!-- Title -->
	<div class="relative mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
		<SiteBackButton />
		<div class="max-w-lg mx-auto lg:max-w-7xl">
			<h2 class="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">About Me</h2>

			<!-- Content -->
			<div class="my-4 prose prose-md text-gray-100 max-w-none">
				Content will be added here soon.
			</div>
		</div>
</article>