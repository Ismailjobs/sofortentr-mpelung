# Ratgeber — Übersicht & SEO-Referenz

> Pflege-Dokumentation: Jeder veröffentlichte Ratgeber-Artikel mit URL, Inhaltsschwerpunkten und Ziel-Keywords.  
> Bei neuen Artikeln: Eintrag hier ergänzen + `registry.ts` aktualisieren.

**Stand:** Implementierung im Repo — 28 veröffentlichte Artikel

---

## System (kurz)

| Bereich | Pfad / URL |
|---------|------------|
| Übersicht | `/ratgeber` |
| Artikel | `/ratgeber/{slug}` |
| RSS-Feed | `/ratgeber/feed.xml` |
| Artikel-Dateien | `src/components/ratgeber/articles/{slug}.tsx` |
| Registry | `src/data/ratgeber/registry.ts` |
| SEO-Builder | `src/lib/ratgeber-seo.ts` |
| Aktualisierungsdaten | `src/lib/ratgeber-dates.ts` |
| Vorlage | `src/components/ratgeber/articles/_vorlage-artikel.tsx` |

**Gemeinsame Seiten-Features (alle Artikel):**

- Hero mit Startseiten-Bild (`/hero.webp`)
- Breadcrumbs, Veröffentlichungs-/Aktualisierungsdatum, Lesezeit
- BlogPosting + WebPage + Breadcrumb JSON-LD
- FAQPage JSON-LD (wenn `meta.faq` gesetzt)
- Vollständige Meta-Tags (OG, Twitter, canonical, robots)
- RSS-Eintrag, Sitemap (`priority` 0,78)
- Kontaktformular am Seitenende
- Verwandte Ratgeber-Artikel (falls vorhanden)

### Rollierendes Aktualisierungsdatum (automatisch)

Jeder Artikel zeigt monatlich ein frisches **„Aktualisiert am …“** — ohne manuelles `updatedAt` in den Artikeldateien.

| Mechanismus | Details |
|-------------|---------|
| **Logik** | `getRatgeberEffectiveUpdatedAt()` — fester Tag pro Slug, **nie in der Zukunft** |
| **Vormonat** | Ist der Fixtag im laufenden Monat noch nicht erreicht (z. B. heute 13., Tag 26 → 26. Vormonat), wird der Vormonat genutzt |
| **Tage** | `RATGEBER_ARTICLE_UPDATE_DAYS` in `ratgeber-dates.ts` (1–28, pro Artikel unterschiedlich) |
| **Neuer Artikel** | Slug in `RATGEBER_ARTICLE_UPDATE_DAYS` eintragen oder optional `updateDay` in `meta` |
| **SEO** | Meta `article:modified_time`, JSON-LD `dateModified`, Sitemap `lastmod`, RSS `pubDate` |
| **ISR** | `revalidate: 86400` auf `/ratgeber`, `/ratgeber/[slug]`, `/ratgeber/feed.xml` |

Beispiel am 13. Mai: Artikel mit Tag 4 → 4. Mai; Artikel mit Tag 26 → 26. April (nicht 26. Mai in der Zukunft).

**Badge & Excerpt im Artikeltext (automatisch):**

- `RatgeberFreshnessBadge` statt statischem `RatgeberBadge` mit „Juni 2026“
- `freshnessExcerpt` in `meta` für Hero-Untertitel und Karten
- Varianten: `{ kind: "updated-month" }`, `{ kind: "guide", guideName: "…" }`, `{ kind: "expert" }`

Kein manuelles Datum mehr in Artikeldateien — Monat und Jahr wechseln bei jedem Request/ISR-Zyklus.

---

## Übersichtsseite `/ratgeber`

| Feld | Wert |
|------|------|
| **Zweck** | Hub für alle Ratgeber — interne Verlinkung & thematische Autorität |
| **H1** | Ratgeber |
| **Meta-Titel** | Ratgeber — Tipps zu Entrümpelung & Haushaltsauflösung Wien |
| **Schema** | CollectionPage, Blog, ItemList |

**Ziel-Keywords (Übersicht):**

- Ratgeber Entrümpelung Wien
- Entrümpelung Tipps Wien
- Haushaltsauflösung Ratgeber
- Wohnungsauflösung Ablauf Wien

**Besonderheiten:**

- Keine Kapakbilder auf Artikelkarten — nur Titel + Excerpt
- Liste aller registrierten Artikel aus `RATGEBER_ARTICLES`

---

## Artikel 1 — Was kostet eine Entrümpelung in Wien?

| Feld | Wert |
|------|------|
| **Slug** | `was-kostet-entruempelung-wien` |
| **URL** | `/ratgeber/was-kostet-entruempelung-wien` |
| **Datei** | `src/components/ratgeber/articles/was-kostet-entruempelung-wien.tsx` |
| **H1** | Was kostet eine Entrümpelung in Wien? |
| **SEO-Titel** | Was kostet eine Entrümpelung in Wien? Kosten & Richtwerte 2026 |
| **OG-Titel** | Entrümpelung Wien: Kosten, Richtwerte & Fixpreis-Logik 2026 |
| **Veröffentlicht** | 2024-09-18 |
| **Aktualisiert** | 2026-02-12 |
| **Lesezeit** | ca. 7 Min. |

### Primäres Fokus-Keyword

`Was kostet Entrümpelung Wien`

### Sekundäre Keywords

| Keyword |
|---------|
| Was kostet Entrümpelung Wien |
| Haushaltsauflösung Kosten Wien |
| Wohnungsauflösung Preis |
| Entrümpelung Festpreis Wien |
| Wertausgleich Entrümpelung |
| Entrümpelung Kosten Österreich |
| Wohnungsauflösung Wien Preis |

### Inhalt & Struktur (H2-Abschnitte)

1. **Die 6 entscheidenden Preisfaktoren bei einer Wohnungsauflösung** — Bullet-Liste (Volumen, Etage, Bezirk, Entsorgung, Fristdruck, Wertausgleich)
2. **Kosten-Richtwerte 2026 für Wien** — Preistabelle (Keller bis Einfamilienhaus)
3. **Wertanrechnung als Hebel** — Kostenersparnis durch Verwertung
4. **Angebotsvergleich: Fixpreise vs. Stundentarife** — Vergleichstabelle
5. **Häufige Fehler vermeiden** — Bullet-Liste
6. **Checkliste für Budgetplanung** — interaktive Checkliste (5 Punkte)
7. **Fazit 2026** — Abschluss + interne Links

