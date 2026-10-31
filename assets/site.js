/* =====================================================================
   WISECEO Academy: shared content and behavior for every page.
   Edit the Settings and Content lists below; every page updates.
   Each content list mirrors an Airtable table (Tracks, Speakers, Credentials).
   ===================================================================== */

/* ===== Settings ===== */
/* Paste the Airtable application form link here. While empty, Apply buttons say "opens soon". */
const APPLY_URL = "";
/* Paste the Airtable sponsor interest form link here. While empty, sponsor buttons say "opens soon". */
const PARTNER_URL = "";
/* ===== Sponsors =====
   List a sponsor only after they have agreed in writing to be named, at a tier they chose.
   tier: "platinum" | "gold" | "silver" | "bronze" for paid sponsors, or "supporter" for in-kind help (tools, discounts)
   logo: path to an approved logo file in assets/sponsors/ (for example "assets/sponsors/acme.svg"),
         or "" to show the name as text until the logo arrives.
   url: the sponsor's website, or "".
   note: optional short line under the name saying what they give, for example "In-kind: 50% off software".
   To publish one of the examples below, move it out of the comment and set its tier. */
const SPONSORS = [
  /* { name:"Google for Nonprofits", tier:"", logo:"", url:"https://www.google.com/nonprofits/" }, */
  /* { name:"Candid", tier:"", logo:"", url:"https://candid.org/" }, */
  /* { name:"TechOlympics, presented by Procter & Gamble", tier:"", logo:"", url:"https://techolympics.org/" }, */
  /* { name:"Amazon Future Engineer", tier:"", logo:"", url:"https://www.amazonfutureengineer.com/" }, */
  { name:"GitHub", tier:"supporter", logo:"", url:"https://github.com/" },
  { name:"Figma", tier:"supporter", logo:"", url:"https://www.figma.com/education/" },
  { name:"Airtable", tier:"supporter", logo:"", url:"https://www.airtable.com/" },
  { name:"beehiiv", tier:"supporter", logo:"", url:"https://www.beehiiv.com/" },
];

/* Sponsorship packages shown on the Sponsorship page. price: "" shows "Pricing on request".
   DRAFT benefits: review and edit before sharing with sponsors. */
const PACKAGES = [
  { tier:"platinum", name:"Platinum", price:"", lead:"Name a full track cohort.",
    perks:["Named sponsor of one track cohort","Largest logo on the Sponsors and Home pages","Host up to three live sessions","First look at fellows finishing Level 2 for internships","Outcome report every cohort","Recognition at orientation"] },
  { tier:"gold", name:"Gold", price:"", lead:"Fund credential exams for a cohort.",
    perks:["Exam vouchers named for your company","Large logo on the Sponsors page","Host up to two live sessions","Outcome report every cohort","Recognition at orientation"] },
  { tier:"silver", name:"Silver", price:"", lead:"Equip a group of fellows.",
    perks:["Devices or vouchers for a group of fellows","Logo on the Sponsors page","Host one live session","Outcome report every cohort"] },
  { tier:"bronze", name:"Bronze", price:"", lead:"Back one fellow’s credential.",
    perks:["One fellow’s credential exam","Logo on the Sponsors page","Outcome report summary"] }
];

/* ===== Social accounts =====
   Paste each account's full address between the quotes, for example "https://www.instagram.com/yourname".
   An icon with no address shows in the footer but isn't clickable yet. */
const SOCIAL = [
  { id:"linkedin",  name:"LinkedIn",  url:"" },
  { id:"instagram", name:"Instagram", url:"" },
  { id:"youtube",   name:"YouTube",   url:"" },
  { id:"x",         name:"X",         url:"" },
  { id:"tiktok",    name:"TikTok",    url:"" },
  { id:"facebook",  name:"Facebook",  url:"" }
];
const SOCIAL_ICONS = {
  linkedin:'<path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/>',
  instagram:'<g fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></g><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>',
  youtube:'<path fill="currentColor" fill-rule="evenodd" d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3z"/>',
  x:'<path fill="currentColor" d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/>',
  tiktok:'<path fill="currentColor" d="M16.6 3c.4 2.3 1.9 3.8 4.4 4v3.3c-1.6 0-3-.5-4.3-1.3v6.2a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v3.4a2.7 2.7 0 1 0 1.9 2.6V3z"/>',
  facebook:'<path fill="currentColor" d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.4V14h2.7v8z"/>'
};

