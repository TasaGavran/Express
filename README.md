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
- `vizit-zadnja.svg` — zadnja strana (kontakt + QR)
- **`qr.png`** — QR ka [https://express.opetmilosdinic.workers.dev/](https://express.opetmilosdinic.workers.dev/) (mora ostati **u istom folderu** kao `vizit-zadnja.svg`, inače se QR ne vidi)

Za pregled uvek otvaraj fajlove iz istog direktorijuma (npr. ceo `print/` u VS Code-u). Ako menjaš domen, zameni `qr.png` novom slikom istog imena.