### Seiten-Elemente

| Element | Vorhanden |
|---------|-----------|
| Lead-Absatz (fett) | ✓ |
| Preistabelle | ✓ (4 Zeilen) |
| Vergleichstabelle | ✓ (4 Kriterien) |
| Warnhinweis-Box | ✓ (Fixpreis nach Besichtigung) |
| Checkliste | ✓ |
| CTA-Box | ✓ → Kontaktformular |
| FAQ-Schema (4 Fragen) | ✓ |

### Interne Verlinkung (Zielseiten)

- `/leistungen/wertausgleich`
- `/leistungen/ankauf`
- `/preise`
- `/leistungen/wohnungsaufloesung`
- `/leistungen/hausentruempelung`
- `/leistungen/kellerentruempelung`
- `/#kontakt-formular`

### FAQ (Rich Results)

1. Was kostet eine Entrümpelung in Wien?
2. Warum unterscheiden sich Entrümpelungs-Angebote so stark?
3. Was ist Entrümpelung mit Wertausgleich?
4. Fixpreis oder Stundensatz — was ist besser?

### Zielgruppe & Suchintention

- **Intent:** Informational / Commercial Investigation
- **Wer sucht:** Eigentümer, Erben, Hausverwaltungen vor Haushaltsauflösung in Wien
- **Ziel:** Vertrauen aufbauen, Kosten transparent machen, Anfrage/Kontakt fördern

---

## Artikel 2 — Entrümpelung in Wien: MA 48 oder Räumungsfirma?

| Feld | Wert |
|------|------|
| **Slug** | `ma-48-vs-entruempelungsfirma-wien` |
| **URL** | `/ratgeber/ma-48-vs-entruempelungsfirma-wien` |
| **Datei** | `src/components/ratgeber/articles/ma-48-vs-entruempelungsfirma-wien.tsx` |
| **H1** | Entrümpelung in Wien: MA 48 oder Räumungsfirma? |
| **SEO-Titel** | Entrümpelung Wien — MA 48 Eigenregie oder Räumungsfirma? Ratgeber 2026 |
| **OG-Titel** | MA 48 oder Räumungsfirma? Entscheidungshilfe für Wien |
| **Veröffentlicht** | 2024-11-05 |
| **Aktualisiert** | 2026-02-18 |
| **Lesezeit** | ca. 8 Min. |

### Primäres Fokus-Keyword

`MA 48 Entrümpelung Wien`

### Sekundäre Keywords

| Keyword |
|---------|
| MA 48 Entrümpelung Wien |
| Räumungsfirma Wien |
| Entrümpelung Wien Eigenregie |
| Wohnungsauflösung Wien |
| MA 48 Sperrmüll Wien |
| Entrümpelung MA 48 oder Firma |
| Verlassenschaft entrümpeln Wien |
| Wertausgleich Entrümpelung Wien |

### Inhalt & Struktur (H2/H3-Abschnitte)

1. **Strategische Bedarfsanalyse** — 5 Kategorien (A–E) als H3:
   - A: Ressourcenoptimierter Eigenaufwand (MA 48)
   - B: Terminkritische Wohnungsauflösung
   - C: Nachlassverfahren / Verlassenschaften
   - D: Sachwerte & Wertausgleich
   - E: Extreme infrastrukturelle Hürden
2. **Operativer Leistungsabgleich** — Vergleichstabelle MA 48 vs. Fachbetrieb (5 Parameter)
3. **Die versteckte Kostenrechnung der Eigenregie** — Bullet-Liste
4. **Das Kombinationsmodell** — Hybrid-Strategie (Phase 1 + 2)
5. **Checkliste vor Projektabschluss** — 5 Punkte
6. **Fazit** — Abschluss + interne Links

### Seiten-Elemente

| Element | Vorhanden |
|---------|-----------|
| Lead-Absatz (fett) | ✓ |
| Kategorien A–E (H3) | ✓ |
| Vergleichstabelle | ✓ (5 Zeilen) |
| Bullet-Listen | ✓ |
| Checkliste | ✓ |
| CTA-Box | ✓ → Kontaktformular |
| FAQ-Schema (4 Fragen) | ✓ |
| Cross-Link zu Artikel 1 | ✓ |

### Interne Verlinkung (Zielseiten)

- `/leistungen/wohnungsaufloesung`
- `/leistungen/verlassenschaft`
- `/leistungen/wertausgleich`
- `/leistungen/haushaltsaufloesung`
- `/leistungen/nachlass`
- `/leistungen/kellerentruempelung`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/#kontakt-formular`

### FAQ (Rich Results)

1. Wann lohnt sich Entrümpelung in Eigenregie über die MA 48?
2. Wann brauche ich eine professionelle Räumungsfirma in Wien?
3. Ist die MA 48 wirklich kostenlos?
4. Was ist das Kombinationsmodell bei einer Entrümpelung?

### Zielgruppe & Suchintention

- **Intent:** Informational / Commercial Investigation
- **Wer sucht:** Eigentümer, Erben, Hausverwaltungen vor Entscheidung MA 48 vs. Firma
- **Ziel:** Entscheidungshilfe, Vertrauen in professionelle Abwicklung, Kontaktanfrage

---

## Artikel 3 — Möbel verkaufen in Wien: Willhaben oder Sofort-Wertanrechnung?

| Feld | Wert |
|------|------|
| **Slug** | `moebel-verkaufen-wien-willhaben-wertanrechnung` |
| **URL** | `/ratgeber/moebel-verkaufen-wien-willhaben-wertanrechnung` |
| **Datei** | `src/components/ratgeber/articles/moebel-verkaufen-wien-willhaben-wertanrechnung.tsx` |
| **H1** | Möbel verkaufen in Wien: Willhaben oder Sofort-Wertanrechnung? |
| **SEO-Titel** | Möbel verkaufen Wien — Willhaben oder Wertanrechnung bei Entrümpelung? |
| **OG-Titel** | Möbel verkaufen in Wien: Willhaben oder Sofort-Wertanrechnung |
| **Veröffentlicht** | 2024-10-22 |
| **Aktualisiert** | 2026-03-01 |
| **Lesezeit** | ca. 7 Min. |

### Primäres Fokus-Keyword

`Möbel verkaufen Wien`

### Sekundäre Keywords