/* ===== Content ===== */
const TRACKS = [
  { id:"cyber", code:"CY", name:"Cybersecurity", color:"--cyber",
    icon:'<path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    blurb:"Protect data, people, and systems. Many entry points reward strong reading, writing, and problem-solving more than heavy coding.",
    l1:["Spot the Scam","The CIA Triad","Privacy and Policy"],
    l2:["How Networks Work","Risk Analysis","Incident Response Lab"],
    leads:"IT Help Desk · Junior SOC Analyst · Compliance Associate" },
  { id:"energy", code:"EN", name:"Energy & Infrastructure", color:"--energy",
    icon:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    blurb:"AI runs on electricity, cooling, and water. Learn the systems, trades, and engineering routes that keep it powered.",
    l1:["Follow the Money","Know Your Community","Reframing the Trades"],
    l2:["Powering the Future","Energy Audit Project","Routes Into the Field"],
    leads:"Data Center Technician · Electrical and HVAC apprenticeships" },
  { id:"ai", code:"AI", name:"AI & Technical Integration", color:"--ai",
    icon:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
    blurb:"Learn what AI can and cannot do, use it responsibly, and question how it affects people and communities.",
    l1:["How AI Works","Prompt Design","The Human Element"],
    l2:["AI Project Studio","Cloud AI Basics"],
    leads:"AI-assisted support roles · Data Center Technician" }
];

/* Add confirmed speakers only. A speaker with a date also appears on the Agenda page.
   date: "YYYY-MM-DD" · time: "4:00 PM" (Eastern) · photo: an image URL or "" for initials.
   Example: { name:"Jordan Lee", role:"SOC Analyst", org:"Example Bank", talk:"A day on the security team", track:"cyber", date:"2026-11-12", time:"4:00 PM", photo:"" } */
const SPEAKERS = [];

/* Organizations whose tools, courses, or credentials fellows use or prepare for (see CREDENTIALS; Figma is used for design projects).
   Shown as plain names under "Fellows train with tools from". This is not a sponsor list. */
const TOOL_PROVIDERS = ["Microsoft","Google Cloud","Amazon Web Services","Amazon Future Engineer","Figma","CompTIA","ISC2","CISA","Coursera","University of Helsinki"];

/* level: 1 or 2 · cost: "free" | "low" | "paid" · minAge: number or null */
const CREDENTIALS = [
  { name:"Elements of AI", provider:"University of Helsinki & MinnaLearn", tracks:["ai"], level:1, time:"~30 hrs", cost:"free", minAge:null },
  { name:"Introduction to Generative AI", provider:"Google Cloud", tracks:["ai"], level:1, time:"~1 hr", cost:"free", minAge:null },
  { name:"Google AI Essentials", provider:"Google on Coursera", tracks:["ai"], level:1, time:"<10 hrs", cost:"low", minAge:null },
  { name:"CISA Learning courses", provider:"U.S. Cybersecurity & Infrastructure Security Agency", tracks:["cyber","energy"], level:2, time:"Self-paced", cost:"free", minAge:null },
  { name:"Certified in Cybersecurity (CC)", provider:"ISC2", tracks:["cyber","energy"], level:2, time:"Self-paced", cost:"paid", minAge:16 },
  { name:"CompTIA Tech+", provider:"CompTIA", tracks:["cyber"], level:2, time:"Self-paced", cost:"paid", minAge:null },
  { name:"CompTIA Security+", provider:"CompTIA", tracks:["cyber"], level:2, time:"Self-paced", cost:"paid", minAge:null },
  { name:"AWS Certified AI Practitioner", provider:"Amazon Web Services", tracks:["ai"], level:2, time:"Self-paced", cost:"paid", minAge:null },
  { name:"Azure Fundamentals (AZ-900)", provider:"Microsoft", tracks:["energy","ai"], level:2, time:"Self-paced", cost:"paid", minAge:null },
  { name:"Azure AI Fundamentals (AI-900)", provider:"Microsoft", tracks:["ai"], level:2, time:"Self-paced", cost:"paid", minAge:null },
  { name:"Security, Compliance, and Identity Fundamentals (SC-900)", provider:"Microsoft", tracks:["cyber"], level:2, time:"Self-paced", cost:"paid", minAge:null }
];

