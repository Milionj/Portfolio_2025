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
