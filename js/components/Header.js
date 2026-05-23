export default function Header(t, currentLang, currentPath) {
	return `
<header class="site-header">
	<ul class="top-header">
		<li>
			<a class="top-header-logo" href="/${currentLang}">
				<img
					src="/images/logo_hvac_elite.svg"
					alt="HVAC Elite - კონდიციონერის ხელოსანი"
					width="250"
					height="82"
				/>
			</a>
		</li>
		<li class="top-header-list">
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
				<line x1="12" y1="18" x2="12.01" y2="18"></line>
			</svg>
			<div>
				<p>${t.btn_call}</p>
				<a href="tel:+995514128821">+995 514 12 88 21</a>
			</div>
		</li>
		<li class="top-header-list">
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
				<circle cx="12" cy="10" r="3"></circle>
			</svg>
			<div>
				<p>${t.local_address}</p>
				<span>Tbilisi, Georgia</span>
			</div>
		</li>
		<li class="top-header-list">
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
				<line x1="16" y1="2" x2="16" y2="6"></line>
				<line x1="8" y1="2" x2="8" y2="6"></line>
				<line x1="3" y1="10" x2="21" y2="10"></line>
				<circle cx="12" cy="16" r="3"></circle>
				<polyline points="12 14 12 16 13 17"></polyline>
			</svg>
			<div>
				<p>${t.work_time}</p>
				<span>24/7</span>
			</div>
		</li>
	</ul>
	<nav class="header-nav">
		<div class="header-nav-mobile-bar">
			<a class="header-btn-call header-mobile-btn" href="tel:+995514128821">
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
					></path>
				</svg>
				<span class="mobile-btn-text">${t.btn_call}</span>
			</a>
			<button
				class="header-burger-btn"
				id="burger-btn"
				aria-label="Toggle menu"
				aria-controls="nav-links"
				aria-expanded="false"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
		<ul id="nav-links" aria-label="${t.nav_main}">
			<li>
				<a href="/${currentLang}" data-link class="header-nav-links">🏠 ${t.nav_home}</a>
			</li>
			<li>
				<a href="/${currentLang}/services" data-link class="header-nav-links"
					>🛠️ ${t.nav_services}</a
				>
			</li>
			<li>
				<a href="/${currentLang}/blog" data-link class="header-nav-links"
					>📝 ${t.nav_blog}</a
				>
			</li>
			<li>
				<a href="/${currentLang}/about" data-link class="header-nav-links"
					>👨‍🔧 ${t.nav_about}</a
				>
			</li>
			<li>
				<a href="/${currentLang}/contact" data-link class="header-nav-links"
					>✉️ ${t.nav_contact}</a
				>
			</li>
			<li class="desktop-btn-li">
				<a class="header-btn-call" href="tel:+995514128821">
					<svg
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
						></path>
					</svg>
					${t.btn_call}
				</a>
			</li>
			<button id="lang-switcher" class="header-lang-btn">
				${currentLang === 'ka' ? '🏳️ EN' : '🏳️ KA'}
			</button>
		</ul>
	</nav>
</header>
`
}
