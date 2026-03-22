# Fotografije za sajt

## Automatski iz foldera `Images` (pored `Express/`)

Pri `npm run dev` i `npm run build` Vite kopira slike iz **`PlaywrightMCP/Images/`** ovde, prema mapiranju u **`vite.config.js`** (`IMAGE_MAP`).  
Ako promenite slike u tom folderu, ponovo pokrenite dev server ili build.

Možete i ručno staviti fajlove direktno u **`public/images/`** sa imenima ispod (onda će ih Git i Cloudflare sigurno videti).

---

Stavite svoje slike sa **ovim imenima** (ili koristite mapiranje iz `vite.config.js`). Sve slike zamenjuju vizuale sa starog sajta (nema spoljašnjih stock fotografija).

## Hero (rotacija na početnoj)

- `hero-1.jpg` (ili `.webp`)
- `hero-2.jpg`
- `hero-3.jpg`

## Sekcija „Užitak na tanjiru“ (jedna široka)

- `banner-kuhinja.jpg`

## Galerija (mreža)

- `gallery-01.jpg` … `gallery-06.jpg`

## Ikone / mali vizuali za „Zašto Express“ (opciono)

Ako ne dodate ove fajlove, koriste se ugrađene SVG ikone.

- `feature-kuhinja.jpg`
- `feature-dostava.jpg`
- `feature-porodica.jpg`
- `feature-brzina.jpg`

**Format:** JPG ili WebP, preporučena širina hero slika najmanje 1600px.

Ako neki fajl nedostaje, sajt prikazuje urednu rezervu (boja + tekst), bez slomljenih slika.
