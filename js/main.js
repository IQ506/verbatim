// Mobile menu + year + simple nav
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (btn) {
  btn.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    btn.setAttribute('aria-expanded', String(!open));
  });
}
const y = document.getElementById('year');
if (y) y.textContent = String(new Date().getFullYear());
