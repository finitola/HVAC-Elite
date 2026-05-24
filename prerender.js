import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { matchRoute } from './js/router.js';
import ka from './js/locales/ka.js';
import en from './js/locales/en.js';
import { allPosts } from './js/blogposts/index.js';
import Header from './js/components/Header.js';
import Footer from './js/components/Footer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

// Define static routes
const routes = [
    { url: '/', lang: 'ka', cleanPath: '/' },
    { url: '/ka', lang: 'ka', cleanPath: '/' },
    { url: '/en', lang: 'en', cleanPath: '/' },
    { url: '/ka/services', lang: 'ka', cleanPath: '/services' },
    { url: '/en/services', lang: 'en', cleanPath: '/services' },
    { url: '/ka/blog', lang: 'ka', cleanPath: '/blog' },
    { url: '/en/blog', lang: 'en', cleanPath: '/blog' },
    { url: '/ka/about', lang: 'ka', cleanPath: '/about' },
    { url: '/en/about', lang: 'en', cleanPath: '/about' },
    { url: '/ka/contact', lang: 'ka', cleanPath: '/contact' },
    { url: '/en/contact', lang: 'en', cleanPath: '/contact' },
    { url: '/ka/terms', lang: 'ka', cleanPath: '/terms' },
    { url: '/en/terms', lang: 'en', cleanPath: '/terms' },
    { url: '/ka/privacy', lang: 'ka', cleanPath: '/privacy' },
    { url: '/en/privacy', lang: 'en', cleanPath: '/privacy' },
];

// Add blog posts dynamically
allPosts.forEach(post => {
    routes.push({ url: `/ka/blog/${post.meta.slug}`, lang: 'ka', cleanPath: `/blog/${post.meta.slug}` });
    routes.push({ url: `/en/blog/${post.meta.slug}`, lang: 'en', cleanPath: `/blog/${post.meta.slug}` });
});

async function build() {
    console.log('Generating static HTML files...');
    
    // Create dist directory
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
    }
    
    // Copy static assets
    const assets = ['css', 'js', 'images', 'robots.txt', 'sitemap.xml', 'rss.xml', '_headers', 'wrangler.jsonc'];
    assets.forEach(asset => {
        const srcPath = path.join(__dirname, asset);
        const destPath = path.join(distDir, asset);
        if (fs.existsSync(srcPath)) {
            fs.cpSync(srcPath, destPath, { recursive: true });
        }
    });

    const template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

    for (const route of routes) {
        const t = route.lang === 'en' ? en : ka;
        // matchRoute is async, so await it
        const pageData = await matchRoute(route.cleanPath, t, route.lang);
        
        let html = template;
        
        if (pageData) {
            // Render basic components for hydration
            const headerHtml = Header(t, route.lang, route.cleanPath);
            const footerHtml = Footer(t, route.lang);
            const mainHtml = pageData.content;

            html = html.replace('<header id="app-header"></header>', `<header id="app-header">${headerHtml}</header>`);
            html = html.replace('<footer id="app-footer"></footer>', `<footer id="app-footer">${footerHtml}</footer>`);
            html = html.replace('<main id="app-main"></main>', `<main id="app-main">${mainHtml}</main>`);

            // Replace SEO tags
            if (pageData.title) html = html.replace('<title></title>', `<title>${pageData.title}</title>`);
            if (pageData.desc) html = html.replace('<meta name="description" content="" />', `<meta name="description" content="${pageData.desc}" />`);
            
            // For multiline keywords, use a more robust regex
            if (pageData.keywords) {
                html = html.replace(/<meta\s+name="keywords"\s+content="[^"]*"\s*\/>/, `<meta name="keywords" content="${pageData.keywords}" />`);
            }
            
            const locale = route.lang === 'ka' ? 'ka_GE' : 'en_US';
            html = html.replace('<meta property="og:locale" content="" />', `<meta property="og:locale" content="${locale}" />`);
            
            const siteName = route.lang === 'ka' ? 'HVAC Elite - კონდიციონერის ხელოსანი' : 'HVAC Elite - Troubleshooter';
            html = html.replace('<meta property="og:site_name" content="" />', `<meta property="og:site_name" content="${siteName}" />\n    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' data: https:; connect-src 'self' https:;">\n    <meta name="referrer" content="strict-origin-when-cross-origin">`);
            
            const urlStr = `https://hvacelite.ge${route.url === '/' ? '' : route.url + '/'}`;
            html = html.replace('<link rel="canonical" href="" />', `<link rel="canonical" href="${urlStr}" />`);
            html = html.replace('<meta property="og:url" content="" />', `<meta property="og:url" content="${urlStr}" />`);
            
            if (pageData.title) {
                html = html.replace('<meta property="og:title" content="" />', `<meta property="og:title" content="${pageData.title}" />`);
                html = html.replace('<meta name="twitter:title" content="" />', `<meta name="twitter:title" content="${pageData.title}" />`);
            }
            if (pageData.desc) {
                html = html.replace('<meta property="og:description" content="" />', `<meta property="og:description" content="${pageData.desc}" />`);
                html = html.replace('<meta name="twitter:description" content="" />', `<meta name="twitter:description" content="${pageData.desc}" />`);
            }
            if (pageData.image) {
                html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/>/g, `<meta property="og:image" content="${pageData.image}" />`);
            }
            if (pageData.schema) {
                html = html.replace('<script id="dynamic-schema" type="application/ld+json"></script>', `<script id="dynamic-schema" type="application/ld+json">${JSON.stringify(pageData.schema)}</script>`);
            }
        }

        html = html.replace('<html lang="ka" id="html-tag">', `<html lang="${route.lang}" id="html-tag">`);
        
        // Calculate file path
        let targetDir = distDir;
        if (route.url !== '/') {
            const relativeDir = route.url.substring(1);
            targetDir = path.join(distDir, relativeDir);
        }
        
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }
        
        fs.writeFileSync(path.join(targetDir, 'index.html'), html);
        console.log(`Created: ${route.url === '/' ? '/index.html' : route.url + '/index.html'}`);
    }

    // 404 page
    let html404 = template;
    const pageData404 = await matchRoute('/not-found', ka, 'ka');
    html404 = html404.replace('<header id="app-header"></header>', `<header id="app-header">${Header(ka, 'ka', '/')}</header>`);
    html404 = html404.replace('<footer id="app-footer"></footer>', `<footer id="app-footer">${Footer(ka, 'ka')}</footer>`);
    html404 = html404.replace('<main id="app-main"></main>', `<main id="app-main">${pageData404.content}</main>`);
    html404 = html404.replace('<title></title>', `<title>${pageData404.title}</title>`);
    fs.writeFileSync(path.join(distDir, '404.html'), html404);
    console.log(`Created: /404.html`);

    console.log('✅✅✅ SSG Prerender complete! The "dist" folder is ready to upload. ✅✅✅');
}

build().catch(console.error);
