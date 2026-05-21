import { matchRoute } from '../js/router.js'
import ka from '../js/locales/ka.js'
import en from '../js/locales/en.js'

export async function onRequest(context) {
	const url = new URL(context.request.url)
	const path = url.pathname

	// 1. სტატიკურ ფაილებს პირდაპირ ვატარებთ, რომ ტყუილად არ დაიტვირთოს ფუნქცია
	if (
		path.startsWith('/css/') ||
		path.startsWith('/js/') ||
		path.startsWith('/images/') ||
		path.endsWith('.xml') ||
		path.endsWith('.txt') ||
		path.endsWith('.webmanifest') ||
		path.endsWith('.ico')
	) {
		return context.next()
	}

	// 2. გავარკვიოთ რომელი ენა და რომელი გვერდია მოთხოვნილი
	const pathParts = path.split('/').filter(Boolean)
	let lang = 'ka'
	let cleanPath = path

	if (
		pathParts.length > 0 &&
		(pathParts[0] === 'ka' || pathParts[0] === 'en')
	) {
		lang = pathParts[0]
		cleanPath = '/' + pathParts.slice(1).join('/')
	}

	if (cleanPath === '') cleanPath = '/'

	// 3. ავირჩიოთ თარგმანის ობიექტი
	const t = lang === 'en' ? en : ka

	// 4. მივიღოთ ამ კონკრეტული გვერდის SEO მონაცემები router-იდან
	const pageData = await matchRoute(cleanPath, t, lang)

	// 5. წამოვიღოთ index.html (რეალური პასუხი, რასაც სერვერი აბრუნებს)
	const response = await context.next()

	// დავრწმუნდეთ, რომ პასუხი HTML არის
	const contentType = response.headers.get('content-type') || ''
	if (!contentType.includes('text/html')) {
		return response
	}

	// 6. HTMLRewriter-ით ჩავანაცვლოთ SEO თეგები index.html-ში
	return new HTMLRewriter()
		.on('title', {
			element(e) {
				if (pageData.title) e.setInnerContent(pageData.title)
			},
		})
		.on('meta[name="description"]', {
			element(e) {
				if (pageData.desc) e.setAttribute('content', pageData.desc)
			},
		})
		.on('meta[name="keywords"]', {
			element(e) {
				if (pageData.keywords) e.setAttribute('content', pageData.keywords)
			},
		})
		.on('meta[property="og:locale"]', {
			element(e) {
				e.setAttribute('content', lang === 'ka' ? 'ka_GE' : 'en_US')
			},
		})
		.on('meta[property="og:site_name"]', {
			element(e) {
				e.setAttribute(
					'content',
					lang === 'ka'
						? 'HVAC Elite - კონდიციონერის ხელოსანი'
						: 'HVAC Elite - Troubleshooter',
				)
			},
		})
		.on('link[rel="canonical"]', {
			element(e) {
				e.setAttribute('href', url.href)
			},
		})
		.on('meta[property="og:title"]', {
			element(e) {
				if (pageData.title) e.setAttribute('content', pageData.title)
			},
		})
		.on('meta[property="og:description"]', {
			element(e) {
				if (pageData.desc) e.setAttribute('content', pageData.desc)
			},
		})
		.on('meta[property="og:url"]', {
			element(e) {
				e.setAttribute('content', url.href)
			},
		})
		.on('meta[property="og:image"]', {
			element(e) {
				const img =
					pageData.image || 'https://hvacelite.ge/images/logo_hvac_elite.svg'
				e.setAttribute('content', img)
			},
		})
		.on('meta[name="twitter:title"]', {
			element(e) {
				if (pageData.title) e.setAttribute('content', pageData.title)
			},
		})
		.on('meta[name="twitter:description"]', {
			element(e) {
				if (pageData.desc) e.setAttribute('content', pageData.desc)
			},
		})
		.on('script#dynamic-schema', {
			element(e) {
				if (pageData.schema) {
					e.setInnerContent(JSON.stringify(pageData.schema), { html: true })
				}
			},
		})
		.on('html', {
			element(e) {
				e.setAttribute('lang', lang)
			},
		})
		.transform(response)
}
