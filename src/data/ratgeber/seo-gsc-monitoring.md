# GSC-Monitoring: Gemeindebau-Duplikat-Cluster

**Zeitraum:** 4–8 Wochen nach Phase-1-Bereinigung (thematische Abgrenzung)  
**Ziel:** Entscheiden, ob Phase 2 (301-Merge) nötig ist — **nicht** vorzeitig umleiten.

## Zu überwachende URLs

| Rolle | URL |
|-------|-----|
| A — Rückbau/Logistik | `/ratgeber/entruempelung-gemeindebau-wiener-wohnen` |
| B — Kaution/Termin | `/ratgeber/gemeindebau-wiener-wohnen-wohnungsuebergabe` |
| C — Technische Abnahme | `/ratgeber/stadt-wien-gemeindewohnung-rueckgabevorgaben` |

## Monatliche Checkliste (Google Search Console)

- [ ] **Abdeckung → Seiten:** Alle 3 URLs indexiert? Fehler oder „Ausgeschlossen“?
- [ ] **Abdeckung → Duplikate:** „Duplicate without user-selected canonical“ für eine der drei URLs?
- [ ] **Leistung → Suchanfrage** filtern nach:
  - `Wiener Wohnen Übergabe`
  - `Gemeindebau entrümpeln`
  - `Gemeindewohnung Rückgabe`
- [ ] **Cannibalization:** Ranken 2+ URLs für dieselbe Query auf Position 1–20?

## Entscheidungskriterium Phase 2 (301)

**301 aktivieren nur wenn mindestens eines zutrifft:**

1. GSC meldet Duplicate-Canonical-Probleme zwischen den drei URLs
2. Dieselbe Query wird dauerhaft von 2+ URLs bedient (Cannibalization)
3. Eine URL hat &lt; 5 Impressionen/Monat, während eine andere dieselbe Query dominiert

## Bei Phase-2-Freigabe

1. Unique Content aus B + C in Artikel A mergen (H1/Slug von A unverändert)
2. Interne Links auf A umstellen
3. `redirects()` in `next.config.ts` aktivieren (siehe `redirects.phase2.ts.example`)
4. B + C aus `registry.ts` entfernen
5. GSC: Indexierung der Ziel-URL beantragen (kein „URL entfernen“ bei 301 nötig)

## Nicht tun

- Keine `rel=canonical` zwischen den drei URLs vor GSC-Bestätigung
- Keine H1- oder Slug-Änderungen ohne dokumentierten Grund
- Keine 301 ohne vorherigen Content-Merge