| Keyword |
|---------|
| Möbel verkaufen Wien |
| Willhaben Möbel verkaufen |
| Wertanrechnung Entrümpelung |
| Möbelankauf Wien |
| Haushaltsauflösung Wien Möbel |
| Entrümpelung mit Wertausgleich |
| Möbel privat verkaufen Österreich |

### Inhalt & Struktur (H2/H3)

1. **Marktplatz-Check: Willhaben** — Vorteile / Nachteile
2. **Sofort-Wertanrechnung** — Vorteile / Nachteile
3. **Komfort und Eigenaufwand im Überblick** — Vergleichstabelle (5 Kriterien)
4. **Welche Möbel für Wertanrechnung?** — Bullet-Liste
5. **Kombi-Strategie** — Willhaben + Wertanrechnung
6. **Fazit** + CTA

### Interne Verlinkung

- `/leistungen/wertausgleich`
- `/leistungen/haushaltsaufloesung`
- `/leistungen/ankauf`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/#kontakt-formular`

### FAQ (4 Fragen)

1. Lohnt sich Willhaben in Wien?
2. Was ist Sofort-Wertanrechnung?
3. Kann Entrümpelung kostenlos werden?
4. Kombination Willhaben + Wertanrechnung?

---

## Artikel 4 — Entrümpelung in Wien von der Steuer absetzen

| Feld | Wert |
|------|------|
| **Slug** | `entruempelung-wien-steuer-absetzen` |
| **URL** | `/ratgeber/entruempelung-wien-steuer-absetzen` |
| **Datei** | `src/components/ratgeber/articles/entruempelung-wien-steuer-absetzen.tsx` |
| **H1** | Entrümpelung in Wien von der Steuer absetzen: Leitfaden 2026 |
| **SEO-Titel** | Entrümpelung in Wien von der Steuer absetzen |
| **OG-Titel** | Entrümpelung Wien steuerlich absetzen — Praxis-Leitfaden 2026 |
| **Veröffentlicht** | 2024-07-14 |
| **Aktualisiert** | 2026-03-01 |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Entrümpelung Steuer absetzen Wien`

### Sekundäre Keywords

| Keyword |
|---------|
| Entrümpelung Steuer absetzen Wien |
| Haushaltsauflösung steuerlich absetzen |
| Wohnungsauflösung Steuer Österreich |
| Entrümpelung Rechnung aufteilen |
| Verlassenschaft Steuer Wien |
| Lohnkosten Entrümpelung absetzen |
| Entsorgungskosten Steuer |

### Besonderheiten

- Rozet: „Praxis-Leitfaden 2026“ + Nachweis-Zeile (`RatgeberBadge`)
- Rechtlicher Hinweis (keine Steuerberatung)
- Sicherheits-Matrix-Tabelle (5 Prüfpunkte)
- 4-Schritte-Praxisablauf

### Interne Verlinkung

- `/leistungen/wertausgleich`
- `/leistungen/verlassenschaft`
- `/leistungen/haushaltsaufloesung`
- `/#kontakt-formular`

### FAQ (4 Fragen)

1. Kann ich Entrümpelungskosten absetzen?
2. Warum Lohnkosten und Entsorgung trennen?
3. Was gehört auf die Rechnung?
4. Ersetzt der Ratgeber Steuerberatung?

---

## Artikel 5 — Gratis Räumung in Wien mit Wertanrechnung

| Feld | Wert |
|------|------|
| **Slug** | `gratis-raeumung-wien-wertanrechnung` |
| **URL** | `/ratgeber/gratis-raeumung-wien-wertanrechnung` |
| **Datei** | `src/components/ratgeber/articles/gratis-raeumung-wien-wertanrechnung.tsx` |
| **H1** | Gratis Räumung in Wien mit Wertanrechnung |
| **SEO-Titel** | Gratis Räumung in Wien durch Wertanrechnung: So geht's |
| **OG-Titel** | Gratis Räumung Wien — Wertanrechnung von Möbeln & Antiquitäten |
| **Veröffentlicht** | 2024-06-20 |
| **Aktualisiert** | 2026-03-01 |
| **Lesezeit** | ca. 8 Min. |

### Primäres Fokus-Keyword

`Gratis Räumung Wien`

### Sekundäre Keywords

| Keyword |
|---------|
| Gratis Räumung Wien |
| kostenlose Wohnungsauflösung Wien |
| Wertanrechnung Entrümpelung |
| Entrümpelung mit Wertausgleich |
| Wertausgleich Wien |
| Haushaltsauflösung gratis |
| Antiquitäten Ankauf Wien |
| Null Euro Räumung Wien |

### Inhalt & Struktur

1. **Das Prinzip des fairen Wertausgleichs** — inkl. Praxis-Szenarien Wien
2. **Schritt für Schritt zum Null-Tarif** (4 Schritte)
3. **Welche Objekte hohen Wertausgleich sichern**
4. **Wenn der Wert nicht ausreicht** — Teilanrechnung, Trennung, Ratenzahlung
5. **FAQ** (3 Fragen + Fazit)
6. CTA

### Interne Verlinkung

- `/leistungen/wertausgleich`
- `/leistungen/ankauf`
- `/leistungen/haushaltsaufloesung`
- `/leistungen/wohnungsaufloesung`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/ratgeber/moebel-verkaufen-wien-willhaben-wertanrechnung`
- `/#kontakt-formular`

### FAQ (Schema + im Text)

1. Wann 100 % kostenlos?
2. Einzelankauf ohne Räumung?
3. Wie wird der Wert ermittelt?
4. Wertüberschuss?

---

## Artikel 6 — Wohnungsauflösung nach Todesfall Wien

| Feld | Wert |
|------|------|
| **Slug** | `wohnungsaufloesung-nach-todesfall-wien` |
| **URL** | `/ratgeber/wohnungsaufloesung-nach-todesfall-wien` |
| **Datei** | `src/components/ratgeber/articles/wohnungsaufloesung-nach-todesfall-wien.tsx` |
| **H1** | Wohnungsauflösung nach einem Todesfall in Wien: Praxis-Ratgeber |
| **SEO-Titel** | Wohnungsauflösung nach Todesfall Wien — Leitfaden für Erben 2026 |
| **Veröffentlicht** | 2024-05-08 |
| **Aktualisiert** | 2026-03-01 |
| **Lesezeit** | ca. 10 Min. |

### Primäres Fokus-Keyword

`Wohnungsauflösung nach Todesfall Wien`

### Inhalt

