import { error } from '@sveltejs/kit'
import type { Post } from '$lib/types'

export async function load({ fetch, params }) {
	const response = await fetch('../../api/blog/posts')
	const posts: Post[] = await response.json()

	let categories: string[] = []
	let published_posts: Post[] = []

	posts.map((post) => {
		if (post.published)
			categories = post.categories.map((c) => { return c.toLowerCase() })

			if (categories.includes(params.slug.toLowerCase()))
				published_posts.push(post)
	})

	if (published_posts.length)
		return { posts: published_posts, slug: params.slug }
	else
		throw error(404, `No blog posts found with category: ${params.slug}`)
}