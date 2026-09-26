// Syncs every element tagged data-business="..." to the BUSINESS config
// in config.js, so contact info only has to change in one place.
document.querySelectorAll('[data-business="phone-link"]').forEach((el) => {
  el.href = `tel:${BUSINESS.phoneHref}`;
});
document.querySelectorAll('[data-business="email-link"]').forEach((el) => {
  el.href = `mailto:${BUSINESS.email}`;
});
document.querySelectorAll('[data-business="address-link"]').forEach((el) => {
  el.href = `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.mapsQuery)}`;
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const hoursEl = document.getElementById("hoursList");
const openStatusEl = document.getElementById("openStatus");
if (hoursEl) {
  const today = new Date().getDay();
  const todayRow = HOURS[today];
  hoursEl.innerHTML = HOURS.map((row, index) => {
    const classes = [index === today ? "today" : "", row.closed ? "closed" : ""].filter(Boolean).join(" ");
    return `<li class="${classes}"><span>${row.day}</span><span>${row.label}</span></li>`;
  }).join("");

  if (openStatusEl) {
    openStatusEl.textContent = todayRow.closed ? "Closed today" : `Open today · ${todayRow.label}`;
  }
}

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open navigation");
    });
  });
}

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || ""}\n\n${data.message}`
    );
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(`${BUSINESS.name} website inquiry`)}&body=${body}`;
    if (status) status.textContent = "Opening your email app…";
  });
}
