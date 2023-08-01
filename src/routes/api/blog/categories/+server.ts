export const prerender = true

import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

export async function GET() {
	let categories: string[] = []

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = 'blog/'+path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			if (post.published) {
				for (let category in post.categories) {
					if (!categories.includes(category.toLowerCase()))
						categories.push(category.toLowerCase())
				}
			}
		}
	}

	return json(categories)
}