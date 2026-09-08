export default function Contact(t, lang) {
	const contactSchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Contact - HVAC Elite',
		url: `https://hvacelite.ge/${lang}/contact`,
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
		title: t.contact_title,
		desc: t.contact_desc,
		schema: contactSchema,
		content: `
<h1 class="page-title">${t.contact_h1}</h1>
<p class="page-description">${t.contact_p}</p>

<section class="contact-section">
	<div class="contact-column">
		<div class="contact-description">
			<h2>${t.contact_h2}</h2>
			<ul>
				<li>${t.contact_li1}</li>
				<li>${t.contact_li2}</li>
				<li>${t.contact_li3}</li>
				<li>${t.contact_li4}</li>
				<li>${t.contact_li5}</li>
				<li>${t.contact_li6}</li>
				<li>${t.contact_li7}</li>
			</ul>
		</div>
		<div class="contact-buttons">
			<a class="contact-btn contact-btn-call" href="tel:+995514128821">
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					width="24"
					height="24"
					style="flex-shrink: 0"
				>
					<path
						d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
					></path>
				</svg>
				+995 514 12 88 21
			</a>
			<a
				class="contact-btn contact-btn-wa"
				href="https://wa.me/995514128821"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="24"
					height="24"
					style="flex-shrink: 0"
				>
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.538-17.042A11.97 11.97 0 0 0 12.051 1.25C5.454 1.25.086 6.617.084 13.214a11.9 11.9 0 0 0 1.605 5.96L0 24l4.933-1.294a11.9 11.9 0 0 0 5.82 1.514h.005c6.596 0 11.964-5.367 11.966-11.967a11.94 11.94 0 0 0-3.5-8.498"
					/>
				</svg>
				WhatsApp
			</a>
			<a
				class="contact-btn contact-btn-tg"
				href="https://t.me/+995514128821"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="24"
					height="24"
					style="flex-shrink: 0"
				>
					<path
						d="M21.944 4.517a1 1 0 0 0-1.104-.163L2.84 11.66a1 1 0 0 0 .104 1.865l4.79 1.597 1.598 4.79a1 1 0 0 0 .796.672 1 1 0 0 0 .953-.41L22.108 5.62a1 1 0 0 0-.164-1.103zM9.39 14.61l-.96 3.2-.99-2.97 8.46-6.68-6.51 6.45z"
					/>
				</svg>
				Telegram
			</a>
		</div>
	</div>
	<div class="contact-column">
		<img src="/images/Tbilisi-Map.webp" alt="${t.map_alt}" loading="lazy" width="837" height="579" />
	</div>
</section>
`,
	}
}