- Rechtliche Ausgangslage (Gerichtskommissär)
- 3-Phasen-Plan
- Inventarprotokoll
- Checkliste A/B/C (11 Punkte)
- Typische Fehler + 3 Fallbeispiele
- Rechtlicher Hinweis + CTA

### Interne Verlinkung

- `/leistungen/verlassenschaft`
- `/leistungen/nachlass`
- `/leistungen/wertausgleich`
- `/#kontakt-formular`

---

## Artikel 7 — Entrümpelung im Gemeindebau / Wiener Wohnen

| Feld | Wert |
|------|------|
| **Slug** | `entruempelung-gemeindebau-wiener-wohnen` |
| **URL** | `/ratgeber/entruempelung-gemeindebau-wiener-wohnen` |
| **Datei** | `src/components/ratgeber/articles/entruempelung-gemeindebau-wiener-wohnen.tsx` |
| **H1** | Entrümpelung im Gemeindebau: Tipps für die Rückgabe an Wiener Wohnen |
| **SEO-Titel** | Entrümpelung im Gemeindebau: Wiener Wohnen Übergabe-Tipps |
| **Veröffentlicht** | 2024-06-12 |
| **Aktualisiert** | 2026-03-01 |
| **Lesezeit** | ca. 8 Min. |

### Primäres Fokus-Keyword

`Entrümpelung Gemeindebau Wien`

### Inhalt

- Rückbau-Vorgaben (Böden, Wände, Einbauten)
- Logistik (Halteverbotszone, Tragewege, Aufzug)
- Eigenregie vs. Fachbetrieb
- Übergabe-Checkliste (6 Punkte)
- Fazit + CTA

### Interne Verlinkung

- `/leistungen/haushaltsaufloesung`
- `/leistungen/wohnungsaufloesung`
- `/leistungen/wertausgleich`
- `/ratgeber/ma-48-vs-entruempelungsfirma-wien`
- `/ratgeber/gratis-raeumung-wien-wertanrechnung`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/#kontakt-formular`

---

## Artikel 8 — Messie-Wohnung räumen Wien

| Feld | Wert |
|------|------|
| **Slug** | `messie-wohnung-raeumen-wien` |
| **URL** | `/ratgeber/messie-wohnung-raeumen-wien` |
| **Datei** | `src/components/ratgeber/articles/messie-wohnung-raeumen-wien.tsx` |
| **H1** | Messie-Wohnung räumen in Wien: Ablauf, Diskretion und Hygiene |
| **SEO-Titel** | Messie-Wohnung räumen in Wien: Ablauf & Diskretion |
| **Veröffentlicht** | 2024-07-18 |
| **Aktualisiert** | 2026-03-01 |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Messie-Wohnung räumen Wien`

### Inhalt

- Diskretion & Scham-Thematik
- Strategischer Ablauf (4 Schritte)
- Gesundheitsrisiken & Arbeitsschutz
- Wiederherstellung (Rückbau, Desinfektion, Ozon)
- Kosten + Fazit + CTA

### Interne Verlinkung

- `/leistungen/messie`
- `/leistungen/haushaltsaufloesung`
- `/leistungen/wertausgleich`
- `/ratgeber/entruempelung-gemeindebau-wiener-wohnen`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/#kontakt-formular`

---

## Artikel 9 — Delogierung & Zwangsräumung Wien

| Feld | Wert |
|------|------|
| **Slug** | `delogierung-zwangsrauemung-wien` |
| **URL** | `/ratgeber/delogierung-zwangsrauemung-wien` |
| **Datei** | `src/components/ratgeber/articles/delogierung-zwangsrauemung-wien.tsx` |
| **H1** | Delogierung & Zwangsräumung in Wien: Schnelle, diskrete & besenreine Räumung für Eigentümer |
| **SEO-Titel** | Delogierung & Zwangsräumung Wien \| Hilfe für Vermieter & Hausverwaltungen |
| **Veröffentlicht** | 2025-02-10 |
| **Aktualisiert** | 2026-06-12 |
| **Lesezeit** | ca. 8 Min. |

### Primäres Fokus-Keyword

`Zwangsräumung Wien`

### Zielgruppe

Vermieter, Eigentümer, Hausverwaltungen (B2B)

### Inhalt

- Leerstand nach Delogierung
- Diskretion im Stiegenhaus
- MA-48-Entsorgung & Wertausgleich
- ÖNorm B 2502 / besenreine Übergabe
- B2B-Partner + CTA

### Interne Verlinkung

- `/leistungen/wohnungsaufloesung`
- `/leistungen/haushaltsaufloesung`
- `/leistungen/wertausgleich`
- `/leistungen/messie-entruempelung`
- `/ratgeber/messie-wohnung-raeumen-wien`
- `/ratgeber/ma-48-vs-entruempelungsfirma-wien`
- `/ratgeber/entruempelung-gemeindebau-wiener-wohnen`
- `/partner`
- `/#kontakt-formular`

---

## Artikel 10 — MA 48 Mistplätze Entsorgungs-Guide Wien

| Feld | Wert |
|------|------|
| **Slug** | `ma-48-mistplaetze-entsorgungs-guide-wien` |
| **URL** | `/ratgeber/ma-48-mistplaetze-entsorgungs-guide-wien` |
| **Datei** | `src/components/ratgeber/articles/ma-48-mistplaetze-entsorgungs-guide-wien.tsx` |
| **H1** | Wiener Mistplätze der MA 48: Der ultimative Entsorgungs-Guide für Eigentümer |
| **SEO-Titel** | MA 48 Mistplätze Wien — Entsorgungs-Guide für Eigentümer 2026 |
| **Veröffentlicht** | 2024-09-14 |
| **Aktualisiert** | 2026-06-12 |
| **Lesezeit** | ca. 10 Min. |

### Primäres Fokus-Keyword

`MA 48 Mistplätze Wien`

### Inhalt

- Taktischer Ablauf (3 Schritte)
- Entsorgungsmatrix (6 Zeilen Tabelle)
- Problemstoff-Risiko
- DIY vs. Vollservice (5 Zeilen Tabelle)
- Beispielkalkulation 3-Zimmer-Wohnung
- Standortbezug Wien
- Checkliste (6 Punkte) + CTA

### Interne Verlinkung

- `/ratgeber/ma-48-vs-entruempelungsfirma-wien`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/leistungen/wertausgleich`
- `/leistungen/kellerentruempelung`
- `/leistungen/dachbodenentruempelung`
- `/leistungen/haushaltsaufloesung`
- `/preise`
- `/#kontakt-formular`

