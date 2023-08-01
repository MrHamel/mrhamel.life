<script lang="ts">
	import { formatDate, generateSEOHead } from '$lib/utils'

	export let data
	let last = (a, i) => i == a.length - 1;
</script>

<svelte:head>
	{@html generateSEOHead("/blog", "Blog", "A collection of blog posts.")}
</svelte:head>

<h2 class="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">Recent Posts</h2>
<div class="mt-12 grid gap-6 lg:grid-cols-1 lg:gap-x-2 lg:gap-y-6">
	{#each data.posts as post, i}
		<a href=/{post.slug}>
			<p class="text-xl text-gray-100">{post.title}</p>
			<div id="tags">
				{#each post.categories as category}
					<a href=/blog/category/{category.toLowerCase()}><span class="text-sm text-gray-100">&num;{category} </span></a>
				{/each}
			</div>
			<p class="text-sm text-gray-100 my-4">{formatDate(post.date)}</p>
			<p class="mt-3 text-gray-100">{post.description}</p>
		</a>
		{#if !last(data.posts, i)}<hr>{/if}
	{/each}
</div>