/* ===================================================================== */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const $ = id => document.getElementById(id);
const byId = id => TRACKS.find(t => t.id === id);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const PAGE = document.body.dataset.page || "";

/* ===== Opa Homakbi ("Purple Owl"), the academy owl ===== */
let owlCount = 0;
function owl(label){
  const g = "og" + (++owlCount);
  const a = label ? `role="img" aria-label="${esc(label)}"` : `aria-hidden="true"`;
  return `<svg class="owl" viewBox="0 0 200 212" ${a}>
  <defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8B7BFF"/><stop offset="1" stop-color="#5B47E8"/></linearGradient></defs>
  <ellipse cx="100" cy="204" rx="44" ry="6" fill="#000" opacity=".18"/>
  <g class="bob">
    <path d="M54 66 L44 26 L84 50 Z" fill="#5B47E8"/><path d="M146 66 L156 26 L116 50 Z" fill="#5B47E8"/>
    <ellipse class="wing-l" cx="40" cy="132" rx="16" ry="34" fill="#4C3AD6"/>
    <ellipse class="wing-r" cx="160" cy="132" rx="16" ry="34" fill="#4C3AD6"/>
    <ellipse cx="100" cy="120" rx="64" ry="74" fill="url(#${g})"/>
    <ellipse cx="100" cy="150" rx="38" ry="38" fill="#E4DEFF"/>
    <g stroke="#22B8D4" stroke-width="3" fill="none" stroke-linecap="round"><path d="M86 130v14h-12"/><path d="M114 130v22h12"/><path d="M100 136v32"/></g>
    <g fill="#22B8D4"><circle cx="72" cy="144" r="4"/><circle cx="128" cy="152" r="4"/><circle cx="100" cy="170" r="4"/></g>
    <circle cx="74" cy="94" r="30" fill="#F7F5FF"/><circle cx="126" cy="94" r="30" fill="#F7F5FF"/>
    <g class="eyes"><g class="pupils">
      <circle cx="74" cy="96" r="14" fill="#0A0F1C"/><circle cx="126" cy="96" r="14" fill="#0A0F1C"/>
      <circle cx="80" cy="90" r="5" fill="#fff"/><circle cx="132" cy="90" r="5" fill="#fff"/>
    </g></g>
    <circle cx="52" cy="120" r="7" fill="#FF8FC7" opacity=".75"/><circle cx="148" cy="120" r="7" fill="#FF8FC7" opacity=".75"/>
    <path d="M91 114 H109 L100 128 Z" fill="#FFB020"/>
    <g stroke="#FFB020" stroke-width="4" stroke-linecap="round" fill="none"><path d="M78 192 l-6 8 M84 194 v8 M90 192 l6 8"/><path d="M110 192 l-6 8 M116 194 v8 M122 192 l6 8"/></g>
    <path d="M72 40 v12 q28 12 56 0 v-12 z" fill="#1E293B"/>
    <path d="M100 16 L152 32 L100 48 L48 32 Z" fill="#273449" stroke="#22D3EE" stroke-width="2" stroke-linejoin="round"/>
    <g class="tassel"><path d="M100 32 L140 40 L140 62" stroke="#FFB020" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="140" cy="66" r="5.5" fill="#FFB020"/></g>
    <circle cx="100" cy="32" r="3.5" fill="#FFB020"/>
  </g></svg>`;
}

