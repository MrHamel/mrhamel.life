<script lang="ts">
    import Toggle from './toggle.svelte'
	import Avatar from './avatar.svelte';
	import * as config from '$lib/config'
</script>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>

<nav>
    <!-- Title -->
	<a href="/" class="title">
		<!-- <Avatar width=32 rounded={true} userFullName="Ryan Hamel" src="https://ryanhamel.com/img/profile.webp" /> -->
		{config.title}
	</a>

    <!-- Navigation -->
	<ul class="links">
		<li>
			<a href="/about">About Me</a>
		</li>
		<li>
			<a href="https://ryanhamel.com/links" target="_blank">Contact Me</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li>
	</ul>

    <!-- Theme -->
    <Toggle />
</nav>