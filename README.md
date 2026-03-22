# Express restoran – sajt (Jagodina)

Statički sajt na srpskom latinici, spreman za [Cloudflare Pages](https://pages.cloudflare.com/).

## Razvoj

```bash
npm install
npm run dev
```

## Produkcijski build

```bash
npm run build
```

Izlaz je u folderu `dist/`.

## Vaše fotografije

Dodajte slike u `public/images/` prema uputstvu u `public/images/README.md` (`hero-1.jpg`, `gallery-01.jpg`, itd.). Ako fajl nedostaje, sajt prikazuje rezervu.

## Cloudflare Pages (GitHub)

1. Otvorite [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Izaberite repozitorijum `TasaGavran/Express`.
3. Podesite:
   - **Framework preset**: None (ili Vite ako detektuje automatski)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Sačuvajte i sačekajte prvi deploy.

## Cloudflare Pages (CLI, opciono)

```bash
npm run build
npx wrangler pages deploy dist --project-name=express-restoran
```

Potrebna je prijava: `npx wrangler login`.

## Izvori informacija

Javno dostupni podaci o restoranu (adresa, telefon, e-pošta, dostava) preuzeti su sa turističkog listinga i usklađeni sa Google mapama. Proverite i ažurirajte sve kontakt podatke pre objave.
