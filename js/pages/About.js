export default function About(t) {
	const aboutSchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'About - HVAC Elite',
		url: 'https://hvacelite.ge/about',
		telephone: '+995514128821',
		image: 'https://hvacelite.ge/images/logo_hvac_elite.svg',
		priceRange: '100₾-5000₾',
		areaServed: 'Tbilisi, Georgia',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Bakhtrioni St.',
			addressLocality: 'Tbilisi',
			postalCode: '0160',
			addressCountry: 'GE',
		},
		openingHours: 'Mo-Su 00:00-23:59',
		sameAs: [
			'https://www.facebook.com/hvacelite.georgia',
			'https://www.instagram.com/hvacelite.ge/',
			'https://wa.me/995514128821',
			'https://www.tiktok.com/@hvacelite.ge',
			'https://www.linkedin.com/in/giorgi-gogoladze-hvac-elite/',
			'https://x.com/hvacelitege',
			'https://finitola.github.io/HVAC-R/',
		],
	}
	return {
		title: t.about_title,
		desc: t.about_desc,
		schema: aboutSchema,
		content: `
<h1 class="page-title">${t.about_h1}</h1>
<p class="page-description">${t.about_p}</p>
<section class="about-us-section">
	<div class="about-us-column">
		<img
			src="/images/hvac_elite_troubleshooter-about-us.webp"
			alt="${t.about_title}"
		/>
	</div>
	<div class="about-us-column">
		<h2>${t.about_h2}</h2>
		<p>${t.about_p2}</p>
		<p>${t.about_p3}</p>
		<p>${t.about_p4}</p>
		<p>${t.about_p5}</p>
		<h3>${t.about_h3}</h3>
		<ul>
			<li>${t.about_li1}</li>
			<li>${t.about_li2}</li>
			<li>${t.about_li3}</li>
			<li>${t.about_li4}</li>
		</ul>
	</div>
</section>
`,
	}
}