/* ===== Header and footer (one menu for every page) ===== */
const MENU = [["tracks","tracks.html","Tracks"],["agenda","agenda.html","Agenda"],["speakers","speakers.html","Speakers"],["sponsors","sponsors.html","Sponsors"],["faq","faq.html","FAQ"]];
const headerEl = $("siteHeader");
if (headerEl) headerEl.innerHTML = `<div class="wrap">
  <a class="mark" href="index.html" aria-label="WISECEO Academy home">${owl()}<span><b>WISECEO</b><small>ACADEMY</small></span></a>
  <button class="menu-btn" type="button" id="menuBtn" aria-expanded="false" aria-controls="mainNav">Menu</button>
  <nav class="nav" id="mainNav" aria-label="Main">
    ${MENU.map(([id,href,label]) => `<a href="${href}"${id===PAGE ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
    <a class="btn btn-grad" href="apply.html"${PAGE==="apply" ? ' aria-current="page"' : ""}>Apply</a>
  </nav></div>`;
const menuBtn = $("menuBtn");
if (menuBtn) menuBtn.addEventListener("click", () => {
  const open = $("mainNav").classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.textContent = open ? "Close" : "Menu";
});
const foot = $("foot");
if (foot) foot.innerHTML = `<div class="wrap foot">
  <a class="foot-mark" href="index.html" aria-label="WISECEO Academy home">${owl()}<span>WISECEO <span class="grad-text">ACADEMY</span></span></a>
  <div class="foot-row">
    <span>© ${new Date().getFullYear()} WISECEO Academy</span>
    <a href="sponsors.html">Sponsorship</a>
    <a href="apply.html">Apply</a>
  </div>
  <ul class="social" aria-label="WISECEO Academy on social media">${SOCIAL.map(sc => {
    const icon = `<svg viewBox="0 0 24 24" aria-hidden="true">${SOCIAL_ICONS[sc.id]}</svg>`;
    return sc.url
      ? `<li><a href="${esc(sc.url)}" target="_blank" rel="noopener me" aria-label="WISECEO Academy on ${esc(sc.name)}">${icon}</a></li>`
      : `<li><span class="soon" title="${esc(sc.name)}: coming soon" aria-label="${esc(sc.name)}, coming soon">${icon}</span></li>`;
  }).join("")}</ul>
</div>`;

document.querySelectorAll("[data-owl]").forEach(el => { el.outerHTML = owl(el.dataset.owl || ""); });

/* Hero owl's eyes follow the pointer */
const heroOwl = document.querySelector(".hero-owl .owl");
if (heroOwl && !reduce){
  const pupils = heroOwl.querySelector(".pupils");
  addEventListener("pointermove", e => {
    const r = heroOwl.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width/2), dy = e.clientY - (r.top + r.height*0.45);
    const d = Math.hypot(dx, dy) || 1, k = Math.min(6, d/40);
    pupils.style.transform = `translate(${dx/d*k}px,${dy/d*k}px)`;
  }, { passive:true });
}

/* ===== Building blocks ===== */
const glyph = t => `<span class="glyph"><svg viewBox="0 0 24 24" aria-hidden="true">${t.icon}</svg></span>`;
const moduleCount = TRACKS.reduce((n,t) => n + t.l1.length + t.l2.length, 0);
const initials = n => n.split(/\s+/).map(w => w[0]).slice(0,2).join("").toUpperCase();
const fmtDate = iso => { const [y,m,d] = iso.split("-").map(Number); return new Date(Date.UTC(y,m-1,d,12)).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}); };

function speakerCard(s){
  const t = byId(s.track) || TRACKS[0];
  return `<article class="speaker spot" style="--c:var(${t.color})">
    <div class="avatar">${s.photo ? `<img src="${esc(s.photo)}" alt="">` : `<span>${esc(initials(s.name))}</span>`}</div>
    <span class="chip">${esc(t.name)}</span>
    <div><b>${esc(s.name)}</b><p class="role">${esc(s.role)}${s.org ? ", " + esc(s.org) : ""}</p></div>
    <p class="talk">${esc(s.talk)}</p>
    ${s.date ? `<span class="label">${esc(fmtDate(s.date))} · ${esc(s.time)} ET</span>` : ""}
  </article>`;
}
const tbaCard = t => `<article class="speaker spot tba" style="--c:var(${t.color})">
    <div class="avatar"><span>${owl()}</span></div>
    <span class="chip">${esc(t.name)}</span>
    <div><b>Speaker announced soon</b><p class="role">A guest from the ${esc(t.name.toLowerCase())} field</p></div>
  </article>`;
const speakersOrTba = list => list.length ? list.map(speakerCard).join("") : TRACKS.map(tbaCard).join("");

/* ===== Page sections (each renders only where its container exists) ===== */
if ($("facts")) $("facts").innerHTML = [
  [TRACKS.length, "career tracks"], [moduleCount, "modules"], [CREDENTIALS.length, "credentials to aim for"], ["$0", "cost to fellows"]
].map(([n,l]) => `<li><b class="grad-text">${n}</b><span>${l}</span></li>`).join("");

if ($("ticker")){ const t = CREDENTIALS.map(c => `<span>${esc(c.name)}</span>`).join(""); $("ticker").innerHTML = t + t; }

if ($("trackTeasers")) $("trackTeasers").innerHTML = TRACKS.map(t => `
  <a class="teaser spot" href="tracks.html#${t.id}" style="--c:var(${t.color})">
    <div class="track-top">${glyph(t)}<span class="code">TRACK ${t.code}</span></div>
    <h3>${esc(t.name)}</h3><p>${esc(t.blurb)}</p>
    <span class="more">Explore the track →</span>
  </a>`).join("");

if ($("speakerTeasers")) $("speakerTeasers").innerHTML = speakersOrTba(SPEAKERS.slice(0,3));
if ($("speakerList")) $("speakerList").innerHTML = speakersOrTba(SPEAKERS);

if ($("trackList")) $("trackList").innerHTML = TRACKS.map(t => `
  <article class="track spot" id="${t.id}" style="--c:var(${t.color})" aria-labelledby="t-${t.id}">
    <div class="track-top">${glyph(t)}<span class="code">TRACK ${t.code}</span></div>
    <h3 id="t-${t.id}">${esc(t.name)}</h3>
    <p>${esc(t.blurb)}</p>
    <div class="lvl"><span class="label">Level 1 · Grades 9 & 10</span><ol>${t.l1.map(m => `<li>${esc(m)}</li>`).join("")}</ol></div>
    <div class="lvl"><span class="label">Level 2 · Grades 11 & 12</span><ol>${t.l2.map(m => `<li>${esc(m)}</li>`).join("")}</ol></div>
    <div class="leads"><span class="label">Where it leads</span><b>${esc(t.leads)}</b></div>
  </article>`).join("");

if ($("ledgerRows")){
  const costLabel = { free:"Free", low:"Low cost / aid", paid:"Exam fee" };
  let filter = "all";
  const render = () => {
    $("filters").innerHTML = [["all","All tracks"]].concat(TRACKS.map(t => [t.id, t.name])).map(([v,l]) =>
      `<button class="filter" type="button" data-v="${v}" aria-pressed="${v===filter}">${esc(l)}</button>`).join("");
    $("ledgerRows").innerHTML = CREDENTIALS.filter(c => filter==="all" || c.tracks.includes(filter)).map(c => `<tr>
      <td><div class="cred-name">${esc(c.name)}</div><div class="cred-prov">${esc(c.provider)}</div></td>
      <td><span class="dots">${c.tracks.map(id => `<span class="dot" style="--c:var(${byId(id).color})" title="${esc(byId(id).name)}"></span>`).join("")}<span class="label">${c.tracks.map(id => byId(id).code).join(" · ")}</span></span></td>
      <td class="num">L${c.level}</td><td class="num">${esc(c.time)}</td>
      <td><span class="cost ${c.cost}">${costLabel[c.cost]}</span></td>
      <td class="num">${c.minAge ? c.minAge + "+" : "None"}</td></tr>`).join("");
  };
  $("filters").addEventListener("click", e => { const b = e.target.closest(".filter"); if (b){ filter = b.dataset.v; render(); } });
  render();
}

if ($("sessionList")){
  const today = new Intl.DateTimeFormat("en-CA",{timeZone:"America/New_York"}).format(new Date());
  const upcoming = SPEAKERS.filter(s => s.date && s.date >= today).sort((a,b) => a.date.localeCompare(b.date));
  $("sessionList").innerHTML = upcoming.length ? upcoming.map(s => { const t = byId(s.track) || TRACKS[0]; return `
    <article class="session spot" style="--c:var(${t.color})">
      <div class="when"><b>${esc(fmtDate(s.date))}</b><span class="label">${esc(s.time)} ET</span></div>
      <div><p class="talk">${esc(s.talk)}</p><span class="fine">${esc(s.name)}, ${esc(s.role)}${s.org ? ", " + esc(s.org) : ""}</span></div>
      <span class="chip">${esc(t.name)}</span>
    </article>`; }).join("")
    : `<div class="empty-state spot">${owl()}<div><b>Session dates are being set</b><p>Live talks with guests from security teams, utilities, and AI companies post here as soon as they’re confirmed. Each one runs about an hour.</p></div></div>`;
}

/* Calls to action */
document.querySelectorAll("[data-apply]").forEach(a => {
  if (APPLY_URL){ a.href = APPLY_URL; a.target = "_blank"; a.rel = "noopener"; }
  else { a.removeAttribute("href"); a.setAttribute("aria-disabled","true"); a.textContent = "Application opens soon"; }
});
document.querySelectorAll("[data-apply-note]").forEach(el => { el.hidden = !!APPLY_URL; });
document.querySelectorAll("[data-sponsor-form]").forEach(a => {
  if (PARTNER_URL){ a.href = PARTNER_URL; a.target = "_blank"; a.rel = "noopener"; }
  else { a.removeAttribute("href"); a.setAttribute("aria-disabled","true"); a.textContent = "Sponsor form opens soon"; }
});
document.querySelectorAll("[data-tools]").forEach(el => {
  el.innerHTML = `<span class="label">Fellows train with tools from</span>
    <ul class="tool-names">${TOOL_PROVIDERS.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
    <p class="fine">Names refer to the tools fellows use and the credentials they prepare for. Listing them does not mean these organizations sponsor or endorse WISECEO Academy.</p>`;
});

/* Sponsor tiers and packages */
const TIERS = [["platinum","Platinum"],["gold","Gold"],["silver","Silver"],["bronze","Bronze"]];
const listed = SPONSORS.filter(sp => TIERS.some(([t]) => t === sp.tier));
const supporters = SPONSORS.filter(sp => sp.tier === "supporter");
const logoCard = sp => {
  const inner = (sp.logo ? `<img src="${esc(sp.logo)}" alt="${esc(sp.name)}">` : `<span class="wordmark">${esc(sp.name)}</span>`)
    + (sp.note ? `<span class="sp-note">${esc(sp.note)}</span>` : "");
  return sp.url ? `<a class="logo-card" href="${esc(sp.url)}" target="_blank" rel="noopener">${inner}</a>` : `<div class="logo-card">${inner}</div>`;
};
const openCard = name => `<a class="logo-card open" href="#packages"><span>Your logo here</span><small>Become a ${name} sponsor →</small></a>`;
if ($("tierList")) $("tierList").innerHTML = TIERS.map(([t,name]) => {
  const list = listed.filter(sp => sp.tier === t);
  return `<section class="tier tier-${t}" aria-labelledby="tier-${t}">
    <div class="tier-head"><span class="tier-badge">${name}</span><h2 id="tier-${t}" class="sr-only">${name} sponsors</h2><span class="tier-rule"></span></div>
    <div class="logo-grid">${list.length ? list.map(logoCard).join("") : openCard(name)}</div>
  </section>`;
}).join("") + (supporters.length ? `<section class="tier tier-supporter" aria-labelledby="tier-supporter">
    <div class="tier-head"><span class="tier-badge">Supporters</span><h2 id="tier-supporter" class="sr-only">Supporters</h2><span class="tier-rule"></span></div>
    <p class="fine">Companies whose tools help us run the program.</p>
    <div class="logo-grid">${supporters.map(logoCard).join("")}</div>
  </section>` : "");
if ($("sponsorStrip") && (listed.length || supporters.length)){
  $("sponsorStrip").innerHTML = `<span class="label">Thank you to our ${listed.length && supporters.length ? "sponsors and supporters" : listed.length ? "sponsors" : "supporters"}</span><div class="strip-logos">${listed.concat(supporters).map(logoCard).join("")}</div>`;
  $("sponsorStrip").hidden = false;
}
if ($("packageList")) $("packageList").innerHTML = PACKAGES.map(pk => `
  <article class="package spot tier-${pk.tier}${pk.tier==="platinum" ? " featured" : ""}">
    <span class="tier-badge">${esc(pk.name)}</span>
    <p class="pk-lead">${esc(pk.lead)}</p>
    <p class="pk-price">${pk.price ? esc(pk.price) : "Pricing on request"}</p>
    <ul class="perks">${pk.perks.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
  </article>`).join("");

/* Spotlight glow follows the pointer on cards */
document.addEventListener("pointermove", e => {
  const card = e.target.closest && e.target.closest(".spot"); if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - r.left}px`);
  card.style.setProperty("--my", `${e.clientY - r.top}px`);
}, { passive:true });

