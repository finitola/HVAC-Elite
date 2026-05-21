// ვჭრით URL-ს (მაგ: /ka/blog გახდება ['ka', 'blog'])
const pathParts = window.location.pathname.split('/').filter(Boolean)
let initialLang = localStorage.getItem('lang') || 'ka'
let initialPath = window.location.pathname

// თუ პირველი ნაწილი არის ka ან en
if (pathParts[0] === 'ka' || pathParts[0] === 'en') {
	initialLang = pathParts[0]
	// initialPath-ში ვტოვებთ სუფთა ლინკს ენის გარეშე (მაგ: /blog)
	initialPath = '/' + pathParts.slice(1).join('/')
	localStorage.setItem('lang', initialLang)
}

export const store = new Proxy(
	{
		lang: initialLang,
		path: initialPath === '' ? '/' : initialPath, // თუ ცარიელია, '/' იყოს
	},
	{
		set(target, property, value) {
			target[property] = value
			if (property === 'lang') {
				localStorage.setItem('lang', value)
			}
			window.dispatchEvent(new Event('stateChange'))
			return true
		},
	},
)
