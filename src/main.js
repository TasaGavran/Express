import "./style.css";

const MAP_EMBED =
  "https://www.google.com/maps?q=Express+restoran+Jagodina+Maksima+Gorkog+2&hl=sr&z=17&output=embed";

const FB_URL =
  "https://www.facebook.com/profile.php?id=100070725584725&fref=ts";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Express+restoran+Jagodina/@43.9799435,21.2595547,17z";

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function resolveHeroBackgrounds() {
  const candidates = ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"];
  const resolved = [];
  for (const c of candidates) {
    const ok = await preloadImage(c);
    if (ok) resolved.push(ok);
  }
  return resolved;
}

async function gallerySrc(i) {
  const n = String(i).padStart(2, "0");
  const jpg = `/images/gallery-${n}.jpg`;
  const webp = `/images/gallery-${n}.webp`;
  if (await preloadImage(jpg)) return jpg;
  if (await preloadImage(webp)) return webp;
  return null;
}

function mount(html) {
  document.querySelector("#app").innerHTML = html;
}

const pageHtml = `
  <header class="top-bar">
    <div class="top-bar__inner">
      <div>
        <a href="tel:+38135250250">Telefon: 035 / 250-250</a>
        &nbsp;|&nbsp;
        <a href="mailto:expressrestoran@gmail.com">expressrestoran@gmail.com</a>
      </div>
      <div class="top-bar__social">
        <a href="${FB_URL}" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="${GOOGLE_REVIEWS_URL}" target="_blank" rel="noopener noreferrer">Google mape</a>
      </div>
    </div>
  </header>

  <header class="site-header">
    <div class="site-header__inner">
      <a class="logo" href="#pocetak">Express <span>restoran</span></a>
      <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="glavna-navigacija">
        Meni
      </button>
      <nav class="nav" id="glavna-navigacija" aria-label="Glavna navigacija">
        <a href="#o-nama">O nama</a>
        <a href="#jelovnik">Jelovnik</a>
        <a href="#galerija">Galerija</a>
        <a href="#recenzije">Utisci</a>
        <a href="#lokacija">Lokacija</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </div>
  </header>

  <main id="pocetak">
    <section class="hero" aria-label="Početna prezentacija">
      <div class="hero__slides" id="hero-slides"></div>
      <div class="hero__overlay" aria-hidden="true"></div>
      <div class="hero__content">
        <h1>Dobrodošli u Express restoran</h1>
        <p class="hero__lead">
          Kuvana jela, domaća kuhinja i brz, prijatan obrok u centru Jagodine —
          za pauzu na poslu, porodicu u prolazu ili miran ručak u našem prostoru.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:0.75rem">
          <a class="btn btn--primary" href="tel:+38135250250">Pozovite nas</a>
          <a class="btn btn--ghost" href="#jelovnik">Pogledajte ponudu</a>
        </div>
        <div class="hero__dots" id="hero-dots" role="tablist" aria-label="Slike u uvodu"></div>
      </div>
    </section>

    <div class="tagline-strip">
      <p>Uživajte u ukusima domaće kuhinje — sveže, toplo i spremno za nekoliko minuta.</p>
    </div>

    <section class="section" id="o-nama">
      <div class="section__inner">
        <p class="section__eyebrow">O nama</p>
        <h2>Brz obrok, pun ukus</h2>
        <p class="section__intro">
          Express restoran je u samom centru Jagodine, u ulici Maksima Gorkog 2 (pored Borova),
          preko puta Radničkog univerziteta, kod parkinga. Koncept je inspiriisan „ekspres“
          restoranima u kojima za kratko vreme dobijete kompletan, kvalitetan obrok —
          bilo da jedete kod nas ili nosite za poneti.
        </p>
        <p class="section__intro" style="margin-top:-1rem">
          Kod nas zateknete zaposlene na pauzi, studente, turiste, penzionere i sve one kojima je
          potreban obrok po pristupačnim cenama, bez žurbe i komplikacija.
        </p>
      </div>
    </section>

    <section class="section" id="jelovnik" style="background:#fff">
      <div class="section__inner">
        <p class="section__eyebrow">Jelovnik</p>
        <h2>Šta sve možete da poručite</h2>
        <p class="section__intro">
          Ponuda obuhvata veliki izbor kuvanih jela i mesnih specijaliteta, tradicionalna i domaća jela,
          suve obroke, salate, doručak meni, supe i čorbe, ribu, vegetarijanske opcije, kao i poslastice,
          torte i kolače. Tačan dnevni meni i cene proverite kod osoblja ili telefonom.
        </p>
        <div class="menu-grid">
          <article class="menu-card">
            <div class="menu-card__body">
              <h3>Kuvana jela</h3>
              <div class="menu-card__price">Dnevni meni</div>
              <p>Čorbice, gulaši, paprikaš, musaka, punjene paprike i druga jela po sezoni.</p>
            </div>
          </article>
          <article class="menu-card">
            <div class="menu-card__body">
              <h3>Specijaliteti od mesa</h3>
              <div class="menu-card__price">Na planci</div>
              <p>Roštilj, pečenje, uštipci i druga jela za one koji žele nešto konkretnije za zub.</p>
            </div>
          </article>
          <article class="menu-card">
            <div class="menu-card__body">
              <h3>Salate i prilozi</h3>
              <div class="menu-card__price">Veliki izbor</div>
              <p>Sveže salate i prilozi uz glavno jelo — idealno uz brzi ručak.</p>
            </div>
          </article>
          <article class="menu-card">
            <div class="menu-card__body">
              <h3>Doručak</h3>
              <div class="menu-card__price">Jutarnji meni</div>
              <p>Kombinacije za dobar početak dana — pitajte šta je danas na ponudi.</p>
            </div>
          </article>
          <article class="menu-card">
            <div class="menu-card__body">
              <h3>Riba i lake opcije</h3>
              <div class="menu-card__price">Po danu</div>
              <p>Riblja jela i vegetarijanske varijante kada su u ponudi.</p>
            </div>
          </article>
          <article class="menu-card">
            <div class="menu-card__body">
              <h3>Poslastice</h3>
              <div class="menu-card__price">Torte i kolači</div>
              <p>Slatki završetak obroka — uključujući novitete iz naše poslastičarnice.</p>
            </div>
          </article>
        </div>
        <p class="menu-note">
          <strong>Napomena:</strong> Dnevni meni i cene se menjaju; za firmu i veće porudžbine
          dogovarajte dostavu i ketering direktno sa osobljem.
        </p>
      </div>
    </section>

    <section class="cta-banner" aria-label="Poziv na akciju">
      <div class="cta-banner__bg cta-banner__bg--fallback" id="cta-bg"></div>
      <div class="cta-banner__inner">
        <h2>Najbolji odnos kvaliteta, brzine i cene</h2>
        <p>
          Poručite jelo sa dnevnog menija — proverite kod nas aktuelne ponude i pogodnosti
          (uključujući akcije tipa gratis desert uz određene porudžbine, kada su u toku).
        </p>
        <a class="btn btn--primary" href="tel:+38135250250">Rezervacija / porudžbina</a>
      </div>
    </section>

    <section class="section reviews" id="recenzije">
      <div class="section__inner">
        <p class="section__eyebrow">Google mape</p>
        <h2>Utisci gostiju</h2>
        <p class="section__intro">
          Na Google mapama možete pročitati iskustva posetilaca i ocenu restorana.
          Ispod su uobičajene teme koje ljudi pominju u recenzijama malih restorana sa kuvanim jelima —
          proverite šta je aktuelno na linku ispod.
        </p>
        <div class="reviews__grid">
          <article class="review-card">
            <h3>Brzina i praktičnost</h3>
            <p>Mnogi gosti traže obrok za pauzu ili između obaveza — brza usluga i jasna ponuda su često u fokusu.</p>
          </article>
          <article class="review-card">
            <h3>Izbor jela</h3>
            <p>Kod nas je akcenat na kuvanim jelima i domaćoj kuhinji sa širokim izborom za različite ukuse.</p>
          </article>
          <article class="review-card">
            <h3>Cena i porcija</h3>
            <p>Proverite na Google mapama kako posetioci ocenjuju odnos cene i količine — mi uvek radimo na konstantnom kvalitetu.</p>
          </article>
        </div>
        <p style="margin-top:1.5rem">
          <a class="btn btn--primary" href="${GOOGLE_REVIEWS_URL}" target="_blank" rel="noopener noreferrer">
            Otvori recenzije na Google-u
          </a>
        </p>
      </div>
    </section>

    <section class="section" id="galerija">
      <div class="section__inner">
        <p class="section__eyebrow">Galerija</p>
        <h2>Užitak za oči</h2>
        <p class="section__intro">
          Fotografije ispod učitavaju se iz foldera <code>public/images/</code> kada dodate svoje fajlove
          (<span lang="en">gallery-01.jpg</span> … <span lang="en">gallery-06.jpg</span>).
        </p>
        <div class="gallery-grid" id="gallery-root"></div>
      </div>
    </section>

    <section class="section" style="background:#fff">
      <div class="section__inner">
        <p class="section__eyebrow">Zašto Express</p>
        <h2>Ono što nas izdvaja</h2>
        <p class="section__intro">
          Kombinujemo tradicionalnu domaću kuhinju sa dinamikom modernog dana u Jagodini.
        </p>
        <div class="features-grid">
          <div class="feature">
            <div class="feature__icon" data-feature-bg="/images/feature-kuhinja.jpg" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 10h16v2H4v-2zm0-4h10v2H4V6zm0 8h12v2H4v-2z" fill="#8B2942"/>
              </svg>
            </div>
            <h3>Domaća kuhinja</h3>
            <p>Kuvana jela i specijaliteti sa fokusom na ukus i raznovrsnost ponude.</p>
          </div>
          <div class="feature">
            <div class="feature__icon" data-feature-bg="/images/feature-dostava.jpg" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 18h14v2H5v-2zm11.5-9.5 2 2-4.5 4.5H10v-3L16.5 8.5z" fill="#8B2942"/>
              </svg>
            </div>
            <h3>Dostava</h3>
            <p>Kućna dostava svakog dana od 8 do 20 časova, u što kraćem roku do kancelarije ili stana.</p>
          </div>
          <div class="feature">
            <div class="feature__icon" data-feature-bg="/images/feature-porodica.jpg" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-7 8v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1H5z" fill="#8B2942"/>
              </svg>
            </div>
            <h3>Za sve generacije</h3>
            <p>Prijatna atmosfera za porodicu, poslovne ručkove i brzo zasitanje gladi.</p>
          </div>
          <div class="feature">
            <div class="feature__icon" data-feature-bg="/images/feature-brzina.jpg" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M13 3v9h8v2h-8v9h-2v-9H3v-2h8V3h2z" fill="#8B2942"/>
              </svg>
            </div>
            <h3>Brza priprema</h3>
            <p>Kompletan obrok za nekoliko minuta — idealno kada vam je vreme najdragocenije.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section location" id="lokacija">
      <div class="section__inner">
        <p class="section__eyebrow">Lokacija</p>
        <h2>Dođite do nas</h2>
        <div class="location__grid">
          <div class="location-card" id="kontakt">
            <h3>Express restoran</h3>
            <p>
              Maksima Gorkog 2<br />
              35000 Jagodina, Srbija
            </p>
            <p>
              <a href="tel:+38135250250">Telefon: 035 / 250-250</a><br />
              <a href="mailto:expressrestoran@gmail.com">expressrestoran@gmail.com</a>
            </p>
            <p style="color:var(--muted);font-size:0.95rem;margin-bottom:0">
              Nalazimo se preko puta Radničkog univerziteta, kod parkinga (pored Borova).
            </p>
            <hr style="border:0;border-top:1px solid rgba(42,33,30,0.1);margin:1.25rem 0" />
            <h3 style="font-family:var(--font-display);font-size:1.35rem;margin:0 0 0.5rem">Radno vreme</h3>
            <p style="color:var(--muted);font-size:0.95rem;margin-top:0">
              Tačno radno vreme salona potvrdite telefonom. Dostava hrane je najavljena za
              <strong>8–20 h</strong> svakog dana (prema dostupnim informacijama).
            </p>
            <ul class="hours-list" aria-label="Orientaciono radno vreme">
              <li><span>Ponedeljak – petak</span><span>Proverite pozivom</span></li>
              <li><span>Subota – nedelja</span><span>Proverite pozivom</span></li>
            </ul>
          </div>
          <div>
            <iframe
              class="map-embed"
              title="Mapa – Express restoran Jagodina"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="${MAP_EMBED}"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="site-footer__inner">
      <div>
        <strong>Express restoran</strong><br />
        Jagodina · Maksima Gorkog 2
      </div>
      <div>
        © <span id="year"></span> Express restoran. Sva prava zadržana.
      </div>
    </div>
  </footer>
`;

