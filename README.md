# Integrae Engineering Ltd — Website

Production website for **Integrae Engineering Ltd**, an independent engineering and technology consultancy based in Nicosia, Cyprus.

- Stack: Astro + TypeScript + modern CSS
- Hosting target: GitHub Pages (`www.integrae.com.cy`)
- Content: editable from `src/content/`

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:4321`).

Useful scripts:

```bash
npm run build    # static production build to dist/
npm run preview  # preview the production build
```

## Site structure

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services/` | Services |
| `/training/` | Training |
| `/about/` | About |
| `/contact/` | Contact |
| `/privacy/` | Privacy notice (utility page) |

Reusable UI lives in `src/components/`. Business copy lives in `src/content/`.

## Editing content

Update these files rather than hard-coding page text:

- `src/content/site.ts` — company identity, navigation, contact details
- `src/content/home.ts` — homepage sections
- `src/content/services.ts` — six service pillars and engagement models
- `src/content/training.ts` — training offerings and formats
- `src/content/about.ts` — company and founder narrative
- `src/content/contact.ts` — contact page and form labels
- `src/content/privacy.ts` — privacy notice

## Design assets

- Wordmark and geometric mark: `src/components/Logo.astro`
- Homepage hero illustration: `src/components/HeroIllustration.astro`
- Service icons: `src/components/icons/ServiceIcon.astro`
- Favicon: `public/favicon.svg`
- Social sharing image: `public/og-image.svg`

Replace the About-page photo placeholder with an approved professional portrait when ready. Do not publish confidential portfolio images without permission.

## GitHub Pages deployment

1. Create an empty GitHub repository (suggested name: `integrae-website`).
2. Push this project to `main`.
3. In the repository: **Settings → Pages → Source → GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.
5. In Pages settings, set the custom domain to `www.integrae.com.cy`.
6. Keep the `public/CNAME` file (`www.integrae.com.cy`).

### DNS (important for email)

You already use Google Workspace for `info@integrae.com.cy`. Do **not** change MX / SPF / DKIM records when connecting the website.

Recommended website DNS:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `www` | `YOUR-GITHUB-USERNAME.github.io` |

Point `www` to your GitHub Pages hostname, not the repository URL.

Optional later: redirect the apex domain `integrae.com.cy` to `www.integrae.com.cy` via Cloudflare once the www site is verified.

## Commercial positioning reminders

- Present Integrae as a focused senior-led consultancy, not a large multinational.
- Label founder career projects as **Founder's prior professional experience**.
- Do not invent clients, awards, testimonials or Integrae case studies.
- Keep personal email addresses off the public site; use `info@integrae.com.cy`.

## Reference materials

Older Google Sites drafts and research notes are archived under `reference/` and are not part of the published site.
