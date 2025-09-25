document.addEventListener("DOMContentLoaded", () => {
  const embed = document.getElementById("cv-embed");
  const navbar = document.querySelector(".navbar");
  const footer = document.querySelector(".footer");
  const btnRetour = document.querySelector(".btn-retour");

  // Bouton retour : scroll doux puis navigation
  if (btnRetour) {
    btnRetour.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => { window.location.href = "index.html"; }, 500);
    });
  }

  // Ajustement dynamique de la hauteur de l’embed
  function adjustEmbedHeight() {
    if (!embed) return;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const nh = navbar ? navbar.offsetHeight : 0;
    const fh = footer ? footer.offsetHeight : 0;
    const available = Math.max(200, vh - nh - fh - 20);
    embed.style.display = "block";
    embed.style.width = "100%";
    embed.style.height = available + "px";
  }

  adjustEmbedHeight();
  window.addEventListener("resize", adjustEmbedHeight);

  // Si le PDF ne s’affiche pas correctement, bascule sur le fallback
  function ensureFallbackIfNeeded() {
    if (!embed) return;
    const rect = embed.getBoundingClientRect();
    const looksInvisible = rect.height < 50;
    if (looksInvisible) {
      embed.removeAttribute("data"); // stoppe le chargement du PDF
      embed.style.minHeight = "auto";
    }
  }
  setTimeout(ensureFallbackIfNeeded, 800);

  // Navbar hide/show au scroll
  if (navbar) {
    let last = window.scrollY || 0;
    window.addEventListener("scroll", () => {
      const y = window.scrollY || 0;
      navbar.style.top = y > last ? "-70px" : "0";
      last = y;
    }, { passive: true });
  }
});
