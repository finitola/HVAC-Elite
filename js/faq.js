document.addEventListener('DOMContentLoaded', () => {
	const faqItems = document.querySelectorAll('.faq-item')
	if (!faqItems.length) return

	const setExpanded = (item, expanded) => {
		item.classList.toggle('active', expanded)
		const button = item.querySelector('.faq-question')
		if (button) button.setAttribute('aria-expanded', String(expanded))
	}

	faqItems.forEach(item => {
		const button = item.querySelector('.faq-question')
		if (!button) return

		button.addEventListener('click', () => {
			const isActive = item.classList.contains('active')
			faqItems.forEach(i => setExpanded(i, false))
			setExpanded(item, !isActive)
		})
	})
})

