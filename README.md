# WISECEO Academy

Site for the WISECEO Academy fellowship: an industry-backed, no-cost career fellowship in cybersecurity, energy and infrastructure, and AI for students in grades 9 to 12. Plain HTML, CSS, and JavaScript served by GitHub Pages. No build step.

## Pages
- `index.html`: home
- `tracks.html`: the three tracks and the credential table
- `agenda.html`: upcoming live sessions and how the fellowship works
- `speakers.html`: speakers and the call for speakers
- `partners.html`: ways for companies and funders to partner, and the outcome report
- `faq.html`: questions families ask
- `apply.html`: application checklist and button
- `404.html`: page not found

## Editing content
Almost everything lives in `assets/site.js`. Each list there mirrors an Airtable table.
- `APPLY_URL`: paste the Airtable application form link. Until then, Apply buttons say "Application opens soon."
- `PARTNER_URL`: paste the Airtable partner interest form link. Until then, the partners page shows the email address.
- `PARTNERS`: names of partners who have agreed to be listed. Empty hides the row.
- `SPEAKERS`: confirmed speakers only. A speaker with a `date` also appears on the Agenda page.
- `TRACKS` and `CREDENTIALS`: track modules and the credential table.

Shared design is in `assets/site.css`. Hoot the owl, the menu, the footer, and the animated track lines all come from `assets/site.js`, so every page stays in sync.

## Launch day
1. In Settings > Pages, confirm `wiseceoacademy.com` is the custom domain, and turn on Enforce HTTPS once it is offered. The `CNAME` file keeps that setting in place.
2. In Cloudflare DNS for wiseceoacademy.com, point the domain at GitHub Pages with the records set to DNS only (grey cloud) until HTTPS is issued. Leave every MX and email-related TXT record untouched so the domain's email keeps working.
3. Done: the noindex lines are removed, so search engines can list the site.
4. Once the new site loads over HTTPS, cancel the Hostinger Horizons subscription and hosting.

The earlier WISECEO® Stars Academy class pages are in the git history if any lesson content is needed again.
