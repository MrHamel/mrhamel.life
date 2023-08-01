import { error } from '@sveltejs/kit'
import type { Post } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/blog/posts')
	const posts: Post[] = await response.json()

	let published_posts: Post[] = []

	posts.map((post) => {
		if (post.published)
			published_posts.push(post)
	})

	if (published_posts.length)
		return { posts: published_posts }
	else
		throw error(404, `No blog posts found.`)
}