# Buduje style/styles.js z plików .md w style/md.
# Kolekcję wyznacza stylownik podany w linii „Podgląd na żywo”,
# tokeny pochodzą z sekcji „Zmienne CSS — gotowe do wklejenia”.
# Uruchom z katalogu głównego strony: python3 style/generuj.py
import re, json, os

src, out = "style/md", "style/styles.js"
cols = [("stylownik.html", "Podstawowe"), ("stylownik-pro.html", "Pro")]
# charakter powierzchni — nie da się go wiarygodnie wyczytać z tokenów
MATERIAL = {
    "frosted-glass": "glass", "deep-glass": "glass", "neo-brutalizm": "brutal", "soft-ui": "soft",
    "clay-pastel": "soft", "neon-grid": "neon", "terminal": "neon", "editorial": "paper",
    "porcelain": "paper", "stone": "paper", "mono": "outline", "swiss-grid": "outline",
}
SHARED = ("--font-", "--radius", "--border-w", "--heading-", "--btn-")


def block(text, selector):
    i = text.find(selector)
    if i < 0:
        return {}
    body = text[text.index("{", i) + 1:]
    depth, end = 1, 0
    for end, ch in enumerate(body):
        depth += ch == "{"
        depth -= ch == "}"
        if depth == 0:
            break
    return dict(re.findall(r"(--[a-z0-9-]+):\s*([^;]+);", body[:end]))


items = []
for page, label in cols:
    for f in sorted(os.listdir(src)):
        if not re.match(r"\d+-.*\.md$", f):
            continue
        t = open(os.path.join(src, f), encoding="utf-8").read()
        if "`" + page + "#" not in t:
            continue
        css = t[t.index("## Zmienne CSS"):]
        light, dark = block(css, ":root {"), block(css, ':root[data-theme="dark"] {')
        shared = {k: v for k, v in light.items() if k.startswith(SHARED)}
        light = {k: v for k, v in light.items() if k not in shared}
        dark = {k: v for k, v in dark.items() if not k.startswith(SHARED)}
        slug = re.sub(r"^\d+-|\.md$", "", f)
        use = re.search(r"## Kiedy używać\s+(.+?)\n\n", t, re.S)
        items.append({
            "id": slug,
            "name": re.search(r"^# \d+ · (.+)$", t, re.M).group(1).strip(),
            "tagline": re.search(r"^> (.+)$", t, re.M).group(1).strip(),
            "use": use.group(1).strip() if use else "",
            "collection": label,
            "material": MATERIAL.get(slug, "flat"),
            "stylownik": "style/" + page + "#" + re.search(r"#([a-z0-9]+)-light", t).group(1),
            "spec": "style/md/" + f,
            "shared": shared, "light": light, "dark": dark,
        })

js = ("// Wygenerowane z plików style/md/*.md przez style/generuj.py — nie edytuj ręcznie.\n"
      "window.STYLES = " + json.dumps(items, ensure_ascii=False, indent=1) + ";\n")
open(out, "w", encoding="utf-8").write(js)
print(len(items), "stylów")
