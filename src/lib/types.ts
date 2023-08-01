export type Categories = 'sveltekit' | 'svelte' | 'networking' | 'network' | 'Linux' | 'Juniper' | 'Arista' | 'router' | 'switch' | 'firewall' | 'opinion'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}