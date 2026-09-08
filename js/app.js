import { store } from './store.js'
import { matchRoute } from './router.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

const getTranslations = async (lang) => {
	const module = await import(`./locales/${lang}.js`)
	return module.default
}

/* ==== Responsive Navigation Init - ეს ფუნქცია ყოველთვის renderApp()-ის შემდეგ უნდა გაეშვას ==== */
const initResponsiveNav = () => {
	const burgerBtn = document.getElementById('burger-btn')
	const navLinks = document.getElementById('nav-links')

	if (!burgerBtn || !navLinks) return

	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('open')
		navLinks.classList.toggle('open')

		const isOpen = burgerBtn.classList.contains('open')

		burgerBtn.setAttribute('aria-expanded', String(isOpen))
	})
}

const renderApp = async () => {
	const t = await getTranslations(store.lang)

	document.getElementById('app-header').innerHTML = Header(
		t,
		store.lang,
		store.path,
	)

	document.getElementById('app-footer').innerHTML = Footer(t, store.lang)

	const pageData = await matchRoute(store.path, t, store.lang)

	document.getElementById('app-main').innerHTML = pageData.content

	document.documentElement.lang = store.lang

	document.title = pageData.title || ''

	document
		.querySelector('meta[name="description"]')
		?.setAttribute('content', pageData.desc || '')

	const currentLocale = store.lang === 'ka' ? 'ka_GE' : 'en_US'
	document
		.querySelector('meta[property="og:locale"]')
		?.setAttribute('content', currentLocale)
	const currentSiteName =
		store.lang === 'ka'
			? 'HVAC Elite - კონდიციონერის ხელოსანი'
			: 'HVAC Elite - Troubleshooter'
	document
		.querySelector('meta[property="og:site_name"]')
		?.setAttribute('content', currentSiteName)

	let canonicalPath = window.location.pathname
	if (canonicalPath.length > 1 && canonicalPath.endsWith('/')) {
		canonicalPath = canonicalPath.slice(0, -1)
	}
	const canonicalUrl = window.location.origin + canonicalPath
	document
		.querySelector('link[rel="canonical"]')
		?.setAttribute('href', canonicalUrl)

	document
		.querySelector('meta[property="og:title"]')
		?.setAttribute('content', pageData.title || '')

	document
		.querySelector('meta[property="og:description"]')
		?.setAttribute('content', pageData.desc || '')

	document
		.querySelector('meta[property="og:url"]')
		?.setAttribute('content', canonicalUrl)

	document
		.querySelector('meta[property="og:image"]')
		?.setAttribute(
			'content',
			pageData.image || 'https://hvacelite.ge/images/logo_hvac_elite.svg',
		)

	document
		.querySelector('meta[name="twitter:title"]')
		?.setAttribute('content', pageData.title || '')

	document
		.querySelector('meta[name="twitter:description"]')
		?.setAttribute('content', pageData.desc || '')

	const schemaScript = document.getElementById('dynamic-schema')
	if (schemaScript) {
		schemaScript.textContent = pageData.schema
			? JSON.stringify(pageData.schema)
			: ''
	}
	/* Statistics, Animation */
	const counters = document.querySelectorAll('.home-hero-stat-number')
	const duration = 2000

	const startAnimation = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const counter = entry.target
				const target = +counter.getAttribute('data-target')
				let startTime = null

				const updateCount = (currentTime) => {
					if (!startTime) startTime = currentTime
					const progress = currentTime - startTime

					const currentCount = Math.min(
						Math.floor((progress / duration) * target),
						target,
					)

					counter.innerText = currentCount + '+'

					if (progress < duration) {
						requestAnimationFrame(updateCount)
					} else {
						counter.innerText = target + '+'
					}
				}

				requestAnimationFrame(updateCount)
				observer.unobserve(counter)
			}
		})
	}

	const observer = new IntersectionObserver(startAnimation, {
		root: null,
		threshold: 0.5,
	})

	counters.forEach((counter) => {
		observer.observe(counter)
	})
	/*FAQ JS*/
	const faqItems = document.querySelectorAll('.faq-item')
	if (faqItems.length) {
		const setExpanded = (item, expanded) => {
			item.classList.toggle('active', expanded)
			const button = item.querySelector('.faq-question')
			if (button) button.setAttribute('aria-expanded', String(expanded))
		}

		faqItems.forEach((item) => {
			const button = item.querySelector('.faq-question')
			if (!button) return

			button.addEventListener('click', () => {
				const isActive = item.classList.contains('active')
				faqItems.forEach((i) => setExpanded(i, false))
				setExpanded(item, !isActive)
			})
		})
	}

	/* === ყველა DOM render-ის შემდეგ აქ უნდა ჩასვა interactive init-ები ==== */
	initResponsiveNav()
}

document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('stateChange', renderApp)
	// 1. გამოჩნდეს/დაიმალოს სქროლვის მიხედვით (300 პიქსელის ქვემოთ)
	window.addEventListener('scroll', () => {
		const scrollBtn = document.getElementById('scrollToTopBtn')
		if (scrollBtn) {
			if (window.scrollY > 300) {
				scrollBtn.classList.add('show')
			} else {
				scrollBtn.classList.remove('show')
			}
		}
	})

	// 2. დაკლიკებისას მაღლა ასვლა
	document.body.addEventListener('click', (e) => {
		const scrollBtn = e.target.closest('#scrollToTopBtn')
		if (scrollBtn) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	})
	document.body.addEventListener('click', (e) => {
		/* =========================
		   SPA Link Navigation
		========================= */
		if (e.target.matches('[data-link]')) {
			e.preventDefault()
			let targetPath = e.target.getAttribute('href') // მოდის მაგ: /blog

			const langPrefix = `/${store.lang}`
			if (targetPath.startsWith(langPrefix)) {
				targetPath = targetPath.replace(langPrefix, '') || '/'
			}
			if (store.path !== targetPath) {
				// ბრაუზერის URL-ში ვუწერთ ენას (მაგ: /ka/blog)
				const finalPath = `/${store.lang}${targetPath === '/' ? '' : targetPath}`
				history.pushState(null, null, finalPath)

				// store-ში ვინახავთ სუფთა ლინკს როუტერისთვის (მაგ: /blog)
				store.path = targetPath
			}
		}

		/* =========================
		   Language Switcher
		========================= */
		if (e.target.id === 'lang-switcher') {
			const newLang = store.lang === 'ka' ? 'en' : 'ka'
			store.lang = newLang

			// URL-ში ვცვლით პირველ საქაღალდეს (მაგ: /ka/blog ვხდით /en/blog)
			const finalPath = `/${newLang}${store.path === '/' ? '' : store.path}`
			window.history.replaceState(null, '', finalPath)
		}
	})

	window.addEventListener('popstate', () => {
		const pathParts = window.location.pathname.split('/').filter(Boolean)
		if (pathParts[0] === 'ka' || pathParts[0] === 'en') {
			store.lang = pathParts[0]
			store.path = '/' + pathParts.slice(1).join('/')
		} else {
			store.path = window.location.pathname
		}
	})

	// საიტის ჩატვირთვისას, თუ URL-ში ენა საერთოდ არ წერია,
	// მაგალითად შემოვიდა პირდაპირ mysite.com/blog-ზე,
	// მისამართს ავტომატურად გადავაკეთებთ mysite.com/ka/blog-ად
	const currentPath = window.location.pathname
	if (!currentPath.startsWith('/ka') && !currentPath.startsWith('/en')) {
		const finalPath = `/${store.lang}${store.path === '/' ? '' : store.path}`
		window.history.replaceState(null, '', finalPath)
	}

	renderApp()
})
