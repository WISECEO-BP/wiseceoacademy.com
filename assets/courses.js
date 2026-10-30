/* =====================================================================
   WISECEO® Stars Academy: course catalog
   Edit this file to add modules or open them up.
   status: "soon" (listed, not clickable) | "preview" (open early) | "open"
   url: the lesson file inside /lessons/ once it exists
   ===================================================================== */

/* Program details and sign-up live on the parent site */
const PROGRAM_URL = "https://www.wiseceo.org/careerpathways.html";
const SIGNUP_URL  = "https://www.wiseceo.org/careerpathways.html#signup";

const TRACKS = [
  {
    id:"cybersecurity", icon:"🛡️", name:"Cybersecurity", accent:"--blue",
    blurb:"Protect data, people, and systems. Start with spotting scams and finish ready for an entry-level security credential.",
    levels:[
      { name:"Level 1", grades:"Grades 9 & 10", modules:[
        { slug:"spot-the-scam", title:"Spot the Scam", desc:"Identify phishing, evaluate deepfakes, and check a message before you click.", status:"preview", url:"lessons/spot-the-scam.html" },
        { slug:"cia-triad", title:"The CIA Triad", desc:"Use Confidentiality, Integrity, and Availability to judge whether a tool or system is safe.", status:"soon", url:"" },
        { slug:"privacy-policy", title:"Privacy and Policy", desc:"Write a one-page data privacy policy for a club or small business.", status:"soon", url:"" }
      ]},
      { name:"Level 2", grades:"Grades 11 & 12", modules:[
        { slug:"how-networks-work", title:"How Networks Work", desc:"Basic network concepts and troubleshooting.", status:"soon", url:"" },
        { slug:"risk-analysis", title:"Risk Analysis", desc:"Find, rate, and plan for security risks.", status:"soon", url:"" },
        { slug:"incident-response-lab", title:"Incident Response Lab", desc:"Work through a mock security incident and write the incident report.", status:"soon", url:"" }
      ]}
    ],
    credentials:["ISC2 Certified in Cybersecurity (CC)","CompTIA Tech+","CISA Learning courses"]
  },
  {
    id:"energy", icon:"⚡", name:"Energy & Infrastructure", accent:"--green",
    blurb:"AI runs on electricity, cooling, and water. Learn the systems and careers that keep it all powered.",
    levels:[
      { name:"Level 1", grades:"Grades 9 & 10", modules:[
        { slug:"follow-the-money", title:"Follow the Money", desc:"Grid costs, electrical loads, and data center tax incentives.", status:"soon", url:"" },
        { slug:"know-your-community", title:"Know Your Community", desc:"How utilities, zoning, and data centers affect your neighborhood.", status:"soon", url:"" },
        { slug:"reframing-the-trades", title:"Reframing the Trades", desc:"How electricians, HVAC technicians, and utility workers use technology today.", status:"soon", url:"" }
      ]},
      { name:"Level 2", grades:"Grades 11 & 12", modules:[
        { slug:"powering-the-future", title:"Powering the Future", desc:"Power grids, compute demand, and smart infrastructure.", status:"soon", url:"" },
        { slug:"energy-audit", title:"Energy Audit Project", desc:"Analyze a real energy bill and propose upgrades with estimated savings.", status:"soon", url:"" },
        { slug:"routes-into-the-field", title:"Routes Into the Field", desc:"Apprenticeships, technical programs, and engineering degrees.", status:"soon", url:"" }
      ]}
    ],
    credentials:["CISA Learning infrastructure courses","ISC2 Certified in Cybersecurity (CC)"]
  },
  {
    id:"ai", icon:"🤖", name:"AI & Technical Integration", accent:"--rose",
    blurb:"Learn what AI can and cannot do, use it responsibly, and understand how it affects people.",
    levels:[
      { name:"Level 1", grades:"Grades 9 & 10", modules:[
        { slug:"how-ai-works", title:"How AI Works", desc:"What AI can and cannot do, with no coding required.", status:"soon", url:"" },
        { slug:"prompt-design", title:"Prompt Design", desc:"Get useful, accurate results from AI tools.", status:"soon", url:"" },
        { slug:"the-human-element", title:"The Human Element", desc:"Study algorithmic bias, privacy, and human-centered design.", status:"soon", url:"" }
      ]},
      { name:"Level 2", grades:"Grades 11 & 12", modules:[
        { slug:"ai-project-studio", title:"AI Project Studio", desc:"Build a small AI-assisted project with safety guardrails.", status:"soon", url:"" },
        { slug:"cloud-ai-basics", title:"Cloud AI Basics", desc:"How AI runs in the cloud and how companies deploy it.", status:"soon", url:"" }
      ]}
    ],
    credentials:["Elements of AI","Google Skills: Introduction to Generative AI","Google AI Essentials","AWS Certified AI Practitioner"]
  }
];

/* ===================================================================== */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const root = document.body.dataset.root || "";   /* "../" on pages inside /lessons/ */
const isDone = slug => { try { return localStorage.getItem("done:" + slug) === "1"; } catch { return false; } };

