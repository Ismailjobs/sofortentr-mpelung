# -*- coding: utf-8 -*-
import re
from collections import Counter
from pathlib import Path

root = Path("src/components/ratgeber/articles")
files = [
    "entruempelung-1010-wien.tsx",
    "entruempelung-leopoldstadt-wien-1020.tsx",
    "entruempelung-landstrasse-wien-1030.tsx",
    "entruempelung-wieden-wien-1040.tsx",
    "entruempelung-margareten-wien-1050.tsx",
    "entruempelung-mariahilf-wien-1060.tsx",
    "entruempelung-neubau-wien-1070.tsx",
    "entruempelung-josefstadt-wien-1080.tsx",
    "entruempelung-alsergrund-wien-1090.tsx",
    "entruempelung-favoriten-wien-1100.tsx",
    "entruempelung-simmering-wien-1110.tsx",
    "entruempelung-meidling-wien-1120.tsx",
    "entruempelung-hietzing-wien-1130.tsx",
    "entruempelung-penzing-wien-1140.tsx",
    "entruempelung-rudolfsheim-fuenfhaus-wien-1150.tsx",
    "entruempelung-ottakring-wien-1160.tsx",
    "entruempelung-hernals-wien-1170.tsx",
    "entruempelung-waehring-wien-1180.tsx",
    "entruempelung-doebling-wien-1190.tsx",
    "entruempelung-brigittenau-wien-1200.tsx",
    "entruempelung-floridsdorf-wien-1210.tsx",
    "entruempelung-donaustadt-wien-1220.tsx",
    "entruempelung-liesing-wien-1230.tsx",
]

for name in files:
    t = (root / name).read_text(encoding="utf-8")
    # visible-ish text from JSX string children
    body = re.sub(r"<[^>]+>", " ", t)
    body = re.sub(r"\{[^}]*\}", " ", body)
    body = re.sub(r"\s+", " ", body)
    words = re.findall(r"[A-Za-zÄÖÜäöüß0-9]+", body)
    sents = [re.sub(r"\s+", " ", s).strip() for s in re.split(r"[.!?]\s+", body) if len(s.split()) >= 10]
    dups = [(n, s[:100]) for s, n in Counter(sents).items() if n >= 2]
    motif = []
    for phrase in [
        "belohnt Planung",
        "Nähe zu Liesing",
        "Was den Aufwand",
        "nicht die PLZ allein",
        "Fixpreis nach Besichtigung",
    ]:
        c = body.count(phrase)
        if c >= 2:
            motif.append(f"{phrase}={c}")
    print(f"{name}: words~{len(words)} dups={len(dups)} motifs[{', '.join(motif)}]")
    for n, s in dups[:2]:
        print(f"  x{n}: {s}...")
