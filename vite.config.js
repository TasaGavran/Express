import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Folder pored `Express/` gde ste dodali slike (`PlaywrightMCP/Images`). */
const PARENT_IMAGES = path.resolve(__dirname, "../Images");
const DEST = path.join(__dirname, "public/images");

/**
 * Mapiranje vaših imena fajlova → imena koja sajt očekuje.
 * Ako dodate nove slike, ažurirajte ovu listu ili preimenujte fajlove u `public/images/`.
 */
const IMAGE_MAP = [
  ["unnamed.jpg", "hero-1.jpg"],
  ["unnamed (1).jpg", "hero-2.jpg"],
  ["unnamed (2).jpg", "hero-3.jpg"],
  ["unnamed (3).jpg", "banner-kuhinja.jpg"],
  ["unnamed (4).jpg", "gallery-01.jpg"],
  ["unnamed (5).jpg", "gallery-02.jpg"],
  ["unnamed (6).jpg", "gallery-03.jpg"],
];

function syncImagesFromParentFolder() {
  if (!fs.existsSync(PARENT_IMAGES)) return;
  fs.mkdirSync(DEST, { recursive: true });
  for (const [from, to] of IMAGE_MAP) {
    const src = path.join(PARENT_IMAGES, from);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DEST, to));
    }
  }
}

export default defineConfig({
  // Relativne putanje: radi i lokalnog `index.html` u `dist/`, i Cloudflare Pages na root domenu.
  base: "./",
  plugins: [
    {
      name: "sync-images-from-parent",
      buildStart() {
        syncImagesFromParentFolder();
      },
    },
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
