<script lang="ts">
	import { formatDate, generateSEOHead } from '$lib/utils'
	export let data
	let last = (a, i) => i == a.length - 1;
</script>

<svelte:head>
	{@html generateSEOHead("/blog/category/"+data.slug, "Blog Posts by Category: "+data.slug, "A collection of blog posts with for the category: "+data.slug)}
</svelte:head>

<!-- Posts -->
<section class="">
	<div class="relative mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
		<span class="block cursor-pointer text-gray-100" on:click={() => { history.back(); }} role="button" tabindex="0">
			<svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
			</svg>
			Back
		</span>
		<br />
		<div class="max-w-lg mx-auto lg:max-w-7xl">
			<h2 class="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">Recent Posts for Category: {data.slug}</h2>
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
		</div>
	</div>
</section>