---

## Artikel 11 — Kellerräumung Wien Kosten & Schimmel

| Feld | Wert |
|------|------|
| **Slug** | `kellerraeumung-wien-kosten-schimmel` |
| **URL** | `/ratgeber/kellerraeumung-wien-kosten-schimmel` |
| **Datei** | `src/components/ratgeber/articles/kellerraeumung-wien-kosten-schimmel.tsx` |
| **H1** | Kellerräumung in Wien: Kosten, Feuchtigkeitsrisiken und fachgerechte Entsorgung |
| **SEO-Titel** | Kellerräumung Wien — Kosten, Schimmel & fachgerechte Entsorgung 2026 |
| **Veröffentlicht** | 2024-08-20 |
| **Aktualisiert** | 2026-06-12 |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Kellerräumung Wien`

### Inhalt

- Richtpreise (3 Stufen)
- Versteckte Kostenfaktoren (3 H3)
- Schimmel-Vorgehen (4 Punkte)
- Gefährliche Abfälle (4 Kategorien)
- Wertausgleich
- Checkliste (5 Punkte) + CTA

### Interne Verlinkung

- `/leistungen/kellerentruempelung`
- `/leistungen/wertausgleich`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/ratgeber/ma-48-mistplaetze-entsorgungs-guide-wien`
- `/ratgeber/gratis-raeumung-wien-wertanrechnung`
- `/preise`
- `/#kontakt-formular`

---

## Artikel 12 — Dachbodenräumung Wien MA 48

| Feld | Wert |
|------|------|
| **Slug** | `dachbodenraeumung-wien-ma-48` |
| **URL** | `/ratgeber/dachbodenraeumung-wien-ma-48` |
| **Datei** | `src/components/ratgeber/articles/dachbodenraeumung-wien-ma-48.tsx` |
| **H1** | Dachbodenräumung in Wien: Taktischer Leitfaden für MA 48 & Express-Profis |
| **SEO-Titel** | Dachbodenräumung Wien — MA 48, Kosten & Express-Ratgeber 2026 |
| **Veröffentlicht** | 2024-10-22 |
| **Aktualisierungstag** | 13 (rollierend) |
| **Lesezeit** | ca. 10 Min. |

### Primäres Fokus-Keyword

`Dachbodenräumung Wien`

### Inhalt

- Altbau-Logistik (3 Punkte)
- Vergleichstabelle MA 48 / DIY / Vollservice
- 6-Schritte-Checkliste
- Wertanrechnung
- Richtpreise + Express-Hinweis + CTA

### Interne Verlinkung

- `/leistungen/dachbodenentruempelung`
- `/leistungen/wertausgleich`
- `/leistungen/wohnungsaufloesung`
- `/ratgeber/ma-48-vs-entruempelungsfirma-wien`
- `/ratgeber/ma-48-mistplaetze-entsorgungs-guide-wien`
- `/ratgeber/kellerraeumung-wien-kosten-schimmel`
- `/ratgeber/gratis-raeumung-wien-wertanrechnung`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/preise`
- `/#kontakt-formular`

---

## Artikel 13 — Geschäftslokal räumen Wien (Rückbau)

| Feld | Wert |
|------|------|
| **Slug** | `geschaeftslokal-raeumen-wien-rueckbau` |
| **URL** | `/ratgeber/geschaeftslokal-raeumen-wien-rueckbau` |
| **Datei** | `src/components/ratgeber/articles/geschaeftslokal-raeumen-wien-rueckbau.tsx` |
| **H1** | Geschäftslokal räumen lassen in Wien: Rückbau, rechtssichere Übergabe und Fixpreis-Garantie |
| **SEO-Titel** | Geschäftslokal räumen Wien — Rückbau, Entsorgung & Fixpreis 2026 |
| **Veröffentlicht** | 2026-06-11 |
| **Aktualisierungstag** | 19 (rollierend) |
| **Lesezeit** | ca. 10 Min. |

### Primäres Fokus-Keyword

`Geschäftslokal räumen Wien`

### Inhalt

- Strategische Rückwärts-Kalkulation (4 Punkte)
- Professioneller Rückbau (4 H3: Ladenbau, Außenwerbung, Gastro, Böden)
- Strategischer Tipp (kombinierter Termin)
- Gastro & Retail Besonderheiten (3 Punkte)
- Entsorgungsnachweise & MA 48
- Fixpreis-Parameter (5 Punkte)
- Kombinierte Büro- & Lagerauflösung
- FAQ (4 Fragen) + CTA

### Interne Verlinkung

- `/leistungen/wertausgleich`
- `/leistungen/bueroentruempelung`
- `/leistungen/lagerentruempelung`
- `/ratgeber/ma-48-mistplaetze-entsorgungs-guide-wien`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/ratgeber/entruempelung-wien-steuer-absetzen`
- `/preise`
- `/#kontakt-formular`

### Suchintention

B2B — Geschäftsführer, Vermieter und Hausverwaltungen bei Standortschließung, Mietende oder Insolvenz; Fokus auf Rückbau, rechtssichere Übergabe und Fixpreis.

---

## Artikel 14 — Entrümpelung vor der Sanierung Wien

| Feld | Wert |
|------|------|
| **Slug** | `entruempelung-vor-sanierung-wien` |
| **URL** | `/ratgeber/entruempelung-vor-sanierung-wien` |
| **Datei** | `src/components/ratgeber/articles/entruempelung-vor-sanierung-wien.tsx` |
| **H1** | Entrümpelung vor der Sanierung in Wien: Was muss raus, was darf bleiben? |
| **SEO-Titel** | Entrümpelung vor Sanierung Wien — Demontage, MA 48 & Fixpreis 2026 |
| **Veröffentlicht** | 2026-06-12 |
| **Aktualisierungstag** | 22 (rollierend) |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Entrümpelung vor Sanierung Wien`

### Inhalt

- Handwerker-Vorbereitung (besenrein vor Gewerke)
- Demontage (Küche, Böden, Verkleidungen)
- Sperrmüll vs. Bauschutt (2 H3)
- Denkmalschutz / Altbau (3 Punkte + Tipp-Box)
- Wertanrechnung für Sanierungsbudget
- Fixpreis-Partner + CTA
- FAQ (4 Fragen)

### Interne Verlinkung

- `/leistungen/wohnungsaufloesung`
- `/leistungen/haushaltsaufloesung`
- `/leistungen/wertausgleich`
- `/ratgeber/ma-48-mistplaetze-entsorgungs-guide-wien`
- `/ratgeber/ma-48-vs-entruempelungsfirma-wien`
- `/ratgeber/gratis-raeumung-wien-wertanrechnung`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/preise`
- `/#kontakt-formular`

