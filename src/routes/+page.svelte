<script lang="ts">
	import * as config from '$lib/config'
	import { generateSEOHead } from '$lib/utils';
</script>

<svelte:head>
	{@html generateSEOHead("/")}
</svelte:head>

<div class="grid h-screen place-content-center items-center justify-center gap-3 bg-[url('/background-2.jpg.webp')] bg-center bg-cover">
	<h1 class="text-5xl mx-auto text-gray-100">Mr. Hamel's Life</h1>
	<h3 class="text-2xl mx-auto text-gray-100">{config.description}</h3>
	<span class="gap-5"></span>
	<a href="/blog" class="mx-auto rounded-xl bg-gray-700 px-20 py-4 text-white">Go to Blog</a>
</div>