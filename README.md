# HEARTHWELL CIC — website

Static marketing website for HEARTHWELL CIC, a UK Community Interest Company.

## Structure

```
hearthwell-cic/
├── index.html        # Home
├── about.html        # About us
├── our-work.html     # Our work
├── get-involved.html # Get involved (donate / volunteer / partner)
├── contact.html      # Contact + form
├── css/style.css     # All styling (design tokens, responsive)
├── js/main.js        # Nav toggle, footer year, form demo, scroll reveal
└── README.md
```

Plain HTML + CSS + JavaScript. No build step, no frameworks. Works on any static host.

## Before launch — replace these placeholders

| Where | What to replace |
|---|---|
| Footer + About page | `Company number 00000000` → your real CIC registration number |
| Footer + Contact page | `[Registered office address]` → your real address |
| Footer + Contact page | `+44 (0)20 0000 0000` and `hello@hearthwellcic.org.uk` → real contact details |
| About page team section | `[Team member name]`, roles and photos |
| All pages (`.photo` blocks) | Replace placeholder colour blocks with real photography |
| Get involved page | Wire the "Donate now" button to your donation platform |
| Contact form | Connect to a form service (Formspree / Netlify Forms) — the form currently shows a demo confirmation only |
| `og:*` meta tags | Add real preview images |

Also add: a proper Privacy Policy and Terms of Use page (link in footer).

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

The site is fully static. Recommended free hosts:

- **GitHub Pages** — push this folder to a repo, enable Pages (branch `main`, `/root`).
- **Netlify** — drag & drop the folder onto app.netlify.com.
- **Vercel** — import the folder.