### Suchintention

Private Bauherren und Investoren vor Kernsanierung — was raus, was bleibt, MA-48-Trennung, Demontage und Fixpreis.

---

## Artikel 15 — 5 fatale Fehler bei der Entrümpelung Wien

| Feld | Wert |
|------|------|
| **Slug** | `entruempelung-wien-5-fehler-vermeiden` |
| **URL** | `/ratgeber/entruempelung-wien-5-fehler-vermeiden` |
| **Datei** | `src/components/ratgeber/articles/entruempelung-wien-5-fehler-vermeiden.tsx` |
| **H1** | Räumung in Wien: 5 fatale Fehler, die Sie bei der Wahl einer Entrümpelungsfirma vermeiden müssen |
| **SEO-Titel** | Entrümpelung Wien — 5 Fehler vermeiden \| Verbraucherschutz 2026 |
| **Veröffentlicht** | 2026-06-13 |
| **Aktualisierungstag** | 25 (rollierend) |
| **Lesezeit** | ca. 10 Min. |

### Primäres Fokus-Keyword

`Entrümpelung Wien Fehler`

### Inhalt

- Einleitung (schwarze Schafe, Dumpingpreise)
- Fehler 1–5 (je H2 + H3 Gefahr/Lösung): Besichtigung, Stundenlohn, Wertanrechnung, MA 48, Haftpflicht
- Fazit + CTA
- FAQ (4 Fragen)

### Interne Verlinkung

- `/leistungen/wohnungsaufloesung`
- `/leistungen/haushaltsaufloesung`
- `/leistungen/wertausgleich`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/ratgeber/gratis-raeumung-wien-wertanrechnung`
- `/ratgeber/ma-48-mistplaetze-entsorgungs-guide-wien`
- `/ratgeber/ma-48-vs-entruempelungsfirma-wien`
- `/preise`
- `/#kontakt-formular`

### Suchintention

Verbraucherschutz — Angst vor Betrug, Nachforderungen und illegaler Entsorgung; Conversion über Transparenz, Fixpreis und Wertanrechnung.

---

## Artikel 16 — Checkliste Wohnungsräumung Wien (7 Schritte)

| Feld | Wert |
|------|------|
| **Slug** | `checkliste-wohnungsraeumung-wien` |
| **URL** | `/ratgeber/checkliste-wohnungsraeumung-wien` |
| **Datei** | `src/components/ratgeber/articles/checkliste-wohnungsraeumung-wien.tsx` |
| **H1** | Die perfekte Checkliste für die Wohnungsräumung: In 7 Schritten zur besenreinen Übergabe |
| **SEO-Titel** | Wohnungsräumung Wien — 7-Schritte-Checkliste zur besenreinen Übergabe 2026 |
| **Veröffentlicht** | 2026-06-14 |
| **Aktualisierungstag** | 27 (rollierend) |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Wohnungsräumung Wien Checkliste`

### Inhalt

- 7 Schritte (H2): Dokumente, Inventar-Audit, Bürokratie, Besichtigung, MA 48, Einsatztag, Endkontrolle
- Checklist-Komponente (Schritt 7)
- Fazit + FAQ (3 Fragen) + CTA

### Interne Verlinkung

- `/leistungen/haushaltsaufloesung`
- `/leistungen/wohnungsaufloesung`
- `/leistungen/wertausgleich`
- `/ratgeber/gratis-raeumung-wien-wertanrechnung`
- `/ratgeber/entruempelung-gemeindebau-wiener-wohnen`
- `/ratgeber/entruempelung-wien-5-fehler-vermeiden`
- `/ratgeber/ma-48-mistplaetze-entsorgungs-guide-wien`
- `/ratgeber/ma-48-vs-entruempelungsfirma-wien`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/#kontakt-formular`

### Suchintention

Umzug, Verlassenschaft, Gemeindebau-Rückgabe — „Wo fange ich an?“; Conversion über strukturierte Checkliste und Fixpreis-Service.

---

## Artikel 17 — Gebrauchte Möbel bewerten Wien

| Feld | Wert |
|------|------|
| **Slug** | `gebrauchte-moebel-bewerten-wien` |
| **URL** | `/ratgeber/gebrauchte-moebel-bewerten-wien` |
| **Datei** | `src/components/ratgeber/articles/gebrauchte-moebel-bewerten-wien.tsx` |
| **H1** | Gebrauchte Möbel bewerten in Wien: Wertvolles Inventar oder reiner Sperrmüll? |
| **SEO-Titel** | Gebrauchte Möbel bewerten Wien — Wertermittlung & Wertanrechnung 2026 |
| **Veröffentlicht** | 2026-06-15 |
| **Aktualisierungstag** | 20 (rollierend) |
| **Lesezeit** | ca. 11 Min. |

### Primäres Fokus-Keyword

`Gebrauchte Möbel bewerten Wien`

### Inhalt

- 5 Kernkriterien (H3)
- 4-Schritte-Praxisablauf (H3)
- 4 Praxis-Beispiele (H3: Mid-Century, Biedermeier, Esstisch, Pressspan)
- Entscheidungsmatrix (Tabelle)
- 4 häufige Fehler
- Lokaler Operationshinweis Wien
- Express-Räumung + CTA
- FAQ (4 Fragen)

### Interne Verlinkung

- `/leistungen/wohnungsaufloesung`
- `/leistungen/wertausgleich`
- `/ratgeber/moebel-verkaufen-wien-willhaben-wertanrechnung`
- `/ratgeber/gratis-raeumung-wien-wertanrechnung`
- `/ratgeber/checkliste-wohnungsraeumung-wien`
- `/ratgeber/ma-48-mistplaetze-entsorgungs-guide-wien`
- `/ratgeber/was-kostet-entruempelung-wien`
- `/#kontakt-formular`

### Suchintention

Haushaltsauflösung — ist das Möbel Schrott oder wertvoll? Conversion über Bewertungs-Know-how und Wertanrechnung. Ergänzt Artikel `moebel-verkaufen-wien-willhaben-wertanrechnung` (Willhaben-Vergleich).

---

## Artikel 18 — Was tun mit alten Schätzen Wien

