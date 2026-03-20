/**
 * Sochi Event Agency -- Main JavaScript
 */

// --- Scroll Reveal with IntersectionObserver ---
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .stagger').forEach((el) => {
    observer.observe(el);
  });
}

// --- Navigation scroll effect ---
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Mobile menu
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav__mobile');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Active link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav__link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/') || 
        (currentPath.startsWith(href) && href !== '/')) {
      link.classList.add('active');
    }
  });
}

// --- Hero animation trigger ---
function initHero() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  requestAnimationFrame(() => {
    hero.classList.add('loaded');
  });
}

// --- Hero Slider ---
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero__slide');
  if (!slides.length) return;
  
  let currentSlide = 0;
  
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
}

// --- Count-up animation ---
function initCountUp() {
  const counters = document.querySelectorAll('.count-up');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = 2000;
          const start = performance.now();

          function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.round(eased * target);
            el.textContent = prefix + current + suffix;
            if (progress < 1) {
              requestAnimationFrame(update);
            }
          }

          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));
}

// --- Marquee duplication for seamless loop ---
function initMarquee() {
  const marquees = document.querySelectorAll('.marquee__inner');
  marquees.forEach((marquee) => {
    const clone = marquee.innerHTML;
    marquee.innerHTML += clone;
  });
}

// --- Smooth scroll for anchor links ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// --- Theme Toggle ---
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  const iconSun = document.getElementById('theme-icon-sun');
  const iconMoon = document.getElementById('theme-icon-moon');
  
  const savedTheme = localStorage.getItem('sea-theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if(iconSun) iconSun.style.display = 'none';
    if(iconMoon) iconMoon.style.display = 'block';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if(iconSun) iconSun.style.display = 'block';
    if(iconMoon) iconMoon.style.display = 'none';
  }

  toggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('sea-theme', 'dark');
      if(iconSun) iconSun.style.display = 'block';
      if(iconMoon) iconMoon.style.display = 'none';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('sea-theme', 'light');
      if(iconSun) iconSun.style.display = 'none';
      if(iconMoon) iconMoon.style.display = 'block';
    }
  });
}

// --- Lang Toggle ---
function initLang() {
  const langBtn = document.getElementById('lang-toggle');
  if (!langBtn) return;
  
  langBtn.addEventListener('click', () => {
    alert('English version is under development.');
  });
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initNav();
  initHero();
  initHeroSlider();
  initScrollReveal();
  initCountUp();
  initMarquee();
  initSmoothScroll();
});
