import type { CampsiteConfig } from "../types";

/**
 * Terrassencamping Ronacher — Camping am Ostufer des Weissensees (Stockenboi, Kärnten).
 * 100 % aus der eigenen Quelle (raw/digest) abgeleitet. Bilder ausschließlich von diesem Platz.
 * Keine Stellplatzpreise in der Quelle → Richtpreise mit offener Disclosure.
 */
const IMG = "/campsites/camping-weissensee";

const campingWeissensee: CampsiteConfig = {
  name: "Terrassencamping Ronacher",
  shortName: "Ronacher",
  slug: "camping-weissensee",
  ort: "Weissensee-Ostufer",
  region: "Kärnten",
  brandKind: "Camping am Weissensee",
  see: "Weissensee",
  regionLong: "Weissensee · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Naturcamping am Ostufer des Weissensees",
  claimEmphasis: "am Ostufer",
  intro:
    "Am idyllischen, naturbelassenen Ostufer des Weissensees liegt unser gepflegter Terrassen-Campingplatz mit eigenem Restaurant — ein echter Geheimtipp für alle, die Bergluft, klares Wasser und Ruhe suchen.",

  statement: {
    text: "Berge, Wälder, Wiesen und das klare Seewasser — Weissensee pur, direkt vor deinem Vorzelt.",
    emphasis: "Weissensee pur",
  },

  pillars: [
    {
      title: "Direkt am Ostufer",
      text: "Der Platz liegt direkt am naturbelassenen Ostufer des Weissensees — flacher Einstieg, mit Kies und Sand aufgeschüttet und einem abgesperrten Schwimmerbereich.",
      image: { src: `${IMG}/amenity-341d8d3d69.webp`, alt: "Steg am Ostufer des Weissensees mit klarem Wasser und Bergkulisse" },
    },
    {
      title: "Tauchschule & Verleih",
      text: "Eine eigene Tauchschule bietet Schnuppertauchen ab 10 Jahren und wöchentliche Kurse — Kanu, SUP und Tretboote leihst du gleich vor Ort.",
      image: { src: `${IMG}/activity-49f0d85718.webp`, alt: "Tauch- und Wassersportbasis am Campingplatz mit SUP-Boards" },
    },
    {
      title: "Restaurant Ronacher",
      text: "Im Restaurant Ronacher gibt es Pizza und Kärntner Spezialitäten; am Bistro genießt du dein Getränk mit Seeblick in der Abendsonne.",
      image: { src: `${IMG}/gallery-ee6bbb4d55.webp`, alt: "Restaurant Ronacher mit Terrasse über der Campingwiese" },
    },
  ],

  usps: [
    "Direkt am Weissensee",
    "Strandbad inklusive",
    "Eigene Tauchschule",
    "Restaurant am Platz",
    "Komfortplätze mit Strom",
    "Hunde am Platz erlaubt",
  ],

  trust: {
    heading: "Warum du immer wiederkommst",
    headingEmphasis: "wiederkommst",
    intro:
      "Viele Gäste kommen Jahr für Jahr an den Weissensee zurück — für die Ruhe am Ostufer, die gepflegten Anlagen und das freundliche Team. Wer einmal hier war, kennt den Geheimtipp.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/activity-6d7c18d2a1.webp`, alt: "Blick von der Terrasse über die Wiese zum Weissensee mit Bergen" },
  },

  breather: {
    image: { src: `${IMG}/amenity-82827b0ad4.webp`, alt: "Luftaufnahme des Weissensees mit dem Campingplatz am Ostufer im Abendlicht" },
    line: "Am naturbelassenen Ostufer — Weissensee, so weit das Auge reicht.",
  },

  camping: {
    heading: "Camping am Weissensee",
    intro:
      "Terrassenplätze mit Strom, Komfortplätze zusätzlich mit Zu- und Abwasser — dazu gepflegte Sanitäranlagen und kurze Wege zum See.",
    features: [
      {
        title: "Terrassenplätze am See",
        text: "Standardplätze mit Stromanschluss und Komfortplätze mit Zu- und Abwasser — viele Plätze mit Blick über den See, ruhig und naturnah angelegt.",
        image: { src: `${IMG}/platz-seeblick-sonne.webp`, alt: "Sonniger Blick über die Terrassenplätze zum Weissensee mit Bergkulisse" },
      },
      {
        title: "Moderne Sanitäranlagen",
        text: "Saubere WC- und Warmwasser-Duschen, Beauty-Room mit Föhn und Spiegeln sowie ein behindertengerechtes Bad — von jedem Platz in 2–3 Minuten erreichbar.",
        image: { src: `${IMG}/amenity-54dc9f9aff.webp`, alt: "Moderne Sanitäranlage mit Waschbecken und Spiegeln" },
      },
      {
        title: "Abwasch & Entsorgung",
        text: "Abspülraum, Waschmaschinen und Trockner (gebührenpflichtig) sowie die Entsorgung von Grauwasser und Chemie-WC sind direkt am Platz vorhanden.",
        image: { src: `${IMG}/gallery-a1177f04a3.webp`, alt: "Abwaschbereich mit Edelstahlbecken am Campingplatz" },
      },
      {
        title: "Strandbad inklusive",
        text: "Der Strandbadeintritt ist bereits dabei: flacher Einstieg, abgesperrter Schwimmerbereich und ein separater, seichter Bereich für Kinder.",
        image: { src: `${IMG}/gallery-e077d82567.webp`, alt: "Badesteg und Treppe ins klare Wasser des Weissensees" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg zum Weissensee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 (Tauern Autobahn), Abfahrt Spittal/Millstättersee, weiter Richtung Weissensee — dann der Beschilderung „Weissensee Ost“ folgen und bis zum Ende durchfahren.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Spittal-Millstättersee, von dort weiter mit Bus oder Taxi ans Ostufer des Weissensees.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Ostufer",
    headingEmphasis: "Ostufer",
    intro:
      "Baden, Tauchen, Beachvolleyball oder einfach die Bergkulisse genießen — ein paar Eindrücke vom Leben am Platz.",
    tag: "Mai bis Oktober",
    images: [
      { src: `${IMG}/gallery-048033f92f.webp`, alt: "Beachvolleyballplatz am Waldrand des Campingplatzes" },
      { src: `${IMG}/activity-ac2acba109.webp`, alt: "Tauchgruppe vor der Wassersportbasis am Weissensee" },
      { src: `${IMG}/activity-6d439a1c8e.webp`, alt: "Wassersport-Zentrum am Campingplatz mit Bergkulisse" },
      { src: `${IMG}/award-934c8d843d.png`, alt: "Luftblick auf den Campingplatz am Ostufer des Weissensees" },
    ],
  },

  booking: {
    heading: "Bereit für deinen Urlaub am Weissensee?",
    headingEmphasis: "am Weissensee",
    intro:
      "Wähle Zeitraum und Personen — wir melden uns persönlich mit deiner Verfügbarkeit am Ostufer.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Stellplatzpreise angegeben (bitte bestätigen). 2 Personen inkl. Strom, zzgl. Ortstaxe. Saunabereich 15 € p. P./Tag.",
    highlight: { title: "Strandbad inklusive", text: "Der Eintritt ins Strandbad ist beim Stellplatz schon dabei." },
    categories: [
      { id: "standard", label: "Standardplatz", perNight: 32, perExtraGuest: 8 },
      { id: "komfort", label: "Komfortplatz", perNight: 39, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    coords: { lat: 46.704217, lng: 13.419556 },
    tel: "+43 676 4333501",
    telHref: "tel:+436764333501",
    mail: "info@camping-weissensee.at",
    adresse: "Mösel 6 · 9714 Stockenboi · Kärnten",
  },

  languages: ["DE", "EN", "FR", "IT", "NL", "ES"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär", href: "#camping" },
      ],
    },
    { label: "Erleben", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingWeissensee;