function renderChrome(){
  const page = document.body.dataset.page;
  const links = [["home","index.html","Home"]].concat(TRACKS.map(t => [t.id, t.id + ".html", t.name]));
  const top = document.getElementById("topbar");
  if (top) top.innerHTML = `
    <a class="brand" href="${root}index.html"><span class="star" aria-hidden="true">⭐</span><span class="name">WISECEO® Stars Academy</span></a>
    <nav class="nav" aria-label="Main">${links.map(([id,href,label]) =>
      `<a href="${root}${href}"${id===page ? ' aria-current="page"' : ""}>${esc(label)}</a>`).join("")}</nav>`;
  const foot = document.getElementById("footer");
  if (foot) foot.innerHTML = `WISECEO® Stars Academy is a program of W.I.S.E.C.E.O. (Worldwide Institute for Success &amp; Excellence), a 501(c)(3) nonprofit.<br>
    Program details and sign-up: <a href="${PROGRAM_URL}">wiseceo.org/careerpathways</a>`;
  document.querySelectorAll("[data-signup]").forEach(a => a.href = SIGNUP_URL);
  document.querySelectorAll("[data-program]").forEach(a => a.href = PROGRAM_URL);
}

function renderHome(){
  const el = document.getElementById("trackCards"); if (!el) return;
  el.innerHTML = TRACKS.map(t => {
    const count = t.levels.reduce((n,l) => n + l.modules.length, 0);
    return `<a class="track-card" href="${t.id}.html" style="--accent:var(${t.accent})">
      <span class="ico" aria-hidden="true">${t.icon}</span>
      <h3 class="display">${esc(t.name)}</h3>
      <p>${esc(t.blurb)}</p>
      <span class="count">${t.levels.length} levels · ${count} modules</span>
    </a>`;
  }).join("");
}

function moduleRow(m){
  const done = isDone(m.slug);
  let tag;
  if (m.status === "soon" || !m.url) tag = `<span class="status soon">Coming soon</span>`;
  else if (done) tag = `<a class="status done" href="${root}${m.url}">✔ Done</a>`;
  else tag = `<a class="status ${m.status}" href="${root}${m.url}">${m.status === "preview" ? "Preview" : "Start"}</a>`;
  const title = (m.status !== "soon" && m.url) ? `<a href="${root}${m.url}">${esc(m.title)}</a>` : esc(m.title);
  return `<li class="mod"><div><b>${title}</b><p>${esc(m.desc)}</p></div>${tag}</li>`;
}

function renderTrack(){
  const id = document.body.dataset.track; if (!id) return;
  const t = TRACKS.find(x => x.id === id);
  document.documentElement.style.setProperty("--accent", `var(${t.accent})`);
  document.title = `${t.name} | WISECEO® Stars Academy`;
  document.getElementById("trackHero").innerHTML = `
    <span class="sticker">${t.icon} Track</span>
    <h1 class="display">${esc(t.name)}</h1>
    <p class="tagline">${esc(t.blurb)}</p>`;
  document.getElementById("levels").innerHTML = t.levels.map(l => `
    <div class="level">
      <h3 class="display">${esc(l.name)}</h3>
      <p class="who">${esc(l.grades)}</p>
      <ol class="modules">${l.modules.map(moduleRow).join("")}</ol>
    </div>`).join("");
  document.getElementById("creds").innerHTML = t.credentials.map(c => `<span class="chip">${esc(c)}</span>`).join("");
}

/* Lesson helper: finds the module for this lesson and wires the "mark complete" button */
function lessonInfo(slug){
  for (const t of TRACKS) for (const l of t.levels) {
    const i = l.modules.findIndex(m => m.slug === slug);
    if (i > -1) return { track:t, level:l, module:l.modules[i], next:l.modules[i+1] || null };
  }
  return null;
}

function renderLessonChrome(){
  const slug = document.body.dataset.lesson; if (!slug) return;
  const info = lessonInfo(slug); if (!info) return;
  document.documentElement.style.setProperty("--accent", `var(${info.track.accent})`);
  const nav = document.getElementById("lessonNav");
  if (nav) nav.innerHTML = `<a href="${root}${info.track.id}.html">← ${esc(info.track.name)} · ${esc(info.level.name)}</a>
    ${info.next ? `<span>Next: ${esc(info.next.title)}</span>` : ""}`;
  const btn = document.getElementById("markDone"), msg = document.getElementById("doneMsg");
  if (!btn) return;
  const sync = () => {
    const d = isDone(slug);
    btn.textContent = d ? "✔ Marked complete" : "Mark this module complete";
    btn.setAttribute("aria-pressed", d);
    msg.textContent = d ? "Nice work. Your progress is saved on this device." : "";
  };
  btn.addEventListener("click", () => {
    try { isDone(slug) ? localStorage.removeItem("done:" + slug) : localStorage.setItem("done:" + slug, "1"); } catch {}
    sync();
  });
  sync();
}

renderChrome(); renderHome(); renderTrack(); renderLessonChrome();
