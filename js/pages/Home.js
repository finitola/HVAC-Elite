export default function Home(t, lang) {
	const homeSchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'HVAC Elite',
		url: `https://hvacelite.ge${lang === 'ka' ? '' : '/en'}`,
		telephone: '+995514128821',
		image: 'https://hvacelite.ge/images/logo_hvac_elite.svg',
		priceRange: '100₾-5000₾',
		areaServed: 'Tbilisi, Georgia',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Tbilisi, Saburtalo',
			addressLocality: 'Tbilisi',
			postalCode: '0160',
			addressCountry: 'GE',
		},
		openingHours: 'Mo-Su 00:00-23:59',
	}

	return {
		title: t.home_title,
		desc: t.home_desc,
		schema: [homeSchema],
		content: `
<h1 class="page-title">${t.home_h1}</h1>
<p class="page-description">${t.home_p}</p>
<a href="tel:+995514128821" class="page-call-btn" style="font-size:var(--fs-2xl)">+995 514 12 88 21</a>
<img
	src="/images/hvac_elite_troubleshooter.webp"
	alt="${t.home_h1}"
	width="320"
	height="320"
	class="home-img"
/>


<h2 class="home-service-cards-title">${t.service_cards_title}</h2>
<div class="home-service-cards">
	<article class="home-service-card">
		<span class="card-icon">🌬️</span>
		<h3>${t.service_card1}</h3>
	</article>
	<article class="home-service-card">
		<span class="card-icon">🔧</span>
		<h3>${t.service_card2}</h3>
	</article>
	<article class="home-service-card">
		<span class="card-icon">📦</span>
		<h3>${t.service_card3}</h3>
	</article>
	<article class="home-service-card">
		<span class="card-icon">🔍</span>
		<h3>${t.service_card4}</h3>
	</article>
	<article class="home-service-card">
		<span class="card-icon">⚙️</span>
		<h3>${t.service_card5}</h3>
	</article>
	<article class="home-service-card">
		<span class="card-icon">🧩</span>
		<h3>${t.service_card6}</h3>
	</article>
	<article class="home-service-card">
		<span class="card-icon">🚿</span>
		<h3>${t.service_card7}</h3>
	</article>
	<article class="home-service-card">
		<span class="card-icon">🧪</span>
		<h3>${t.service_card8}</h3>
	</article>
</div>
<div class="home-hero-md-board">
	<div class="home-hero-md-board-left">
		<h4>${t.board_title}</h4>
		<p>${t.board_description}</p>
	</div>
	<div class="home-hero-md-board-right">
		<a class="home-hero-md-board-right-btn" href="tel:+995514128821">
			${t.btn_call}
		</a>
	</div>
</div>
<div class="home-hero-stats-container">
	<div class="home-hero-stat-card">
		<div class="home-hero-stat-number" data-target="500">0</div>
		<div class="home-hero-stat-text">${t.home_stat_text1}</div>
	</div>
	<div class="home-hero-stat-card">
		<div class="home-hero-stat-number" data-target="500">0</div>
		<div class="home-hero-stat-text">${t.home_stat_text2}</div>
	</div>
	<div class="home-hero-stat-card">
		<div class="home-hero-stat-number" data-target="1000">0</div>
		<div class="home-hero-stat-text">${t.home_stat_text3}</div>
	</div>
</div>


`,
	}
}


