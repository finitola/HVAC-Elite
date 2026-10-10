export default function Privacy(t, lang) {
	const privacySchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Privacy - HVAC Elite',
		url: `https://hvacelite.ge${lang === 'ka' ? '' : '/en'}/privacy`,
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
		title: t.privacy_title,
		desc: t.privacy_desc,
		schema: privacySchema,
		content: `
<h1 class="page-title">${t.privacy_h1}</h1>
<p class="page-description">${t.privacy_p}</p>
<section class="police-pages">${t.privacy_text}</section>

`,
	}
}

