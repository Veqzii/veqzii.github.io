/* ============================================================
   AASHIR GURUNG PORTFOLIO — main.js
   ============================================================ */

// ── Custom cursor ──────────────────────────────────────────
const cursor = document.getElementById('cursor');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

document.querySelectorAll('a, button, .game-card, .art-item, .doc-row').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cur-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cur-hover'));
});

// ── Nav scroll state ──────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Mobile nav toggle ─────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Hero typewriter ───────────────────────────────────────
const NAME = 'Aashir Gurung';
const nameEl   = document.getElementById('heroName');
const cursorEl = document.getElementById('heroCursor');
let i = 0;

function typeHero() {
  if (i <= NAME.length) {
    nameEl.textContent = NAME.slice(0, i);
    i++;
    setTimeout(typeHero, i === 1 ? 500 : 60 + Math.random() * 40);
  } else {
    // Once done typing, cursor stays blinking via CSS
    cursorEl.style.animation = 'blink-cur 1s step-end infinite';
  }
}
// Start after short delay so page feels settled
setTimeout(typeHero, 400);

// ── Scroll reveal ─────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Skill bar animation ───────────────────────────────────
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(f => f.classList.add('animated'));
      skillObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const skillList = document.getElementById('skillList');
if (skillList) skillObs.observe(skillList);

// ── Lightbox ──────────────────────────────────────────────
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');

function openLightbox(src, caption) {
  lbImg.src = src;
  lbImg.alt = caption;
  lbCaption.textContent = caption;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ── Active nav link ───────────────────────────────────────
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        const isActive = a.getAttribute('href') === `#${id}`;
        a.style.color = isActive ? 'var(--warm)' : '';
      });
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => sectionObs.observe(s));
