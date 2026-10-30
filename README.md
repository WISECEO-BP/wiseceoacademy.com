# WISECEO® Stars Academy class site

Class site for the W.I.S.E.C.E.O. (Worldwide Institute for Success & Excellence) Career Pathways program. Program details and sign-up stay on wiseceo.org/careerpathways.html; this site is where students take the classes.

## Files
- `index.html`: class home page
- `cybersecurity.html`, `energy.html`, `ai.html`: one page per track
- `lessons/`: one file per module (`spot-the-scam.html` is the sample and template)
- `assets/courses.js`: the course catalog. Edit this file to add modules, change descriptions, or open a module
- `assets/site.css`: shared design
- `CNAME`: tells GitHub Pages to serve the site at wiseceoacademy.com

## Opening a module
1. Copy `lessons/spot-the-scam.html`, rename it to the module's slug (for example `cia-triad.html`), and replace the content.
2. In that file, change `data-lesson="spot-the-scam"` to the new slug.
3. In `assets/courses.js`, find the module and set `status:"open"` and `url:"lessons/cia-triad.html"`.
4. Commit to main.

## Preview before launch
Settings > Pages > Build and deployment > Deploy from a branch > main / root. The site appears at the github.io address shown there. It stays hidden from search engines until you remove the robots line from each page.

## Launch day
1. In Settings > Pages, confirm `wiseceoacademy.com` is the custom domain, and turn on Enforce HTTPS once it is offered. The `CNAME` file keeps that setting in place.
2. In Cloudflare DNS for wiseceoacademy.com, point the domain at GitHub Pages. Leave every MX and email-related TXT record untouched so info@wiseceoacademy.com keeps working.
3. Delete the `<meta name="robots" content="noindex">` line from every page.
4. On wiseceo.org, paste `https://wiseceoacademy.com/` into `COURSE_URL` near the bottom of careerpathways.html. That reveals the "Take the classes" buttons.
5. Once the new site loads over HTTPS, cancel the Hostinger Horizons subscription and hosting.
