const BUSINESS = {
  name: "Client Name",
  phone: "(555) 555-0100",
  email: "hello@example.com",
  address: "123 Main St, City, ST 00000",
  mapsQuery: "123 Main St, City, ST 00000",
};

const HOURS = [
  { day: "Sunday",    label: "Closed", closed: true },
  { day: "Monday",    label: "10:00 AM – 6:00 PM" },
  { day: "Tuesday",   label: "10:00 AM – 6:00 PM" },
  { day: "Wednesday", label: "10:00 AM – 6:00 PM" },
  { day: "Thursday",  label: "10:00 AM – 6:00 PM" },
  { day: "Friday",    label: "10:00 AM – 6:00 PM" },
  { day: "Saturday",  label: "10:00 AM – 4:00 PM" },
];

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const hoursEl = document.getElementById("hoursList");
if (hoursEl) {
  const today = new Date().getDay();
  hoursEl.innerHTML = HOURS.map((row, i) => {
    const cls = [i === today ? "today" : "", row.closed ? "closed" : ""].join(" ").trim();
    return `<li class="${cls}"><span>${row.day}</span><span>${row.label}</span></li>`;
  }).join("");
}

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
}

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || ""}\n\n${data.message}`
    );
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent("Website inquiry")}&body=${body}`;
    if (status) status.textContent = "Opening your email…";
  });
}
