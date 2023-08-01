<script lang="ts">
    import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths'
    import { goto } from '$app/navigation';

    let previousPage : string = base ;

    afterNavigate(({from}) => {
        previousPage = from?.url.pathname || previousPage
    })
</script>

<span class="block cursor-pointer text-gray-100" on:click={() => { goto(previousPage); }} role="button" tabindex="0">
    <svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
    </svg>
    Back
</span>
<br />