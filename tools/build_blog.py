#!/usr/bin/env python3
"""Build the Blog pages and sitemap.xml for wiseceoacademy.com.

Run from the repo root:  python3 tools/build_blog.py

To add an article:
  1. Save its body HTML (from beehiiv) as blog-src/<slug>.html.
  2. Add an entry to POSTS below (newest first).
  3. Run this script, check the pages, then commit.

The script removes every outside link (site rule: keep visitors here), downloads
images into assets/blog/ so nothing loads from another site, and writes
blog.html, blog-<slug>.html, and sitemap.xml.
"""
import datetime, hashlib, html, json, os, re, sys, urllib.request
from bs4 import BeautifulSoup

SITE = "https://wiseceoacademy.com"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

POSTS = [
  dict(slug="tech-brief", date="2026-11-21", topic="Tech & Business",
       title="Tech & Business Brief: Tech Around the World",
       dek="Where everyday apps really come from, the record Anthropic IPO, Nvidia's quarter, and the visa rules underneath the AI boom."),
  dict(slug="inspiration-edition", date="2026-11-17", topic="Leadership & Civics",
       title="Inspiration Edition: The American Dream Is Still a Thing",
       dek="Paths from modest beginnings to public service, a Nobel Peace Prize story, and neighbors who showed up at the polls."),
  dict(slug="whose-voices-election", date="2026-11-04", topic="Policy & Civics",
       title="Whose Voices Shaped This Election?",
       dek="Historic firsts, what they mean for language access and English learners, and what comes next for immigrant and multilingual families."),
  dict(slug="reading-first-job-skill", date="2026-10-17", topic="Workforce",
       title="Reading Is the First Job Skill: Why Literacy Is Workforce Development",
       dek="Every career pathway starts with reading. Here's how families can build it at home, at any age."),
  dict(slug="taxing-the-unbanked", date="2026-10-16", topic="Policy & Finance",
       title="Taxing the Unbanked: Why Ohio Should Protect Check-Cashing and Payday Borrowers",
       dek="A proposed revenue idea, more than a decade of Ohio reform, and the protections every borrower can use today."),
]

STATIC_PAGES = [  # (path, priority) for the sitemap
  ("", "1.0"), ("fellowship.html", "0.9"), ("tracks.html", "0.9"), ("apply.html", "0.9"),
  ("sponsors.html", "0.8"), ("speakers.html", "0.7"), ("faq.html", "0.7"),
  ("blog.html", "0.7"),
]

def ver():
  with open(os.path.join(ROOT, "index.html")) as f:
    m = re.search(r'site\.css\?v=(\d+)', f.read())
  return m.group(1) if m else "1"

def fetch_image(url, slug, n):
  ext = ".jpg"
  for e in (".png", ".webp", ".jpeg", ".jpg"):
    if e in url.lower().split("?")[0][-6:]: ext = ".jpg" if e == ".jpeg" else e
  name = f"{slug}-{n}-{hashlib.sha1(url.encode()).hexdigest()[:8]}{ext}"
  path = os.path.join(ROOT, "assets", "blog", name)
  if not os.path.exists(path):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r, open(path, "wb") as f:
      f.write(r.read())
  return f"assets/blog/{name}"

def clean(body, slug):
  s = BeautifulSoup(body, "html.parser")
  for a in s.find_all("a"): a.unwrap()            # no outside links
  cover = None
  for n, img in enumerate(s.find_all("img")):
    src = img.get("src", "")
    if src.startswith("http"):
      try: img["src"] = fetch_image(src, slug, n)
      except Exception as e:
        print(f"  ! image failed, removed: {e}", file=sys.stderr)
        (img.find_parent("figure") or img).decompose(); continue
    img["loading"] = "eager" if n == 0 else "lazy"
    img["decoding"] = "async"
    if cover is None: cover = img["src"]
  for t in s.find_all(True):
    for k in ("colspan", "rowspan"):
      if t.get(k) == "1": del t[k]
  for tbl in s.find_all("table"):
    tbl.wrap(s.new_tag("div", attrs={"class": "ledger"}))
  return str(s), cover, len(s.get_text(" ").split())

def nice_date(d):
  return datetime.date.fromisoformat(d).strftime("%B %-d, %Y")

HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="{ogtype}">
<meta property="og:site_name" content="WISECEO Academy">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="{image}">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#0A0F1C">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@600;800&family=Instrument+Sans:wght@400;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/site.css?v={v}">
<script type="application/ld+json">{ld}</script>
</head>
<body data-page="blog">
<a class="skip" href="#main">Skip to content</a>
<header class="top" id="siteHeader"></header>
<main id="main">
"""
FOOT = """</main>
<footer id="foot"></footer>
<script src="assets/site.js?v={v}"></script>
</body>
</html>
"""
CREDIT = ('<p class="post-credit">This article first appeared in the W.I.S.E.C.E.O. newsletter. '
          'W.I.S.E.C.E.O. is a separate nonprofit organization; WISECEO Academy shares it here '
          'because it matters to our fellows and families.</p>')

def esc(t): return html.escape(t, quote=True)

def build():
  v = ver(); built = []
  for p in POSTS:
    src = os.path.join(ROOT, "blog-src", p["slug"] + ".html")
    body, cover, words = clean(open(src, encoding="utf-8").read(), p["slug"])
    url = f"{SITE}/blog-{p['slug']}.html"
    image = f"{SITE}/{cover}" if cover else f"{SITE}/assets/og-image.png"
    ld = {"@context": "https://schema.org", "@type": "Article", "headline": p["title"][:110],
          "description": p["dek"], "datePublished": p["date"], "image": [image],
          "mainEntityOfPage": url, "articleSection": p["topic"], "wordCount": words,
          "author": {"@type": "Organization", "name": "W.I.S.E.C.E.O.", "url": "https://www.wiseceo.org/"},
          "publisher": {"@type": "Organization", "name": "WISECEO Academy", "url": SITE + "/",
                        "logo": {"@type": "ImageObject", "url": SITE + "/apple-touch-icon.png"}}}
    page = HEAD.format(title=esc(p["title"]) + " | WISECEO Academy Blog", desc=esc(p["dek"]), url=url,
                       ogtype="article", image=image, v=v, ld=json.dumps(ld))
    page += f"""  <article class="post">
    <div class="wrap post-wrap">
      <p class="post-back"><a href="blog.html">← All articles</a></p>
      <p class="label">{esc(p['topic'])}</p>
      <h1>{esc(p['title'])}</h1>
      <p class="lede">{esc(p['dek'])}</p>
      <p class="post-meta"><time datetime="{p['date']}">{nice_date(p['date'])}</time> · {max(1, round(words/230))} min read</p>
      <div class="prose">
{body}
      </div>
      {CREDIT}
      <p class="post-back"><a href="blog.html">← All articles</a></p>
    </div>
  </article>
""" + FOOT.format(v=v)
    open(os.path.join(ROOT, f"blog-{p['slug']}.html"), "w", encoding="utf-8").write(page)
    built.append((p, cover))
    print("built", f"blog-{p['slug']}.html", words, "words")

  cards = "\n".join(f"""        <a class="post-card spot" href="blog-{p['slug']}.html">
          {f'<img src="{c}" alt="" loading="lazy" decoding="async">' if c else ''}
          <span class="post-card-body"><span class="label">{esc(p['topic'])} · <time datetime="{p['date']}">{nice_date(p['date'])}</time></span>
          <b>{esc(p['title'])}</b><span>{esc(p['dek'])}</span></span>
        </a>""" for p, c in built)
  desc = "Articles on technology, careers, workforce policy, and civic life for high school students and families, from WISECEO Academy."
  ld = {"@context": "https://schema.org", "@type": "Blog", "name": "WISECEO Academy Blog", "url": SITE + "/blog.html",
        "description": desc, "publisher": {"@type": "Organization", "name": "WISECEO Academy", "url": SITE + "/"},
        "blogPost": [{"@type": "BlogPosting", "headline": p["title"][:110], "datePublished": p["date"],
                      "url": f"{SITE}/blog-{p['slug']}.html"} for p, _ in built]}
  page = HEAD.format(title="Blog | WISECEO Academy", desc=esc(desc), url=SITE + "/blog.html", ogtype="website",
                     image=SITE + "/assets/og-image.png", v=v, ld=json.dumps(ld))
  page += f"""  <section class="page-hero">
    <canvas class="net" aria-hidden="true"></canvas>
    <div class="wrap">
      <p class="label">Blog</p>
      <h1>Read, think, <span class="grad-text">lead</span></h1>
      <p class="lede">Technology, careers, workforce policy, and civic life, for fellows and the families behind them.</p>
    </div>
  </section>
  <section class="band">
    <div class="wrap">
      <div class="post-grid">
{cards}
      </div>
    </div>
  </section>
""" + FOOT.format(v=v)
  open(os.path.join(ROOT, "blog.html"), "w", encoding="utf-8").write(page)

  today = datetime.date.today().isoformat()
  urls = [(f"{SITE}/{path}", today, pr) for path, pr in STATIC_PAGES]
  urls += [(f"{SITE}/blog-{p['slug']}.html", p["date"], "0.6") for p, _ in built]
  xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
  xml += [f"  <url><loc>{u}</loc><lastmod>{d}</lastmod><priority>{pr}</priority></url>" for u, d, pr in urls]
  xml.append("</urlset>")
  open(os.path.join(ROOT, "sitemap.xml"), "w").write("\n".join(xml) + "\n")
  print("built blog.html and sitemap.xml")

if __name__ == "__main__":
  build()
