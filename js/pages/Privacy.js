export default function Privacy(t, lang) {
	const privacySchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Privacy - HVAC Elite',
		url: `https://hvacelite.ge/${lang}/privacy`,
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
