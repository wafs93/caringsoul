# Caring Souls Foundation website

Next.js 15 static site for Caring Souls Foundation (registered charity 1208787).
Built as a **static export**, so the same build runs on Vercel now and on Webfort (cPanel) later.

## Before going live: fill in `lib/site.ts`

Every piece of contact info, form and donation setting lives in that one file. Items marked `TODO`:

- `email`, `phone`, `address`
- `formspree.contact` and `formspree.volunteer` (create two forms at formspree.io)
- `donateUrl` (Stripe Payment Link, PayPal, CAF or JustGiving page)
- `bank` sort code and account number (leave blank to hide the section)
- `social` links (blank ones are hidden)

## Run locally

```bash
npm install
npm run dev
```

## Phase 1: deploy to Vercel

```bash
git init && git add . && git commit -m "Caring Souls Foundation site"
gh repo create caring-souls-foundation --private --source=. --push
npx vercel --prod
```

Vercel detects Next.js automatically. No environment variables are needed.

## Phase 2: move to caringsouls.org.uk on Webfort

1. Build the static files:
   ```bash
   npm run build
   cd out && zip -r ../caringsouls-upload.zip . && cd ..
   ```
2. In Webfort cPanel, open **File Manager → public_html**, upload `caringsouls-upload.zip`, then **Extract**.
   Make sure hidden files are shown so `.htaccess` is included (it forces HTTPS and handles 404s).
3. In the **Fasthosts** control panel, point the domain at Webfort using Webfort's nameservers
   (from their welcome email), or set A records for `@` and `www` to the Webfort server IP.
4. In cPanel, run **SSL/TLS Status → AutoSSL** once DNS has updated.
5. Remove the domain from the Vercel project (if added) so only Webfort serves it.

To update the live site later: edit, `npm run build`, and re-upload the contents of `out/`.

## Structure

```
app/            pages: home, about, what-we-do, get-involved, donate, contact
components/     Header, Footer, Wave (logo swoosh divider), PageHero, FormspreeForm
lib/site.ts     all editable details and programme content
public/         logo images, .htaccess, robots.txt
```
