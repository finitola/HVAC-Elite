import { allPosts } from '../blogposts/index.js'

export default function Blog(t, lang) {
	const blogCards = allPosts
		.map((postModule) => {
			const blog = postModule.meta
			const data = blog[lang]
			return `
        <article class="blog-card">
			<div class="card-image-wrapper">
				<img
					src="${blog.image}"
					alt="${data.title}"
					width="800"
					height="600"
				/>
			</div>
			<div class="card-content">
				<h2 class="card-title">${data.title}</h2>
				<p class="card-subtitle">${data.subtitle}</p>
				<div class="divider"></div>
				<p class="card-excerpt">${data.excerpt}</p>
				<div class="card-tags">
                <a href="/blog/${blog.slug}" class="tag" data-link>${t.read_more}</a>
				</div>
			</div>
		</article>	
        `
		})
		.join('')
	const blogSchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Blog - HVAC Elite',
		url: 'https://hvacelite.ge/blog',
		telephone: '+995514128821',
		image: 'https://hvacelite.ge/images/logo_hvac_elite.svg',
		priceRange: '100₾-5000₾',
		areaServed: 'Tbilisi, Georgia',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Bakhtrioni St.',
			addressLocality: 'Tbilisi',
			postalCode: '0160',
			addressCountry: 'GE',
		},
		openingHours: 'Mo-Su 00:00-23:59',
		sameAs: [
			'https://www.facebook.com/hvacelite.georgia',
			'https://www.instagram.com/hvacelite.ge/',
			'https://wa.me/995514128821',
			'https://www.tiktok.com/@hvacelite.ge',
			'https://www.linkedin.com/in/giorgi-gogoladze-hvac-elite/',
			'https://x.com/hvacelitege',
			'https://finitola.github.io/HVAC-R/',
		],
	}
	return {
		title: t.blog_title,
		desc: t.blog_desc,
		schema: blogSchema,
		content: `
        <h1 class="page-title">${t.blog_h1}</h1>
        <p class="page-description">${t.blog_p}</p>
        <section class="blog-section">${blogCards}</section>

        `,
	}
}
