/* ===== NAV SCROLL ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ===== MOBILE MENU ===== */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

/* ===== MODAL ===== */
function openModal(type) {
  document.getElementById('modalBackdrop').classList.add('open');
  document.getElementById('loginForm').style.display = type === 'login' ? 'block' : 'none';
  document.getElementById('cadastroForm').style.display = type === 'cadastro' ? 'block' : 'none';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ===== HERO TIMER (decorativo) ===== */
let heroSec = 0;
function pad(n) { return String(n).padStart(2, '0'); }

setInterval(() => {
  heroSec++;
  const m = Math.floor(heroSec / 60);
  const s = heroSec % 60;
  const el = document.getElementById('heroTimer');
  if (el) el.textContent = pad(m) + ':' + pad(s);
}, 1000);

/* ===== PARALLAX NO HERO ===== */
window.addEventListener('mousemove', (e) => {
  const phone = document.querySelector('.hero-phone');
  if (!phone) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 14;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  phone.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateY(0px)`;
});

window.addEventListener('mouseleave', () => {
  const phone = document.querySelector('.hero-phone');
  if (phone) phone.style.transform = '';
});

/* ===== TILT NOS CARDS ===== */
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll('.how-step, .recurso-card, .section-header');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

/* ===== CURSOR PERSONALIZADO (opcional, desktop) ===== */
if (window.innerWidth > 900) {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    width: 10px; height: 10px;
    background: #00FF87;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease, opacity 0.3s ease;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);

  const cursorRing = document.createElement('div');
  cursorRing.style.cssText = `
    position: fixed;
    width: 36px; height: 36px;
    border: 1.5px solid rgba(0,255,135,0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.12s ease;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(cursorRing);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 5 + 'px';
    cursor.style.top = e.clientY - 5 + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('button, a, [data-tilt]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      cursorRing.style.width = '52px';
      cursorRing.style.height = '52px';
      cursorRing.style.borderColor = 'rgba(0,255,135,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursorRing.style.width = '36px';
      cursorRing.style.height = '36px';
      cursorRing.style.borderColor = 'rgba(0,255,135,0.5)';
    });
  });
}