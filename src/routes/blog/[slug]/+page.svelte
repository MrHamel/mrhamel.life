<script lang="ts">
	import { formatDate, generateSEOHead } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	{@html generateSEOHead("/blog/"+data.slug, data.meta.title, data.meta.description)}
</svelte:head>

<section class="">
	<div class="relative mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
		<span class="block cursor-pointer text-gray-100" on:click={() => { history.back(); }} role="button" tabindex="0">
			<svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
			</svg>
			Back
		</span>
		<br />
		<h2 class="my-1 text-gray-100 text-4xl font-semibold">{data.meta.title}</h2>
		<div id="tags">
			{#each data.meta.categories as category}
				<a href=/blog/category/{category.toLowerCase()}><span class="text-sm text-gray-100">&num;{category} </span></a>
			{/each}
		</div>
		<p class="my-4 text-gray-100">{formatDate(data.meta.date)}</p>
		<div class="prose prose-md text-gray-100 max-w-none">
			<svelte:component this={data.content} />
		</div>
	</div>
</section>