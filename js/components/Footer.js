export default function Footer(t, currentLang) {
	const currentYear = new Date().getFullYear()
	return `
<footer class="site-footer">
	<div class="footer-main">
		<div class="footer-column">
		<a href="/${currentLang}" data-link
			><img
				src="/images/logo_hvac_elite.svg"
				alt="კონდიციონერის ხელოსანი - HVAC Elite"
				width="250"
				height="82"
		/></a>
		<ul>
			<li>
				<p>${t.footer_description}</p>
			</li>
			<li>
				<a
					href="https://www.facebook.com/hvacelite.georgia"
					aria-label="Facebook"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						class="social-icon"
						aria-hidden="true"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
						></path>
					</svg>
				</a>
				<a
					href="https://www.instagram.com/hvacelite.ge/"
					aria-label="Instagram"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						class="social-icon"
						aria-hidden="true"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
						<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
					</svg>
				</a>
				<a
					href="https://wa.me/995514128821"
					aria-label="WhatsApp"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						class="social-icon"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.538-17.042A11.97 11.97 0 0 0 12.051 1.25C5.454 1.25.086 6.617.084 13.214a11.9 11.9 0 0 0 1.605 5.96L0 24l4.933-1.294a11.9 11.9 0 0 0 5.82 1.514h.005c6.596 0 11.964-5.367 11.966-11.967a11.94 11.94 0 0 0-3.5-8.498"
						></path>
					</svg>
				</a>
				<a
					href="https://www.tiktok.com/@hvacelite.ge"
					aria-label="TikTok"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						class="social-icon"
						aria-hidden="true"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/giorgi-gogoladze-hvac-elite/"
					aria-label="LinkedIn"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						class="social-icon"
						aria-hidden="true"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						></path>
						<rect x="2" y="9" width="4" height="12"></rect>
						<circle cx="4" cy="4" r="2"></circle>
					</svg>
				</a>
				<a
					href="https://x.com/hvacelitege"
					aria-label="X (Twitter)"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						class="social-icon"
						aria-hidden="true"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
						<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
					</svg>
				</a>
				<a
					href="https://finitola.github.io/HVAC-R/"
					aria-label="GitHub"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						class="social-icon"
						aria-hidden="true"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
						></path>
					</svg>
				</a>
			</li>
		</ul>
	</div>
	<div class="footer-column">
		<h4 class="footer-title">${t.footer_links_title}</h4>
			<ul aria-label="${t.nav_footer}">
				<li><a href="/${currentLang}/services/" data-link>${t.nav_services}</a></li>
				<li><a href="/${currentLang}/contact/" data-link>${t.nav_contact}</a></li>
				<li>
					<a
						href="https://finitola.github.io/HVAC-R/#hvacrlicense"
						target="_blank"
						rel="noopener noreferrer"
						>${t.nav_learn}</a
					>
				</li>
				<li>
					<a
						href="https://finitola.github.io/HVAC-R/#hvacrcalculation"
						target="_blank"
						rel="noopener noreferrer"
						>${t.nav_calc}
					</a>
				</li>
				<li><a href="/${currentLang}/privacy/" data-link>${t.nav_privacy}</a></li>
				<li><a href="/${currentLang}/terms/" data-link>${t.nav_terms}</a></li>
			</ul>
	</div>
	<div class="footer-column">
		<h4 class="footer-title">${t.footer_contact}</h4>
		<ul>
			<li>📍 ${t.footer_address}</li>
			<li><a href="tel:+995514128821">☎️ ${t.footer_phone}</a></li>
			<li><a href="mailto:gio16acm@gmail.com">📧 ${t.footer_email}</a></li>
			<li>⏰ ${t.footer_time}</li>
		</ul>
	</div>

	<div class="footer-bottom">
		<a href="/">&copy; ${currentYear} ${t.footer_text}</a>
	</div>
</footer>
<!-- Float Button Up -->
<button id="scrollToTopBtn" class="scroll-to-top" aria-label="Scroll to top">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
        <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
</button>

<!-- Float Buttons Calls -->
<div class="mobile-fab-container">
    <a href="tel:+995514128821" class="fab-btn fab-call">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        ${t.btn_call || 'დაგვირეკეთ'}
    </a>
    <a href="https://wa.me/995514128821" class="fab-btn fab-wa" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.538-17.042A11.97 11.97 0 0 0 12.051 1.25C5.454 1.25.086 6.617.084 13.214a11.9 11.9 0 0 0 1.605 5.96L0 24l4.933-1.294a11.9 11.9 0 0 0 5.82 1.514h.005c6.596 0 11.964-5.367 11.966-11.967a11.94 11.94 0 0 0-3.5-8.498"></path>
        </svg>
        WhatsApp
    </a>
</div>
`
}
