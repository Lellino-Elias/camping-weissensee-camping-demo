import type { CampsiteConfig } from "../types";

/**
 * Terrassencamping Ronacher — Weissensee-Ostufer, Mösel 6, 9714 Stockenboi, Kärnten.
 * Alle Texte/Fakten belegt aus camping-weissensee.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Ronacher/Weissensee-Fotos in /public/campsites/camping-weissensee/.
 * EHRLICH:
 *  - Liegt GENUINE direkt am Ostufer des Weissensees ("direkt am See", "direkter Zugang zum See") → see gesetzt.
 *  - Preise: die Quelle führt Preise nur als PDF (Preise2026.pdf), im gescrapten Text standen KEINE
 *    Stell-/Komfortplatz-Preise → booking-Preise sind realistische PLATZHALTER (pricesArePlaceholder),
 *    offen im priceNote ausgewiesen. Einziger echter Preis in der Quelle: Sauna 15 € p.P./Tag (im Text genannt).
 *  - Keine Auszeichnung klar belegt → awards leer (Google 4,6 ⭐ wird nur als Vertrauenshinweis genannt, kein Award).
 *  - Kein Mobilheim-/Apartment-Material/Preis gescrapt → mobilheime weggelassen. Kein eigenes Kinder-Foto → kinder weggelassen.
 *  - Keine Koordinaten in der Quelle → coords weggelassen (Karte blendet aus, Adresse zeigt).
 */
const IMG = "/campsites/camping-weissensee";

