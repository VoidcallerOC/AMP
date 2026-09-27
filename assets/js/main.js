const esc = (value) => String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const rich = (value) => esc(value).replace(/&lt;(\/?)((?:em|br))\s*\/?&gt;/g, '<$1$2>');
const byId = (id) => document.getElementById(id);

if (typeof BUSINESS !== 'undefined') {
  document.querySelectorAll('[data-business="phone-link"]').forEach((el) => { el.href = `tel:${BUSINESS.phoneHref}`; if (el.dataset.fill === 'text') el.textContent = BUSINESS.phone; });
  document.querySelectorAll('[data-business="email-link"]').forEach((el) => { el.href = `mailto:${BUSINESS.email}`; if (el.dataset.fill === 'text') el.textContent = BUSINESS.email; });
  document.querySelectorAll('[data-business="address-text"]').forEach((el) => { el.innerHTML = esc(BUSINESS.address).replace(/,\s*/g, ',<br />'); });
}

if (typeof CTA !== 'undefined') {
  document.querySelectorAll('[data-cta="primary"]').forEach((el) => { el.href = CTA.primary.href; const label = el.querySelector('.cta-label'); if (label) label.textContent = CTA.primary.label; });
  document.querySelectorAll('[data-cta="secondary"]').forEach((el) => { el.href = `tel:${BUSINESS.phoneHref}`; const label = el.querySelector('.cta-label'); if (label) label.textContent = `${CTA.secondary.label} · ${BUSINESS.phone}`; });
  document.querySelectorAll('[data-cta="register"]').forEach((el) => { el.href = CTA.register.href; const label = el.querySelector('.cta-label'); if (label) label.textContent = CTA.register.label; });
}

if (typeof HERO !== 'undefined') {
  const eyebrow = byId('heroEyebrow'); if (eyebrow) eyebrow.insertAdjacentText('beforeend', ` ${HERO.eyebrow}`);
  const title = byId('heroTitle'); if (title) title.innerHTML = rich(HERO.title);
  const lede = byId('heroLede'); if (lede) lede.textContent = HERO.lede;
  const note = byId('heroNote'); if (note) note.insertAdjacentText('beforeend', ` ${HERO.note}`);
  const badges = byId('heroBadges'); if (badges) badges.innerHTML = HERO.badges.map((item) => `<li>${esc(item)}</li>`).join('');
}

if (typeof TRUST_ITEMS !== 'undefined') byId('trustGrid').innerHTML = TRUST_ITEMS.map((item) => `<div class="trust-item"><span class="trust-icon" aria-hidden="true"><span></span></span><span class="trust-copy"><strong>${esc(item.strong)}</strong><span>${esc(item.label)}</span></span></div>`).join('');
if (typeof PROGRAMS !== 'undefined') byId('programGrid').innerHTML = PROGRAMS.map((item, index) => `<article class="program-card"><div class="program-media"><img src="${esc(item.image)}" alt="${esc(item.name)} at Adaptive Movement Parkour" loading="lazy" /><span class="program-number">${String(index + 1).padStart(2, '0')}</span></div><div class="program-copy"><span class="program-age">${esc(item.age)}</span><h3>${esc(item.name)}</h3><p>${esc(item.description)}</p><a class="text-link text-link-dark" href="#contact" aria-label="Ask about ${esc(item.name)}">Ask about it <span aria-hidden="true">↗</span></a></div></article>`).join('');
if (typeof DIFFERENCE !== 'undefined') byId('differenceGrid').innerHTML = DIFFERENCE.map((item) => `<div class="why-card"><span class="why-tick" aria-hidden="true"></span><h3>${esc(item.title)}</h3><p>${esc(item.body)}</p></div>`).join('');
if (typeof REVIEWS !== 'undefined') byId('reviewGrid').innerHTML = REVIEWS.map((item) => `<article class="testimonial-card"><span class="testimonial-mark" aria-hidden="true">&ldquo;</span><p>${esc(item.quote)}</p><span class="testimonial-name">${esc(item.label)}</span><span class="testimonial-meta">Adaptive Movement Parkour</span></article>`).join('');
if (typeof HOURS !== 'undefined') byId('hoursList').innerHTML = HOURS.map((item) => `<li><span>${esc(item.day)}</span><strong>${esc(item.label)}</strong></li>`).join('');

const programSelect = byId('program');
if (programSelect && typeof PROGRAMS !== 'undefined') programSelect.innerHTML = `<option value="" selected disabled>Select a program…</option>${PROGRAMS.map((item) => `<option>${esc(item.name)}</option>`).join('')}`;

const form = byId('contactForm');
if (form) form.addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(form); const subject = encodeURIComponent(`AMP question about ${data.get('program') || 'a program'}`); const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nProgram: ${data.get('program')}\nAge group: ${data.get('age')}\n\n${data.get('message')}`); window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`; const status = byId('formStatus'); if (status) status.textContent = 'Your email app should open with the question ready to send.'; });

const menu = byId('menuBtn'); const nav = byId('nav');
if (menu && nav) { menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); menu.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation'); nav.classList.toggle('is-open', !open); }); nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); })); }

document.querySelectorAll('[data-social="facebook"]').forEach((el) => { if (BUSINESS.social.facebook) el.href = BUSINESS.social.facebook; });
const year = byId('year'); if (year) year.textContent = new Date().getFullYear();
