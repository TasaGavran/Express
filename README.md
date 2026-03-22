# Express restoran — Jagodina

Sajt na srpskom latinici, statički HTML/CSS/JS.

## Lokalno

```bash
npm install
npm run dev
```

## Cloudflare Pages (preporuka)

U dashboardu: **Build command** prazno, **Build output directory** `/` (koren, gde je `index.html`).  
Ne koristite „Wrangler“ kao build ako nemate Worker — samo direktan Pages deploy iz korena.

## Cloudflare Workers (`wrangler deploy`)

Ako build koristi `npx wrangler deploy`, u repou je `wrangler.toml` sa `[assets] directory = "."` i `.assetsignore` (bez `node_modules/`).  
Build može biti samo `npx wrangler deploy` (bez `npm run build`).

## Vizit kartice (štampa)

U folderu `print/`:

- `vizit-prednja.svg` — prednja strana (85 × 55 mm)
- `vizit-zadnja.svg` — zadnja strana sa QR ka [https://express.opetmilosdinic.workers.dev/](https://express.opetmilosdinic.workers.dev/)

QR u SVG-u učitava sliku sa javnog API-ja; za štampu otvori fajl u pregledaču uz internet. Za potpuno oflajn rad ugradi PNG QR u `vizit-zadnja.svg` umesto `<image href="...">`.
