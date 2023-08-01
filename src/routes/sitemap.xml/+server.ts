export const prerender = true

import * as config from '$lib/config'
import type { Post } from '$lib/types'

export async function GET({ fetch }) {
	const response = await fetch('api/blog/posts')
	const posts: Post[] = await response.json()

	let   pages   = []
	const modules = import.meta.glob('../**/*.svelte'); // Include subfolder

	for (let e in modules) {
		if (e.includes("+page.svelte") && !e.includes("[")) {
			let page = e.replace("../", "").replace("/+page.svelte", "")

			if (page != "+page.svelte")
				pages.push(page)
			else
				pages.push("")
		}
	}
	
	const headers = { 'Content-Type': 'application/xml' }

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    	<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			${pages
				.map(
					(page) => {
							return `<url>
								<loc>${config.url}/${page}</loc>
								<lastmod>${new Date().toISOString()}</lastmod>
								<changefreq>daily</changefreq>
								<priority>0.7</priority>
							</url>`
						}
					)
					.join('')
			}
			${posts
				.map(
					(post) => {
							if (post.published)
								return `<url>
									<loc>${config.url}/${post.slug}</loc>
									<lastmod>${new Date(post.date).toUTCString()}</lastmod>
									<changefreq>daily</changefreq>
									<priority>0.7</priority>
								</url>`
						}
					)
					.join('')
			}
    	</urlset>
	`.trim()

	return new Response(xml, { headers })
}