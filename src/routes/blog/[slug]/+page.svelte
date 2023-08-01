<script lang="ts">
	import { formatDate, generateSEOHead } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	{@html generateSEOHead("/blog/"+data.slug, data.meta.title, data.meta.description)}
</svelte:head>

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