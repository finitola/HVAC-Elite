export default function NotFound(t, lang) {
	return {
		title: '404 | ' + (lang === 'ka' ? 'ვერ მოიძებნა' : 'Not Found'),
		desc: '404 Page Not Found',
		content: `
            <div class="custom-404" style="text-align: center; padding: 100px 20px;">
                <h1 style="font-size: 5rem; color: #029cf9;">404</h1>
                <h2>${lang === 'ka' ? 'გვერდი არ არსებობს' : 'Page not found'}</h2>
                <p>${lang === 'ka' ? 'ბოდიშს გიხდით, მაგრამ გვერდი რომელსაც ეძებთ, ვერ მოიძებნა ან წაიშალა.' : 'Sorry, the page you are looking for does not exist or has been removed.'}</p>
                <br><br>
                <a href="/" data-link class="btn-primary">${t.nav_home}</a>
            </div>
        `,
	}
}