async function init() {
  mount(pageHtml);

  document.getElementById("year").textContent = String(new Date().getFullYear());

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  navToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const heroSlides = document.getElementById("hero-slides");
  const heroDots = document.getElementById("hero-dots");
  const bgs = await resolveHeroBackgrounds();

  if (bgs.length === 0) {
    const fb = document.createElement("div");
    fb.className = "hero__slide hero__slide--fallback is-active";
    heroSlides.appendChild(fb);
  } else {
    bgs.forEach((src, i) => {
      const el = document.createElement("div");
      el.className = "hero__slide" + (i === 0 ? " is-active" : "");
      el.style.backgroundImage = `url('${src}')`;
      heroSlides.appendChild(el);
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "hero__dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", `Slika ${i + 1}`);
      dot.addEventListener("click", () => setSlide(i));
      heroDots.appendChild(dot);
    });
  }

  let idx = 0;
  const slides = () => [...heroSlides.querySelectorAll(".hero__slide")];
  const dots = () => [...heroDots.querySelectorAll(".hero__dot")];

  function setSlide(i) {
    const s = slides();
    const d = dots();
    if (!s.length) return;
    idx = (i + s.length) % s.length;
    s.forEach((el, j) => el.classList.toggle("is-active", j === idx));
    d.forEach((el, j) => el.classList.toggle("is-active", j === idx));
  }

  if (bgs.length > 1) {
    setInterval(() => setSlide(idx + 1), 6500);
  }

  const cta = document.getElementById("cta-bg");
  const bannerOk = await preloadImage("/images/banner-kuhinja.jpg");
  if (bannerOk) {
    cta.classList.remove("cta-banner__bg--fallback");
    cta.style.backgroundImage = `url('${bannerOk}')`;
  }

  const galleryRoot = document.getElementById("gallery-root");
  for (let i = 1; i <= 6; i += 1) {
    const src = await gallerySrc(i);
    const fig = document.createElement("figure");
    if (src) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Galerija Express restorana, fotografija ${i}`;
      img.loading = "lazy";
      fig.appendChild(img);
    } else {
      fig.style.display = "flex";
      fig.style.alignItems = "center";
      fig.style.justifyContent = "center";
      fig.style.padding = "1rem";
      fig.style.color = "var(--muted)";
      fig.style.fontSize = "0.85rem";
      fig.textContent = `Dodajte gallery-${String(i).padStart(2, "0")}.jpg`;
    }
    galleryRoot.appendChild(fig);
  }

  document.querySelectorAll("[data-feature-bg]").forEach(async (el) => {
    const src = el.getAttribute("data-feature-bg");
    const ok = src ? await preloadImage(src) : null;
    if (ok) {
      el.innerHTML = "";
      const img = document.createElement("img");
      img.src = ok;
      img.alt = "";
      el.appendChild(img);
    }
  });
}

init();
