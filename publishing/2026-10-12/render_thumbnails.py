#!/usr/bin/env python3
"""Render the October 12 article thumbnails in the site's established raster format."""

import hashlib
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = Path(__file__).with_name("manifest.json")
FONT = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
PALETTES = [
    ("#071C33", "#22D3A7", "#F7FBFF"), ("#102747", "#F59E42", "#FFF9EE"),
    ("#14213D", "#5CC8FF", "#F8FBFF"), ("#172A46", "#FF6B6B", "#FFF8F5"),
    ("#12372A", "#F4C95D", "#F8FFF9"), ("#2B193D", "#C4F06A", "#FCFFF6"),
    ("#143642", "#F7A072", "#FFF9F4"), ("#1E2D4F", "#58E6D9", "#F4FFFF"),
    ("#33211D", "#FFB703", "#FFF9EC"), ("#182825", "#98E2C6", "#F6FFFC"),
    ("#202A44", "#E9C46A", "#FFFCF2"), ("#25316D", "#7CF3C7", "#F5FFFC"),
    ("#151E3F", "#F08A5D", "#FFF7F2"), ("#243B53", "#63B3ED", "#F4FAFF"),
    ("#263238", "#A7F3D0", "#F5FFFB"), ("#2D1B36", "#F9A8D4", "#FFF7FC"),
    ("#0F2C3D", "#FCD34D", "#FFFDF3"),
]


def font(size, regular=False):
    return ImageFont.truetype(REGULAR if regular else FONT, size)


def wrap(draw, text, fnt, width):
    words, lines, current = text.split(), [], ""
    for word in words:
        trial = f"{current} {word}".strip()
        if draw.textbbox((0, 0), trial, font=fnt)[2] <= width:
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def render(item, kind, index):
    w, h = (1536, 1024) if kind == "blog" else (1200, 630)
    bg, accent, ink = PALETTES[index]
    image = Image.new("RGB", (w, h), bg)
    draw = ImageDraw.Draw(image)
    pad = int(w * .07)
    text_x = pad + max(18, w // 60)

    # A unique evidence-flow diagram gives each batch asset a recognizable motif.
    seed = hashlib.sha256(item["slug"].encode()).digest()
    draw.rounded_rectangle((pad, pad, w - pad, h - pad), radius=32, outline=accent, width=4)
    for node in range(5):
        x = int(w * (.58 + (node % 3) * .105))
        y = int(h * (.24 + (node // 3) * .30 + (seed[node] % 30) / 300))
        radius = int(w * (.026 + (seed[node + 5] % 10) / 1000))
        if node:
            previous = int(w * (.58 + ((node - 1) % 3) * .105)), int(h * (.24 + ((node - 1) // 3) * .30 + (seed[node - 1] % 30) / 300))
            draw.line((previous[0], previous[1], x, y), fill=accent, width=max(4, w // 220))
        draw.ellipse((x-radius, y-radius, x+radius, y+radius), fill=accent, outline=ink, width=3)
        draw.text((x, y), str(node + 1), anchor="mm", font=font(max(18, w // 48)), fill=bg)

    label = "OPERATIONS FIELD GUIDE" if kind == "blog" else "OPERATIONS RESEARCH"
    draw.text((text_x, int(h * .14)), label, font=font(max(20, w // 52)), fill=accent)
    title_font = font(58 if kind == "blog" else 44)
    lines = wrap(draw, item["title"], title_font, int(w * .47))
    line_height = int(title_font.size * 1.16)
    y = int(h * .25)
    for line in lines:
        draw.text((text_x, y), line, font=title_font, fill=ink)
        y += line_height
    draw.text((text_x, h - pad - 55), "OUTSOURCED PHILIPPINES  •  OCTOBER 12, 2026", font=font(max(18, w // 62)), fill=accent)

    output = ROOT / "public" / item["thumbnail"].lstrip("/")
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output, "PNG", optimize=True)


def main():
    manifest = json.loads(MANIFEST.read_text())
    entries = [(item, "blog") for item in manifest["blog"]] + [(item, "research") for item in manifest["research"]]
    for index, (item, kind) in enumerate(entries):
        render(item, kind, index)
    print(f"Rendered {len(entries)} exact-title thumbnails")


if __name__ == "__main__":
    main()
