# WISECEO Academy

Site for the WISECEO Academy fellowship: an industry-backed, no-cost career fellowship in cybersecurity, energy and infrastructure, and AI for students in grades 9 to 12. Plain HTML, CSS, and JavaScript served by GitHub Pages. No build step.

## Pages
- `index.html`: home
- `tracks.html`: the three tracks and the credential table
- `agenda.html`: upcoming live sessions and how the fellowship works
- `speakers.html`: speakers and the call for speakers
- `sponsors.html`: everything for sponsors in one page: labor market data, why sponsor, sponsorship levels, the outcome report, sponsor logos by tier
- `sponsorship.html`, `partners.html`: forward to `sponsors.html` so old links keep working

- `faq.html`: questions families ask
- `apply.html`: application checklist and button
- `404.html`: page not found

The labor statistics on `sponsors.html` come from the BLS Occupational Outlook Handbook (pay from May 2023, projections for 2023–2033). When BLS publishes a newer edition, update the numbers on the page. Each number links straight to its BLS page.

## Site rule: keep visitors here
Never link to other websites. Show outside information (sources, partner details) in an on-page pop-up instead: add a `<dialog class="pop">` and a button with `data-open` set to its id. The only links that leave the site are WISECEO Academy's own social accounts and its own Airtable forms.

## Editing content
Almost everything lives in `assets/site.js`. Each list there mirrors an Airtable table.
- `APPLY_URL`: paste the Airtable application form link. Until then, Apply buttons say "Application opens soon."
- `PARTNER_URL`: paste the Airtable sponsor interest form link. Until then, sponsor buttons say "Sponsor form opens soon."
- `SPONSORS`: list a sponsor only after they agree in writing, with their tier. Put approved logo files in `assets/sponsors/`. Sponsor tiles never link to sponsor websites.
- `PACKAGES`: the five sponsorship levels (Platinum, Gold, Silver, Bronze, Community), prices, and the short benefit list on each card.
- `COMPARE`: the "Compare all benefits" table on the Sponsors page, one value per level in the same order as `PACKAGES`. All benefits are online: live sessions, the WISECEO Academy newsletter, the website, and social media.
- `SPEAKERS`: confirmed speakers only. A speaker with a `date` also appears on the Agenda page.
- `TRACKS` and `CREDENTIALS`: track modules and the credential table.
- `TOOL_PROVIDERS`: names shown under "Fellows train with tools from" on the Home and Sponsors pages. List only organizations whose courses or credentials fellows prepare for. This is not a sponsor list.
- `SOCIAL`: paste each social account's full address. Icons show in the footer on every page, and each becomes a link once its address is filled in.

Shared design is in `assets/site.css`. The share image people see when the link is texted or posted is `assets/og-image.png` (1200 × 630). The tab icon is `favicon.svg`, with `favicon.ico` and `apple-touch-icon.png` for older browsers and phones. Opa Homakbi the owl (the name means "Purple Owl"), the menu, the footer, and the animated track lines all come from `assets/site.js`, so every page stays in sync.

## Launch day
1. In Settings > Pages, confirm `wiseceoacademy.com` is the custom domain, and turn on Enforce HTTPS once it is offered. The `CNAME` file keeps that setting in place.
2. In Cloudflare DNS for wiseceoacademy.com, point the domain at GitHub Pages with the records set to DNS only (grey cloud) until HTTPS is issued. Leave every MX and email-related TXT record untouched so the domain's email keeps working.
3. Done: the noindex lines are removed, so search engines can list the site.
4. Once the new site loads over HTTPS, cancel the Hostinger Horizons subscription and hosting.

The earlier WISECEO® Stars Academy class pages are in the git history if any lesson content is needed again.