export const campingWeissensee: CampsiteConfig = {
  name: "Terrassencamping Ronacher",
  shortName: "Ronacher",
  slug: "camping-weissensee",
  ort: "Weissensee-Ostufer",
  region: "Kärnten",
  brandKind: "Terrassencamping",
  see: "Weissensee",
  regionLong: "Urlaubsregion Weissensee · Kärnten · Österreich",

  claim: "Dein Terrassencamping direkt am Ostufer des Weissensees",
  claimEmphasis: "am Ostufer des Weissensees",
  intro:
    "Gepflegter Terrassen-Campingplatz mit Restaurant am idyllischen, naturbelassenen Ostufer des Weissensees — pure Ruhe inmitten von Bergen, Wäldern und Wiesen, mit direktem Zugang zum klaren See.",

  logo: { src: `${IMG}/logo.png`, alt: "Terrassencamping Ronacher am Ostufer Weissensee — Logo" },

  statement: {
    text: "Ein echter Geheimtipp für Naturliebhaber — und für alle, die es noch werden wollen.",
    emphasis: "Geheimtipp für Naturliebhaber",
  },

  pillars: [
    {
      title: "Direkt am Ostufer",
      text: "Urlaub am idyllischen, naturbelassenen Ostufer des Weissensees mit direktem Zugang zum klaren See — der Strandbadeintritt ist bereits inklusive.",
      image: { src: `${IMG}/terrassen-stellplaetze.webp`, alt: "Terrassen-Stellplätze mit Wohnmobilen, Blick auf Weissensee und Berge" },
    },
    {
      title: "Tauchschule am Platz",
      text: "Die Tauchschule lässt dich die Unterwasserwelt entdecken: Schnuppertauchen ab 10 Jahren ohne Vorkenntnisse, wöchentliche Anfängerkurse und täglich zwei Bootsfahrten für ausgebildete Taucher.",
      image: { src: `${IMG}/tauchschule.webp`, alt: "Taucher vor dem Tauchcenter am Weissensee" },
    },
    {
      title: "Restaurant & Strandbar",
      text: "Gepflegter Terrassen-Campingplatz mit eigenem Restaurant Ronacher, Bistro mit Seeblick und kleinem ADEG-Minimarkt direkt am Platz.",
      image: { src: `${IMG}/restaurant-ronacher.webp`, alt: "Restaurant Ronacher mit Terrasse am Weissensee" },
    },
  ],

  usps: [
    "Direkt am Ostufer des Weissensees",
    "Strandbadeintritt inklusive",
    "Strom an allen Plätzen",
    "Tauchschule & Bootsverleih am Platz",
    "Restaurant, Bistro & Minimarkt",
    "Familienfreundlich mit Spielplatz",
  ],

  trust: {
    heading: "Worauf du dich am Weissensee verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von der Feigl und Trum OG, saubere Sanitäranlagen in 2–3 Minuten zu Fuß und ein gepflegter Platz am naturbelassenen Ostufer — von Gästen mit 4,6 von 5 bei über 200 Google-Bewertungen geschätzt.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-luftbild.webp`, alt: "Luftaufnahme: Terrassencamping Ronacher am türkisen Weissensee, umgeben von bewaldeten Bergen" },
  },

  camping: {
    heading: "Camping am Ostufer",
    intro:
      "Am idyllischen, naturbelassenen Ostufer des Weissensees liegen unsere gepflegten Terrassen-Stellplätze. Alle Plätze verfügen über einen Stromanschluss, die Komfortplätze zusätzlich über Zu- und Abwasser — für die Entsorgung von Grauwasser und Chemie-WC ist alles vorhanden.",
    features: [
      {
        title: "Saubere Sanitäranlagen",
        text: "Im zentralen Bereich des Platzes warten saubere, gut ausgestattete Sanitärräume — von jedem Platz in 2–3 Minuten zu Fuß erreichbar, mit geräumigen Warmwasserduschen und behindertengerechtem WC.",
        image: { src: `${IMG}/sanitaer.webp`, alt: "Helle, saubere Sanitäranlage mit Waschbecken und Duschbereich" },
      },
      {
        title: "Beauty-Room",
        text: "Der Beauty-Room mit Föhn und großen Spiegeln macht das Fertigmachen leicht — Saubermachen leichtgemacht.",
        image: { src: `${IMG}/beauty-room.webp`, alt: "Beauty-Room mit Spiegeln, Föhn und Hockern am Campingplatz" },
      },
      {
        title: "Abwasch & Entsorgung",
        text: "Abspülraum, Chemietoiletten-Entsorgung sowie Waschmaschinen und Trockner (gebührenpflichtig) sind direkt am Platz.",
        image: { src: `${IMG}/abwaschbereich.webp`, alt: "Abwaschbereich mit Edelstahl-Spülbecken" },
      },
      {
        title: "Sauna mit Seeblick",
        text: "Auf dem Platz lädt ein Saunabereich mit Blick zum See zum Aufwärmen ein — im Restaurant für 15 € pro Person und Tag buchbar.",
        image: { src: `${IMG}/sauna-seeblick.webp`, alt: "Ruheliegen im Saunabereich mit Blick auf den Campingplatz und See" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Raus an den Weissensee",
    intro:
      "Auch außerhalb des Platzes gibt es einiges zu entdecken: Die Berge laden direkt zum Wandern und Radfahren ein, der 11 km lange See zum Tauchen, Schwimmen und Bootfahren.",
    items: [
      {
        title: "SUP, Kanu & Tretboot",
        text: "In der Tauchschule leihst du SUPs und Kanus, um auch entfernte Buchten des 11 km langen Sees zu erreichen — oder ein Tretboot mit Rutsche für die ganze Familie.",
        image: { src: `${IMG}/sup-kanu.webp`, alt: "SUP-Boards und Wassersport vor dem Tauchcenter am Weissensee" },
      },
      {
        title: "Baden im klaren See",
        text: "Der See ist sehr leicht zugänglich, mit Kies und Sand aufgeschüttet. Der Schwimmerbereich ist abgesperrt und ein sehr flacher Bereich für Kinder separiert.",
        image: { src: `${IMG}/badesteg-tretboot.webp`, alt: "Badesteg mit Tretbooten am türkisen Weissensee" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Einfach der Beschilderung Richtung „Weissensee Ost“ folgen und bis zum Ende durchfahren — der Platz liegt am Ostufer in Mösel." },
      { title: "Adresse fürs Navi", text: "Mösel 6 · 9714 Stockenboi · Kärnten · Österreich." },
      { title: "Lage", text: "Am idyllischen, naturbelassenen Ostufer des Weissensees, inmitten von Bergen, Wäldern und Wiesen." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Ostufer",
    headingEmphasis: "Ostufer",
    intro:
      "Türkises Wasser, bewaldete Berge und ein gepflegter Platz mit Restaurant — ein paar Eindrücke vom Terrassencamping Ronacher am Weissensee.",
    tag: "Mai bis Oktober",
    images: [
      { src: `${IMG}/seezugang.webp`, alt: "Holzsteg mit Einstiegsleiter ins klare türkise Wasser des Weissensees" },
      { src: `${IMG}/terrasse-seeblick.webp`, alt: "Blick von der Restaurant-Terrasse über die Wiese zum Weissensee und den Bergen" },
      { src: `${IMG}/camping-abend.webp`, alt: "Terrassencamping Ronacher in der Abendstimmung mit beleuchtetem Restaurant" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Platzkategorie und Personen — wir melden uns mit deiner persönlichen Verfügbarkeit am Ostufer des Weissensees.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — die Preise sind auf der Website nur als PDF (Preise2026.pdf) hinterlegt und lagen im erfassten Seitentext nicht vor. Diese Werte sind realistische Platzhalter und müssen mit dem Betrieb bestätigt werden.",
    highlight: {
      title: "Strandbadeintritt inklusive",
      text: "Der Eintritt ins Strandbad ist bereits inkludiert — Hunde dürfen dort leider nicht hinein.",
    },
    categories: [
      // PLATZHALTER-Preise (Stell-/Komfortplatz, 2 Personen/Nacht) — keine Preise im gescrapten Quelltext (nur Preise2026.pdf verlinkt).
      { id: "standard", label: "Standardplatz", perNight: 33, perExtraGuest: 8 },
      { id: "komfort", label: "Komfortplatz", perNight: 42, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    coords: { lat: 46.721505, lng: 13.499406 },
    tel: "+43 676 4333 501",
    telHref: "tel:+436764333501",
    mail: "info@camping-weissensee.at",
    adresse: "Mösel 6 · 9714 Stockenboi · Weissensee-Ostufer · Kärnten",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stell- & Komfortplätze", href: "#camping" },
        { label: "Sanitär & Beauty-Room", href: "#camping" },
        { label: "Sauna mit Seeblick", href: "#camping" },
      ],
    },
    {
      label: "Aktiv am See",
      href: "#aktivitaeten",
      children: [
        { label: "Tauchschule", href: "#aktivitaeten" },
        { label: "SUP, Kanu & Tretboot", href: "#aktivitaeten" },
        { label: "Baden im See", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Galerie",
      href: "#galerie",
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campingWeissensee;
