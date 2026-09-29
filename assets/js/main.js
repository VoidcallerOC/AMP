(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  const closeNav = () => {
    if (!toggle || !nav) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNav(); });
    document.addEventListener('click', event => {
      if (nav.classList.contains('is-open') && !nav.contains(event.target) && !toggle.contains(event.target)) closeNav();
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('[data-registration]').forEach(link => link.addEventListener('click', () => window.dispatchEvent(new CustomEvent('amp:registration-route', { detail: { href: link.href } }))));
})();
