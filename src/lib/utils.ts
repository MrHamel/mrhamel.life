import type { Thing, WithContext, WebPage } from 'schema-dts'
import * as config from '$lib/config'
export type Schema = Thing | WithContext<Thing>

type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'long', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return formatter.format(new Date(date))
}

export function generateSEOHead(url: string, title: string = "", desc: string = "") {
	if (typeof location !== 'undefined') {
		url = location.href
	} else {
		url = config.url+url
	}

	const WebPageSchema: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		url: url,
		name: title ? title + " - " + config.title : config.title,
		description: desc ? desc : "A collection of scattered thoughts.",
		isPartOf: {"@id":config.url}
	};

	return `<title>${WebPageSchema['name']}</title>
	<meta property="description" content="${WebPageSchema['description']}" />
	<meta property="og:title" content="${WebPageSchema['name']}" />
	<meta property="og:description" content="${WebPageSchema['description']}" />
	<meta property="og:url" content="${WebPageSchema['url']}" />
	<meta property="twitter:title" content="${WebPageSchema['name']}" />
	<meta property="twitter:description" content="${WebPageSchema['description']}" />
	<script type="application/ld+json">${JSON.stringify(WebPageSchema, null, 2)}</script>`
}