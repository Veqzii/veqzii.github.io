/* ============================================================
   PORTFOLIO — main.js
   ============================================================ */

// ── Custom cursor ──────────────────────────────────────────
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + 'px';
  cursor.style.top  = curY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .game-card, .art-item, .doc-row').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ── Nav scroll state ──────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile nav toggle ─────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Hero canvas — particle field ─────────────────────────
const canvas = document.getElementById('heroCanvas');
const ctx    = canvas.getContext('2d');

let particles = [];
const PARTICLE_COUNT = 80;

function resizeCanvas() {
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x     = Math.random() * canvas.width;
    this.y     = Math.random() * canvas.height;
    this.size  = Math.random() * 1.5 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.life  = Math.random();
    this.maxLife = Math.random() * 0.006 + 0.002;
    this.growing = true;
    const r = Math.random();
    if (r < 0.4)      this.color = '245,166,35';
    else if (r < 0.7) this.color = '167,139,250';
    else              this.color = '103,232,249';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.growing) {
      this.life += this.maxLife;
      if (this.life >= 1) this.growing = false;
    } else {
      this.life -= this.maxLife;
      if (this.life <= 0) this.reset();
    }
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.life * 0.6;
    ctx.fillStyle = `rgba(${this.color},1)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Draw connecting lines between nearby particles
function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 100) {
        const alpha = (1 - dist / 100) * 0.08;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = '#f5a623';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
}

function initParticles() {
  particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
}
initParticles();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawConnections();
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ── Scroll reveal ─────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal, .reveal-up').forEach(el => {
  revealObserver.observe(el);
});

// ── Skill bar animation ───────────────────────────────────
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        fill.classList.add('animated');
      });
    }
  });
}, { threshold: 0.3 });

const skillSection = document.querySelector('.skill-bars');
if (skillSection) skillObserver.observe(skillSection);

// ── Tilt effect on game cards ─────────────────────────────
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect  = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ── Lightbox ──────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ── Smooth active nav link highlighting ───────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
