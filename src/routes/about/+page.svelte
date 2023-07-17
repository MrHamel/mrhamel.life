<!-- SEO -->
<svelte:head>
	<title>About Me</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="About Me" />
</svelte:head>

<article>
    <!-- Title -->
	<hgroup>
		<h1>About Me</h1>
	</hgroup>

    <!-- Post -->
	<div class="prose">
		This is only a test.
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>