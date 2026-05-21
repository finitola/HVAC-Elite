export default function Services(t) {
	const servicesSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: t.services_h1,
		provider: {
			'@type': 'LocalBusiness',
			name: 'HVAC Elite',
			image: 'https://hvacelite.ge/images/logo_hvac_elite.svg',
			telephone: '+995514128821',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Tbilisi',
				addressCountry: 'GE',
			},
		},
		areaServed: {
			'@type': 'City',
			name: 'Tbilisi',
		},
		description: t.services_desc,
	}
	return {
		title: t.services_title,
		desc: t.services_desc,
		schema: servicesSchema,
		content: `
<h1 class="page-title scale-up-top">${t.services_h1}</h1>
<p class="page-description">${t.services_p}</p>
<a href="tel:+995514128821" class="page-call-btn"> 514 12 88 21</a>
<div class="services-grid">
	<article class="service-card">
		<span class="service-icon">🗣️</span>
		<h2>${t.service_title1}</h2>
		<p>${t.service_desc1}</p>
	</article>
	<article class="service-card">
		<span class="service-icon">🏗️</span>
		<h2>${t.service_title2}</h2>
		<p>${t.service_desc2}</p>
	</article>
	<article class="service-card">
		<span class="service-icon">💧</span>
		<h2>${t.service_title3}</h2>
		<p>${t.service_desc3}</p>
	</article>
	<article class="service-card">
		<span class="service-icon">🛠️</span>
		<h2>${t.service_title4}</h2>
		<p>${t.service_desc4}</p>
	</article>
	<article class="service-card">
		<span class="service-icon">📦</span>
		<h2>${t.service_title5}</h2>
		<p>${t.service_desc5}</p>
	</article>
	<article class="service-card">
		<span class="service-icon">🔍</span>
		<h2>${t.service_title6}</h2>
		<p>${t.service_desc6}</p>
	</article>
	<article class="service-card">
		<span class="service-icon">⚙️</span>
		<h2>${t.service_title7}</h2>
		<p>${t.service_desc7}</p>
	</article>
	<article class="service-card">
		<span class="service-icon">🧩</span>
		<h2>${t.service_title8}</h2>
		<p>${t.service_desc8}</p>
	</article>
	<article class="service-card">
		<span class="service-icon">🚿</span>
		<h2>${t.service_title9}</h2>
		<p>${t.service_desc9}</p>
	</article>
	<article class="service-card">
		<span class="service-icon">🧪</span>
		<h2>${t.service_title10}</h2>
		<p>${t.service_desc10}</p>
	</article>
</div>
`,
	}
}
