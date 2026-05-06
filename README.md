# HVAC Elite

Static bilingual website for HVAC services, repair, diagnostics, and troubleshooting in Georgia.

The project is built as a lightweight, fast-loading HTML/CSS/JavaScript site with individual pages for the homepage, services, about, contact, FAQ, blog, and article content. It is designed for direct static hosting on GitHub Pages or Cloudflare Pages.

## What this project is

HVAC Elite is a service website for HVAC and refrigeration work, focused on:

- HVAC repair and diagnostics
- AC repair and troubleshooting
- Refrigeration and refrigerant leak content
- VRF and chiller system information
- Local service visibility for Tbilisi and Georgia

The site uses bilingual SEO language in Georgian and English to support search intent for both local and international users.

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- JSON-LD structured data

## Project structure

- `index.html` - homepage
- `services.html` - services overview
- `about.html` - company information
- `contact.html` - contact page
- `faq.html` - frequently asked questions
- `blog.html` - blog listing
- `blog/*.html` - individual blog articles
- `css/` - global and page-specific styles
- `js/` - site scripts
- `img/` - images, icons, logo, and manifest assets
- `404.html` - custom not found page

## Features

- Responsive layout for desktop and mobile
- SEO-focused metadata and article schemas
- Bilingual Georgian and English keyword coverage
- Internal linking between related pages
- Custom 404 page
- PWA manifest and icons

## Local usage

This is a static site, so no build step is required.

You can open `index.html` directly in a browser or serve the folder with any static file server.

## Deployment notes

### GitHub Pages

- Push the repository to GitHub
- Enable GitHub Pages for the main branch
- Use the repository root as the publishing source
- Make sure the site is served from the domain root if you want the existing root-relative paths to work as-is

### Cloudflare Pages

- Connect the GitHub repository to Cloudflare Pages
- Set the build command to none
- Set the output directory to the repository root
- Attach your custom domain after the deployment is live

---

# HVAC Elite

სტატიკური ორენოვანი ვებსაიტი HVAC სერვისებისთვის, შეკეთებისთვის, დიაგნოსტიკისთვის და troubleshooting თემებისთვის საქართველოში.

პროექტი შექმნილია მსუბუქი, სწრაფი HTML/CSS/JavaScript სტრუქტურით და მოიცავს ცალკეულ გვერდებს: მთავარი, სერვისები, ჩვენ შესახებ, კონტაქტი, FAQ, ბლოგი და სტატიები. საიტი გათვლილია პირდაპირ სტატიკურ ჰოსტინგზე GitHub Pages ან Cloudflare Pages-ით.

## რა არის ეს პროექტი

HVAC Elite არის სერვისული ვებსაიტი HVAC და სამაცივრო მიმართულებით, ფოკუსით:

- HVAC შეკეთება და დიაგნოსტიკა
- კონდიციონერის შეკეთება და troubleshooting
- სამაცივრო სისტემები და ფრეონის გაჟონვა
- VRF და ჩილერის სისტემების ინფორმაცია
- ადგილობრივი სერვისის ხილვადობა თბილისსა და საქართველოში

საიტი იყენებს ქართულ და ინგლისურ SEO ტერმინებს, რათა მოიცვას როგორც ადგილობრივი, ისე საერთაშორისო საძიებო მოთხოვნები.

## ტექნოლოგიები

- HTML
- CSS
- Vanilla JavaScript
- JSON-LD structured data

## პროექტის სტრუქტურა

- `index.html` - მთავარი გვერდი
- `services.html` - სერვისების მიმოხილვა
- `about.html` - კომპანიის ინფორმაცია
- `contact.html` - საკონტაქტო გვერდი
- `faq.html` - ხშირად დასმული კითხვები
- `blog.html` - ბლოგის სია
- `blog/*.html` - ცალკეული ბლოგ სტატიები
- `css/` - გლობალური და გვერდის სტილები
- `js/` - საიტის სკრიპტები
- `img/` - სურათები, იკონები, ლოგო და manifest ფაილები
- `404.html` - custom not found გვერდი

## მახასიათებლები

- Responsive layout desktop და mobile მოწყობილობებისთვის
- SEO-ზე ორიენტირებული meta მონაცემები და article schema
- ქართული და ინგლისური keyword coverage
- შიდა ლინკები დაკავშირებულ გვერდებს შორის
- Custom 404 გვერდი
- PWA manifest და icons

## ლოკალურად გამოყენება

ეს არის სტატიკური საიტი, ამიტომ build step არ არის საჭირო.

შეგიძლია `index.html` პირდაპირ ბრაუზერში გახსნა ან გამოიყენო ნებისმიერი static file server.

## Deployment notes

### GitHub Pages

- ატვირთე repository GitHub-ზე
- ჩართე GitHub Pages main branch-ზე
- publishing source მიუთითე repository root-ზე
- თუ გინდა არსებული root-relative paths უცვლელად იმუშაოს, საიტი დომენის root-ზე უნდა იყოს გაშვებული

### Cloudflare Pages

- დააკავშირე GitHub repository Cloudflare Pages-ს
- build command დატოვე none
- output directory მიუთითე repository root-ზე
- deployment-ის შემდეგ დაუმატე custom domain
