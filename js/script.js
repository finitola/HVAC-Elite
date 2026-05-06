/* Responsive Navigation */
document.addEventListener('DOMContentLoaded', () => {
	const burgerBtn = document.getElementById('burger-btn')
	const navLinks = document.getElementById('nav-links')

	if (!burgerBtn || !navLinks) return

	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('open')
		navLinks.classList.toggle('open')

		const isOpen = burgerBtn.classList.contains('open')
		burgerBtn.setAttribute('aria-expanded', String(isOpen))
	})
})

/* Scroll Up */
const floatingActions = document.getElementById('floating-actions')
const scrollToTopBtn = document.getElementById('scrollToTopBtn')

if (floatingActions && scrollToTopBtn) {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 300) {
			floatingActions.classList.add('show')
		} else {
			floatingActions.classList.remove('show')
		}
	})

	scrollToTopBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
}
