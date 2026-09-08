import Home from './pages/Home.js'
import Services from './pages/Services.js'
import BlogList from './pages/Blog.js'
import BlogPost from './pages/BlogPost.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Terms from './pages/Terms.js'
import Privacy from './pages/Privacy.js'
import NotFound from './pages/NotFound.js'

export async function matchRoute(path, t, lang) {
	if (path.length > 1 && path.endsWith('/')) {
		path = path.slice(0, -1);
	}
	if (path === '/' || path === '') {
		return Home(t, lang)
	}
	if (path === '/services') {
		return Services(t, lang)
	}
	if (path === '/blog') {
		return BlogList(t, lang)
	}
	if (path.startsWith('/blog/')) {
		const slug = path.split('/blog/')[1]
		if (slug) {
			return BlogPost(t, lang, slug)
		}
	}
	if (path === '/about') {
		return About(t, lang)
	}
	if (path === '/contact') {
		return Contact(t, lang)
	}
	if (path === '/terms') {
		return Terms(t, lang)
	}
	if (path === '/privacy') {
		return Privacy(t, lang)
	}
	// 404
	return NotFound(t, lang)
}