/* ===== Network motion: three track lines carrying glowing data packets ===== */
document.querySelectorAll("canvas.net").forEach(cv => {
  const ctx = cv.getContext("2d");
  let w = 0, h = 0, colors = [], running = true;
  const packets = [];
  const readColors = () => { const cs = getComputedStyle(document.documentElement);
    colors = TRACKS.map(t => cs.getPropertyValue(t.color).trim()); };
  const size = () => { const dpr = Math.min(devicePixelRatio || 1, 2), r = cv.getBoundingClientRect();
    w = r.width; h = r.height; cv.width = w*dpr; cv.height = h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); };
  const yAt = (i, x) => h*(0.28 + i*0.22) + Math.sin(x/w*Math.PI*2.2 + i*1.7)*h*0.07;
  for (let i = 0; i < 3; i++) for (let k = 0; k < 4; k++) packets.push({ line:i, t:Math.random(), v:0.0012 + Math.random()*0.0018 });
  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = colors[0]; ctx.globalAlpha = .12;
    for (let x = 14; x < w; x += 28) for (let y = 14; y < h; y += 28) ctx.fillRect(x, y, 1.5, 1.5);
    colors.forEach((c,i) => {
      ctx.globalAlpha = .35; ctx.strokeStyle = c; ctx.lineWidth = 2; ctx.beginPath();
      for (let x = 0; x <= w; x += 8) x ? ctx.lineTo(x, yAt(i,x)) : ctx.moveTo(x, yAt(i,x));
      ctx.stroke();
    });
    packets.forEach(p => {
      const x = p.t*w, y = yAt(p.line, x);
      ctx.globalAlpha = 1; ctx.fillStyle = colors[p.line]; ctx.shadowColor = colors[p.line]; ctx.shadowBlur = 16;
      ctx.beginPath(); ctx.arc(x, y, 3.5, 0, Math.PI*2); ctx.fill(); ctx.shadowBlur = 0;
    });
    ctx.globalAlpha = 1;
  }
  function loop(){ if (!running) return; packets.forEach(p => { p.t = (p.t + p.v) % 1; }); draw(); requestAnimationFrame(loop); }
  readColors(); size(); draw();
  addEventListener("resize", () => { size(); draw(); });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { readColors(); draw(); });
  new MutationObserver(() => { readColors(); draw(); }).observe(document.documentElement, { attributes:true, attributeFilter:["data-theme"] });
  if (!reduce){
    new IntersectionObserver(([e]) => { const was = running; running = e.isIntersecting; if (running && !was) loop(); }).observe(cv);
    loop();
  }
});
