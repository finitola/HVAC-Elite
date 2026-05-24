import { allPosts } from '../blogposts/index.js'
import NotFound from './NotFound.js'

export default function BlogPost(t, lang, slug) {
	const postModule = allPosts.find((p) => p.meta.slug === slug)

	if (!postModule) {
		return NotFound(t, lang)
	}

	const blog = postModule.meta
	const data = blog[lang]
	const postContent = postModule.content(lang)
	const articleSchema = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: data.title,
		description: data.excerpt,
		image: `https://hvacelite.ge${blog.image.replace('../..', '')}`,
		author: {
			'@type': 'Organization',
			name: 'HVAC Elite',
			url: 'https://hvacelite.ge/',
		},
		publisher: {
			'@type': 'Organization',
			name: 'HVAC Elite',
			logo: {
				'@type': 'ImageObject',
				url: 'https://hvacelite.ge/images/logo_hvac_elite.svg',
			},
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://hvacelite.ge/${lang}/blog/${slug}`,
		},
	}
	return {
		title: `${data.title} | ${t.blog_title}`,
		desc: data.excerpt,
		image: blog.image,
		schema: articleSchema,
		content: `
        <div class="blogPost-card">
			<div class="post-card-image-wrapper">
				<img
					src="${blog.image}"
					alt="${data.title}"
					width="800"
					height="600"
				/>
			</div>
			<div class="post-card-content">
				<h1 class="card-title">${data.title}</h1>
				<p class="card-subtitle">${data.subtitle}</p>
				<div class="divider"></div>
				<div class="card-excerpt">${postContent}</div>
				<div class="post-card-tags">
				<a href="/${lang}/blog" class="post-tag" data-link> ${t.back_to_blog}</a>
				</div>
			</div>
		</div>
        `,
	}
}
