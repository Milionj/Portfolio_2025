// 1) Disparition douce du loader quand tout est chargé
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;
  loader.style.opacity = "0";
  setTimeout(() => { loader.style.display = "none"; }, 500);
});

// Respect du réglage d’accessibilité « réduire les animations »
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 2) Révélation des sections au scroll
(function revealOnScroll() {
  const sections = document.querySelectorAll(".section.hidden");
  if (!sections.length) return;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    sections.forEach(s => s.classList.add("show"));
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(s => io.observe(s));
})();

// 3) Animation des barres de progression lorsqu’elles entrent dans le viewport
(function animateProgressBars() {
  const bars = document.querySelectorAll(".progress");
  if (!bars.length) return;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    bars.forEach(bar => {
      const percent = bar.getAttribute("data-percent") || "0";
      bar.style.width = percent + "%";
    });
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percent = bar.getAttribute("data-percent") || "0";
        bar.style.width = percent + "%";
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => io.observe(bar));
})();

// 4) Navbar qui se cache quand on descend et réapparaît quand on remonte
(function navbarScrollHide() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  let last = window.scrollY || 0;

  window.addEventListener("scroll", () => {
    const y = window.scrollY || 0;
    navbar.style.top = y > last ? "-70px" : "0";
    last = y;
  }, { passive: true });
})();

/* ============================
   5) GSAP – hero + bouton CV
   ============================ */
document.addEventListener('DOMContentLoaded', () => {
  if (prefersReduced || typeof gsap === 'undefined') {
    // Fallback statique
    document.querySelectorAll('.reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // Shine qui balaye en continu
  gsap.set('.hero__shine', { x: '-120vw', opacity: 1, willChange: 'transform' });
  gsap.to('.hero__shine', {
    x: '130vw',
    duration: 11,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  });

  // Apparition du contenu hero
  gsap.set('.reveal', { y: 14, opacity: 0, willChange: 'transform' });
  gsap.to('.reveal', {
    y: 0, opacity: 1,
    duration: 0.7,
    stagger: 0.09,
    ease: 'power3.out',
    delay: 0.05
  });

  // Petite entrée “pop” pour le bouton
  gsap.from('.btn-cv', {
    scale: 0.92, opacity: 0,
    duration: 0.55, ease: 'back.out(1.7)', delay: 0.25
  });

  // Pulse discret récurrent
  gsap.to('.btn-cv', {
    keyframes: [
      { scale: 1.03, duration: 0.22, ease: 'power1.out' },
      { scale: 1.00, duration: 0.22, ease: 'power1.in' }
    ],
    repeat: -1, repeatDelay: 3.2, delay: 1.2
  });

  // Effet magnétique (suivi léger de la souris)
  const btn = document.querySelector('.btn-cv');
  if (btn) {
    let rafId = null;
    const strength = 12;
    const reset = () => gsap.to(btn, { x: 0, y: 0, duration: 0.35, ease: 'power2.out' });

    const onMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        gsap.to(btn, {
          x: gsap.utils.clamp(-strength, strength, dx * strength),
          y: gsap.utils.clamp(-strength, strength, dy * strength),
          duration: 0.2, ease: 'power2.out'
        });
      });
    };

    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', reset);
    btn.addEventListener('blur', reset);
  }
});
