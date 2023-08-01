<script lang="ts">
	import SiteBackButton from '$lib/components/site_back_button.svelte';
</script>

<!-- Posts -->
<section class="">
	<div class="relative mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
		<SiteBackButton />
		<div class="max-w-lg mx-auto lg:max-w-7xl">
			<slot />
		</div>
	</div>
</section>