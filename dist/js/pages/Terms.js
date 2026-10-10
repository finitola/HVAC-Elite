export default function Terms(t, lang) {
	const termsSchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Terms - HVAC Elite',
		url: `https://hvacelite.ge${lang === 'ka' ? '' : '/en'}/terms`,
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
		title: t.terms_title,
		desc: t.terms_desc,
		schema: termsSchema,
		content: `
<h1 class="page-title">${t.terms_h1}</h1>
<p class="page-description">${t.terms_p}</p>
<section class="police-pages">${t.terms_text}</section>
`,
	}
}

