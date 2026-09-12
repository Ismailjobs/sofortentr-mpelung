# Bezirk-Ratgeber Qualitäts-Checklist (intern)

Ziel: **ca. 1.000–1.200 Wörter** (wichtige PLZ wie 1010/1100/1220 gerne länger). Keine Clone-Vorlage.

## Pflicht pro Artikel
- [ ] seoTitle/ogTitle mit PLZ (`Entrümpelung {Bezirk} Wien {PLZ}`)
- [ ] Lead mit lokalem Spannungsbogen (nicht generisch)
- [ ] Unique Motif (Grätzl / Zufahrt / Bebauung) laut Wettbewerbsbericht
- [ ] MA 46 Halteverbot + MA 48 Entsorgung (kurz, praxisnah)
- [ ] Leistungen mit Internal Links (`/leistungen/…`, verwandte Ratgeber)
- [ ] Kosten: Faktoren + Link `/preise` / `was-kostet-entruempelung-wien` — **keine erfundenen €-Tabellen**
- [ ] 4–6 FAQ in `meta.faq` (FAQPage JSON-LD)
- [ ] CTA → `/#kontakt-formular`
- [x] Keine Links auf `/entruempelung-wien-{PLZ}` Landings (nach Migration)
- [ ] Externe Links selten (ca. 1× pro 2–3 Artikeln, nur offizielle Quellen)

## Schema
BlogPosting+Article, FAQPage, BreadcrumbList via `RatgeberArticleJsonLd`.
