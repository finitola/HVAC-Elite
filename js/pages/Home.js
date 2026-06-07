export default function Home(t) {
	const homeSchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'HVAC Elite',
		url: 'https://hvacelite.ge/',
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
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: t.faq_question1,
				acceptedAnswer: { '@type': 'Answer', text: t.faq_answer1 },
			},
			{
				'@type': 'Question',
				name: t.faq_question2,
				acceptedAnswer: { '@type': 'Answer', text: t.faq_answer2 },
			},
			{
				'@type': 'Question',
				name: t.faq_question3,
				acceptedAnswer: { '@type': 'Answer', text: t.faq_answer3 },
			},
			{
				'@type': 'Question',
				name: t.faq_question4,
				acceptedAnswer: { '@type': 'Answer', text: t.faq_answer4 },
			},
			{
				'@type': 'Question',
				name: t.faq_question5,
				acceptedAnswer: { '@type': 'Answer', text: t.faq_answer5 },
			},
			{
				'@type': 'Question',
				name: t.faq_question6,
				acceptedAnswer: { '@type': 'Answer', text: t.faq_answer6 },
			},
			{
				'@type': 'Question',
				name: t.faq_question7,
				acceptedAnswer: { '@type': 'Answer', text: t.faq_answer7 },
			},
			{
				'@type': 'Question',
				name: t.faq_question8,
				acceptedAnswer: { '@type': 'Answer', text: t.faq_answer8 },
			},
			{
				'@type': 'Question',
				name: t.faq_question9,
				acceptedAnswer: { '@type': 'Answer', text: t.faq_answer9 },
			},
		],
	}
	const combinedSchema = [homeSchema, faqSchema]
	return {
		title: t.home_title,
		desc: t.home_desc,
		schema: combinedSchema,
		content: `
<h1 class="page-title">${t.home_h1}</h1>
<p class="page-description">${t.home_p}</p>
<a href="tel:+995514128821" class="page-call-btn" style="font-size:var(--fs-xl)">+995 514 12 88 21</a>
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

<section class="faq-container">
	<h5 class="faq-title">${t.faq_title}</h5>
	<div class="faq-list">
		<div class="faq-item">
			<button
				class="faq-question"
				type="button"
				id="faq-q1"
				aria-expanded="false"
				aria-controls="faq-a1"
			>
				<span>${t.faq_question1}</span>
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div
				class="faq-answer"
				id="faq-a1"
				role="region"
				aria-labelledby="faq-q1"
			>
				<p>${t.faq_answer1}</p>
			</div>
		</div>
		<div class="faq-item">
			<button
				class="faq-question"
				type="button"
				id="faq-q2"
				aria-expanded="false"
				aria-controls="faq-a2"
			>
				<span> ${t.faq_question2} </span>
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div
				class="faq-answer"
				id="faq-a2"
				role="region"
				aria-labelledby="faq-q2"
			>
				<p>${t.faq_answer2}</p>
			</div>
		</div>
		<div class="faq-item">
			<button
				class="faq-question"
				type="button"
				id="faq-q3"
				aria-expanded="false"
				aria-controls="faq-a3"
			>
				<span>${t.faq_question3}</span>
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div
				class="faq-answer"
				id="faq-a3"
				role="region"
				aria-labelledby="faq-q3"
			>
				<p>${t.faq_answer3}</p>
			</div>
		</div>
		<div class="faq-item">
			<button
				class="faq-question"
				type="button"
				id="faq-q4"
				aria-expanded="false"
				aria-controls="faq-a4"
			>
				<span>${t.faq_question4}</span>
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div
				class="faq-answer"
				id="faq-a4"
				role="region"
				aria-labelledby="faq-q4"
			>
				<p>${t.faq_answer4}</p>
			</div>
		</div>
		<div class="faq-item">
			<button
				class="faq-question"
				type="button"
				id="faq-q5"
				aria-expanded="false"
				aria-controls="faq-a5"
			>
				<span>${t.faq_question5}</span>
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div
				class="faq-answer"
				id="faq-a5"
				role="region"
				aria-labelledby="faq-q5"
			>
				<p>${t.faq_answer5}</p>
			</div>
		</div>
		<div class="faq-item">
			<button
				class="faq-question"
				type="button"
				id="faq-q6"
				aria-expanded="false"
				aria-controls="faq-a6"
			>
				<span>${t.faq_question6}</span>
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div
				class="faq-answer"
				id="faq-a6"
				role="region"
				aria-labelledby="faq-q6"
			>
				<p>${t.faq_answer6}</p>
			</div>
		</div>
		<div class="faq-item">
			<button
				class="faq-question"
				type="button"
				id="faq-q8"
				aria-expanded="false"
				aria-controls="faq-a8"
			>
				<span>${t.faq_question7}</span>
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div
				class="faq-answer"
				id="faq-a8"
				role="region"
				aria-labelledby="faq-q8"
			>
				<p>${t.faq_answer7}</p>
			</div>
		</div>
		<div class="faq-item">
			<button
				class="faq-question"
				type="button"
				id="faq-q9"
				aria-expanded="false"
				aria-controls="faq-a9"
			>
				<span>${t.faq_question8}</span>
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div
				class="faq-answer"
				id="faq-a9"
				role="region"
				aria-labelledby="faq-q9"
			>
				<p>${t.faq_answer8}</p>
			</div>
		</div>
		<div class="faq-item">
			<button
				class="faq-question"
				type="button"
				id="faq-q10"
				aria-expanded="false"
				aria-controls="faq-a10"
			>
				<span>${t.faq_question9}</span>
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<div
				class="faq-answer"
				id="faq-a10"
				role="region"
				aria-labelledby="faq-q10"
			>
				<p>${t.faq_answer9}</p>
			</div>
		</div>
	</div>
</section>
`,
	}
}
