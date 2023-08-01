<script lang="ts">
	import { fade } from 'svelte/transition'

	export let url: string
</script>

<style lang="postcss">
	.transition {
		height: 100%;
	}
</style>

{#key url}
	<div class="transition transform duration-75 motion-reduce:transition-none motion-reduce:hover:transform-none" in:fade>
		<slot />
	</div>
{/key}