| Feld | Wert |
|------|------|
| **Slug** | `was-tun-mit-alten-schaetzen-wien` |
| **URL** | `/ratgeber/was-tun-mit-alten-schaetzen-wien` |
| **Datei** | `src/components/ratgeber/articles/was-tun-mit-alten-schaetzen-wien.tsx` |
| **H1** | Was tun mit alten Schätzen? Nachhaltig verkaufen, spenden oder recyceln in Wien |
| **SEO-Titel** | Alte Schätze in Wien — Verkaufen, Spenden oder Recyceln \| Leitfaden 2026 |
| **Veröffentlicht** | 2026-06-16 |
| **Aktualisierungstag** | 23 (rollierend) |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`alte Schätze Wien verwerten`

### Inhalt

- Verkaufen (Wertanrechnung + 3 Eigenregie-Kanäle)
- Spenden (Caritas, 48er-Tandler, Sozialmärkte)
- Recyceln (MA 48, Textilien, Sperrmüllabholung)
- Zeithinweis-Box
- FAQ (4 Fragen) + CTA

### Interne Verlinkung

- `/leistungen/haushaltsaufloesung`
- `/leistungen/wohnungsaufloesung`
- `/leistungen/wertausgleich`
- `/ratgeber/gratis-raeumung-wien-wertanrechnung`
- `/ratgeber/gebrauchte-moebel-bewerten-wien`
- `/ratgeber/moebel-verkaufen-wien-willhaben-wertanrechnung`
- `/ratgeber/ma-48-mistplaetze-entsorgungs-guide-wien`
- `/ratgeber/checkliste-wohnungsraeumung-wien`
- `/#kontakt-formular`

### Suchintention

Nachhaltige Haushaltsauflösung — verkaufen vs. spenden vs. recyceln; Conversion über Wertanrechnung und Express-Service.

---

## Artikel 19 — Richtig ausmisten Wien

| Feld | Wert |
|------|------|
| **Slug** | `richtig-ausmisten-wien` |
| **URL** | `/ratgeber/richtig-ausmisten-wien` |
| **Datei** | `src/components/ratgeber/articles/richtig-ausmisten-wien.tsx` |
| **H1** | Richtig ausmisten in Wien: So schaffen Sie Platz und Ordnung vor der Räumung |
| **SEO-Titel** | Richtig ausmisten Wien — 4-Kisten-Methode & KonMari vor der Räumung 2026 |
| **Veröffentlicht** | 2026-06-14 |
| **Aktualisierungstag** | 28 (rollierend) |
| **Lesezeit** | ca. 8 Min. |

### Primäres Fokus-Keyword

`ausmisten Wien`

### Suchintention

Vor der Räumung strukturiert aussortieren — 4 Kisten, KonMari, Raumplan; Conversion über anschließende Fixpreis-Entrümpelung.

---

## Artikel 20 — Entrümpelungsdienst vs. Entrümpelungsfirma Wien

| Feld | Wert |
|------|------|
| **Slug** | `entruempelungsdienst-vs-entruempelungsfirma-wien` |
| **URL** | `/ratgeber/entruempelungsdienst-vs-entruempelungsfirma-wien` |
| **Datei** | `src/components/ratgeber/articles/entruempelungsdienst-vs-entruempelungsfirma-wien.tsx` |
| **H1** | Entrümpelung in Wien: Entrümpelungsdienst oder professionelle Entrümpelungsfirma? |
| **SEO-Titel** | Entrümpelungsdienst vs. Entrümpelungsfirma Wien — Vergleich & Kriterien 2026 |
| **Veröffentlicht** | 2026-05-28 |
| **Aktualisierungstag** | 15 (rollierend) |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Entrümpelungsfirma Wien`

### Suchintention

Dienst vs. Vollservice verstehen; Conversion über 6 Qualitätskriterien und Fixpreis-Angebot.

---

## Artikel 21 — Praxisauflösung Wien

| Feld | Wert |
|------|------|
| **Slug** | `praxisaufloesung-wien` |
| **URL** | `/ratgeber/praxisaufloesung-wien` |
| **Datei** | `src/components/ratgeber/articles/praxisaufloesung-wien.tsx` |
| **H1** | Praxisauflösung in Wien: Professionelle Checkliste und reibungsloser Ablauf |
| **SEO-Titel** | Praxisauflösung Wien — DSGVO, Rückbau & Fixpreis-Checkliste 2026 |
| **Meta-Description** | ca. 155 Zeichen |
| **Veröffentlicht** | 2026-06-05 |
| **Aktualisierungstag** | 17 (rollierend) |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Praxisauflösung Wien`

### Suchintention

Ärzte/Ordinationen bei Praxisschließung — DSGVO, Medizingeräte, Fixpreis; B2B-Conversion.

---

## Artikel 22 — Zimmerräumung Wien

| Feld | Wert |
|------|------|
| **Slug** | `zimmer-raeumung-wien` |
| **URL** | `/ratgeber/zimmer-raeumung-wien` |
| **Datei** | `src/components/ratgeber/articles/zimmer-raeumung-wien.tsx` |
| **H1** | Zimmer Räumung in Wien: Strukturierter Zeitplan, WG-Übergabe und Kosten |
| **SEO-Titel** | Zimmerräumung Wien — Zeitplan, WG-Übergabe & Kosten 2026 |
| **Meta-Description** | ca. 155 Zeichen |
| **Veröffentlicht** | 2026-05-18 |
| **Aktualisierungstag** | 6 (rollierend) |
| **Lesezeit** | ca. 8 Min. |

### Primäres Fokus-Keyword

`Zimmerräumung Wien`

### Suchintention

WG-Auszug / Studentinnen / Teilräumung — Zeitplan, Kosten, MA 48 vs. Firma; Conversion über Fixpreis.

---

## Artikel 23 — Räumungsexperte Wien (Besichtigung & Fixpreis)

| Feld | Wert |
|------|------|
| **Slug** | `raeumungsexperte-wien-besichtigung` |
| **URL** | `/ratgeber/raeumungsexperte-wien-besichtigung` |
| **Datei** | `src/components/ratgeber/articles/raeumungsexperte-wien-besichtigung.tsx` |
| **H1** | Räumungsexperte in Wien: So läuft die professionelle Besichtigung zum garantierten Fixpreis |
| **SEO-Titel** | Räumungsexperte Wien — Besichtigung & Fixpreis in 6 Schritten 2026 |
| **Meta-Description** | ca. 155 Zeichen |
| **Veröffentlicht** | 2026-06-08 |
| **Aktualisierungstag** | 10 (rollierend) |
| **Lesezeit** | ca. 8 Min. |

