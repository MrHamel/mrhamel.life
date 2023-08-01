<script lang="ts">
	import { page } from '$app/stores'
</script>

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
			<h2 class="text-3xl tracking-tight font-semibold text-gray-100 sm:text-4xl">{$page.status}: {$page.error?.message}</h2>
		</div>
	</div>
</section>