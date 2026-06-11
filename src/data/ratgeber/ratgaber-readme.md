# Ratgeber — Übersicht & SEO-Referenz

> Pflege-Dokumentation: Jeder veröffentlichte Ratgeber-Artikel mit URL, Inhaltsschwerpunkten und Ziel-Keywords.  
> Bei neuen Artikeln: Eintrag hier ergänzen + `registry.ts` aktualisieren.

**Stand:** Implementierung im Repo — 8 veröffentlichte Artikel

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