### Primäres Fokus-Keyword

`Räumungsexperte Wien`

### Suchintention

Besichtigung/Fixpreis-Transparenz — Vertrauen & Conversion über kostenlose Vor-Ort-Besichtigung.

---

## Artikel 24 — Entrümpelung Korneuburg, Tulln & Schwechat

| Feld | Wert |
|------|------|
| **Slug** | `entruempelung-korneuburg-tulln-schwechat` |
| **URL** | `/ratgeber/entruempelung-korneuburg-tulln-schwechat` |
| **Datei** | `src/components/ratgeber/articles/entruempelung-korneuburg-tulln-schwechat.tsx` |
| **H1** | Entrümpelung in Korneuburg, Tulln & Schwechat: Professionelle Logistik, Fixpreise und Wertanrechnung |
| **SEO-Titel** | Entrümpelung Korneuburg, Tulln & Schwechat — Fixpreis & Logistik 2026 |
| **Meta-Description** | ca. 145 Zeichen |
| **Veröffentlicht** | 2026-05-12 |
| **Aktualisierungstag** | 12 (rollierend) |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Entrümpelung Korneuburg`

### Suchintention

Local SEO Wien-Umland — regionale Logistik, Fixpreis, Wertanrechnung; Conversion NÖ.

---

## Artikel 25 — Entrümpelung Burgenland (Mattersburg, Rust & Oberpullendorf)

| Feld | Wert |
|------|------|
| **Slug** | `entruempelung-burgenland-mattersburg-rust-oberpullendorf` |
| **URL** | `/ratgeber/entruempelung-burgenland-mattersburg-rust-oberpullendorf` |
| **Datei** | `src/components/ratgeber/articles/entruempelung-burgenland-mattersburg-rust-oberpullendorf.tsx` |
| **H1** | Entrümpelung in Burgenland Nord & Mitte: Professionelle Räumung in Mattersburg, Rust & Oberpullendorf |
| **SEO-Titel** | Entrümpelung Burgenland — Mattersburg, Rust & Oberpullendorf 2026 |
| **Meta-Description** | ca. 145 Zeichen |
| **Veröffentlicht** | 2026-06-01 |
| **Aktualisierungstag** | 5 (rollierend) |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Entrümpelung Burgenland`

### Suchintention

Local SEO Burgenland — regionale Logistik, Fixpreis, Wertanrechnung; Conversion Mattersburg/Rust/Oberpullendorf.

---

## Artikel 26 — Entrümpelung österreichweit

| Feld | Wert |
|------|------|
| **Slug** | `entruempelung-oesterreichweit` |
| **URL** | `/ratgeber/entruempelung-oesterreichweit` |
| **Datei** | `src/components/ratgeber/articles/entruempelung-oesterreichweit.tsx` |
| **H1** | Entrümpelung österreichweit: Professionelle Räumung in der Steiermark, Kärnten, Oberösterreich & Salzburg |
| **SEO-Titel** | Entrümpelung österreichweit — Steiermark, Kärnten, OÖ & Salzburg 2026 |
| **Meta-Description** | ca. 145 Zeichen |
| **Veröffentlicht** | 2026-06-04 |
| **Aktualisierungstag** | 8 (rollierend) |
| **Lesezeit** | ca. 10 Min. |

### Primäres Fokus-Keyword

`Entrümpelung österreichweit`

### Suchintention

Bundesländer-Expansion — Fixpreis, Express-Notdienst, regionale Logistik; Conversion außerhalb Wien.

---

## Artikel 27 — Schwerlastentsorgung Wien

| Feld | Wert |
|------|------|
| **Slug** | `schwerlastentsorgung-wien` |
| **URL** | `/ratgeber/schwerlastentsorgung-wien` |
| **Datei** | `src/components/ratgeber/articles/schwerlastentsorgung-wien.tsx` |
| **H1** | Schwerlastentsorgung in Wien: Tresore, Klaviere und Maschinen richtig räumen |
| **SEO-Titel** | Schwerlastentsorgung Wien — Tresore, Klaviere & Maschinen 2026 |
| **Meta-Description** | ca. 145 Zeichen |
| **Veröffentlicht** | 2026-06-10 |
| **Aktualisierungstag** | 2 (rollierend) |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Schwerlastentsorgung Wien`

### Suchintention

Spezial-Entsorgung Tresor/Klavier/Maschine — Demontage, MA-48-Ausschluss, Fixpreis; Conversion.

---

## Artikel 28 — Wohnungsräumung Senioren Wien

| Feld | Wert |
|------|------|
| **Slug** | `wohnungsraeumung-senioren-wien` |
| **URL** | `/ratgeber/wohnungsraeumung-senioren-wien` |
| **Datei** | `src/components/ratgeber/articles/wohnungsraeumung-senioren-wien.tsx` |
| **H1** | Wohnungsräumung für Senioren in Wien: Empathische Planung, Ablauf und Wertanrechnung |
| **SEO-Titel** | Wohnungsräumung Senioren Wien — empathischer Ablauf & Fixpreis 2026 |
| **Meta-Description** | ca. 145 Zeichen |
| **Veröffentlicht** | 2026-06-13 |
| **Aktualisierungstag** | 1 (rollierend) |
| **Lesezeit** | ca. 9 Min. |

### Primäres Fokus-Keyword

`Wohnungsräumung Senioren Wien`

### Besondere Elemente

Checkliste-Tabelle (Aufgabe / Status / Hinweise), Wertanrechnung-Hinweis, 4-Schritte-Plan

### Suchintention

Senioren/Angehörige — empathische Räumung, Wertanrechnung, Pflegezeiten; Conversion.

---

## Neuen Artikel dokumentieren (Checkliste)

1. `src/components/ratgeber/articles/{slug}.tsx` anlegen
2. In `registry.ts` registrieren
3. **Dieses Dokument** um einen Abschnitt „Artikel N — …“ ergänzen:
   - URL, Slug, Datei
   - H1, seoTitle, ogTitle, focusKeyword
   - keywords-Liste
   - H2-Gliederung & besondere Elemente (Tabellen, FAQ, …)
   - Interne Links
   - Suchintention
4. `npm run build` — SSG & Sitemap prüfen

---

*Bei neuen Artikeln: oben „Stand“ und Artikelnummer anpassen.*
