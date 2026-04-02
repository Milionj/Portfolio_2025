const projects = {
  inkmaster: {
    title: "InkMaster",
    badge: "Salon de tatouage",
    kicker: "Application React + Node.js",
    intro:
      "InkMaster ne se limite pas a une simple vitrine : le vrai projet est une application complete en React, appuyee par un backend Node.js, pensee pour un usage reel.",
    description:
      "InkMaster valorise l'univers d'un salon de tatouage avec une direction visuelle forte et une navigation claire, mais sa vraie valeur tient aussi dans sa base technique : une interface React reliee a un backend Node.js, avec gestion de donnees, authentification, logique applicative et exigences de securite conformes a un projet full-stack serieux.",
    goal:
      "Le but du projet est d'allier une experience utilisateur rassurante et immersive a une architecture technique fiable, capable de soutenir un vrai produit avec ses regles metier, ses flux de donnees et ses contraintes de securite.",
    highlights: [
      "Univers visuel coherent avec l'image d'un studio de tatouage.",
      "Navigation simple pour decouvrir les artistes, les services et la prise de rendez-vous.",
      "Frontend React connecte a un backend Node.js avec gestion des donnees, authentification et logique metier."
    ],
    focus: [
      "L'ambiance de marque et la confiance des visiteurs.",
      "La mise en avant des services proposes par le salon.",
      "Une architecture full-stack plus robuste, securisee et conforme aux attentes d'un projet complet."
    ],
    tags: ["React", "Node.js", "Full-stack", "Securite"],
    image: "img/inkmaster-preview.png",
    imageAlt: "Capture du projet InkMaster",
    imageFit: "cover",
    siteUrl: "https://inkmaster.netlify.app/",
    accent: "#ff7a59",
    accentStrong: "#ff4d2d",
    accentShadow: "rgba(255, 122, 89, 0.32)",
    glow: "rgba(255, 122, 89, 0.20)"
  },
  "boxing-social": {
    title: "BoxingSocial",
    badge: "Univers boxe",
    kicker: "Application PHP natif",
    intro:
      "BoxingSocial ne repose pas seulement sur une identite visuelle forte : le vrai projet est developpe en PHP natif, avec une logique applicative construite pour un usage complet.",
    description:
      "BoxingSocial est centre sur l'univers de la boxe, avec une direction visuelle marquee et une structure pensee pour donner plus de presence a la thematique. Derriere cette facade, le vrai site est developpe en PHP pur, avec backend, gestion de donnees, logique metier, securisation des flux et exigences de conformite dignes d'un projet complet.",
    goal:
      "Le but du projet est de proposer une entree visuelle percutante pour les passionnes de boxe tout en affirmant qu'il s'agit d'une vraie application, construite sur un socle PHP solide et pensee avec des contraintes reelles de donnees, de logique metier et de securite.",
    highlights: [
      "Direction visuelle sportive et immediatement reconnaissable.",
      "Mise en avant d'un univers plus immersif avant l'exploration du contenu.",
      "Developpement en PHP natif avec backend sur mesure, gestion des donnees et exigences de securite."
    ],
    focus: [
      "Une ambiance graphique plus intense et plus memorisable.",
      "Une entree de site qui donne du caractere au projet.",
      "La mise en avant d'un projet complet, structure, securise et conforme avant l'ouverture du site."
    ],
    tags: ["PHP natif", "Backend", "Projet complet", "Securite"],
    image: "img/boxing-social-full-logo.png",
    imageAlt: "Logo du projet BoxingSocial",
    imageFit: "contain",
    siteUrl: "https://boxing-social.netlify.app/",
    accent: "#f24b2d",
    accentStrong: "#c61f06",
    accentShadow: "rgba(242, 75, 45, 0.34)",
    glow: "rgba(242, 75, 45, 0.19)"
  },
  "montres-luxe": {
    title: "Montres de luxe",
    badge: "E-commerce JS",
    kicker: "Projet boutique en ligne",
    intro:
      "Une page intermediaire qui explique rapidement l'intention du projet avant l'acces au site complet.",
    description:
      "Ce projet met en scene un site e-commerce autour de montres haut de gamme. Le travail porte sur la presentation visuelle des produits, une navigation simple et un rendu plus premium cote front-end.",
    goal:
      "Le but du projet est de valoriser des produits premium dans une interface claire, elegante et suffisamment directe pour guider l'utilisateur vers l'exploration du catalogue.",
    highlights: [
      "Presentation visuelle des produits avec une ambiance plus luxe.",
      "Travail sur le rythme visuel et les interactions front-end en JavaScript.",
      "Interface pensee pour mettre les produits au centre de l'experience."
    ],
    focus: [
      "La perception haut de gamme du catalogue.",
      "Une navigation front-end plus fluide pour consulter les montres.",
      "Un positionnement plus premium dans le rendu du site."
    ],
    tags: ["Projet personnel", "JavaScript", "E-commerce"],
    image: "img/rolex-watches444.gif",
    imageAlt: "Apercu du site e-commerce de montres de luxe",
    imageFit: "cover",
    siteUrl: "https://montre-de-luxe-ys.netlify.app/",
    accent: "#c8a24d",
    accentStrong: "#9f7410",
    accentShadow: "rgba(200, 162, 77, 0.28)",
    glow: "rgba(200, 162, 77, 0.16)"
  }
};

const fallbackProject = {
  title: "Projet introuvable",
  badge: "Portfolio",
  kicker: "Fiche projet",
  intro:
    "Le projet demande n'a pas ete trouve. Vous pouvez revenir a la liste des realisations pour choisir une fiche valide.",
  description:
    "Cette fiche n'est pas reliee a un projet existant du portfolio. La navigation reste disponible pour revenir aux realisations.",
  goal:
    "Le but de cette page est surtout d'eviter une erreur vide et de garder un passage propre dans la navigation du portfolio.",
  highlights: [
    "Retour rapide vers la liste des projets.",
    "Aucune erreur brutale si un lien est incomplet.",
    "Navigation maintenue vers le portfolio et le CV."
  ],
  focus: [
    "Une experience plus propre en cas de lien invalide.",
    "Une navigation qui ne bloque pas l'utilisateur.",
    "Un fallback simple et lisible."
  ],
  tags: ["Portfolio", "Navigation"],
  image: "img/web-2592005_1280.jpg",
  imageAlt: "Illustration generique du portfolio",
  imageFit: "cover",
  siteUrl: "index.html#work-title",
  accent: "#37b5ff",
  accentStrong: "#0a7fff",
  accentShadow: "rgba(55, 181, 255, 0.32)",
  glow: "rgba(55, 181, 255, 0.18)"
};

function fillList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function fillTags(element, tags) {
  element.innerHTML = "";
  tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "project-tag";
    span.textContent = tag;
    element.appendChild(span);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");
  const project = projects[slug] || fallbackProject;
  const isKnownProject = Boolean(projects[slug]);

  document.title = `${project.title} - Portfolio Serge Weber`;
  document.documentElement.style.setProperty("--project-accent", project.accent);
  document.documentElement.style.setProperty("--project-accent-strong", project.accentStrong);
  document.documentElement.style.setProperty("--project-accent-shadow", project.accentShadow);
  document.documentElement.style.setProperty("--project-glow", project.glow);

  const title = document.getElementById("project-title");
  const badge = document.getElementById("project-badge");
  const kicker = document.getElementById("project-kicker");
  const intro = document.getElementById("project-intro");
  const description = document.getElementById("project-description");
  const goal = document.getElementById("project-goal");
  const image = document.getElementById("project-image");
  const visual = document.getElementById("project-visual");
  const breadcrumb = document.getElementById("project-breadcrumb-current");
  const siteLink = document.getElementById("project-site-link");
  const highlights = document.getElementById("project-highlights");
  const focus = document.getElementById("project-focus");
  const tags = document.getElementById("project-tags");
  const metaDescription = document.querySelector('meta[name="description"]');

  title.textContent = project.title;
  badge.textContent = project.badge;
  kicker.textContent = project.kicker;
  intro.textContent = project.intro;
  description.textContent = project.description;
  goal.textContent = project.goal;
  breadcrumb.textContent = project.title;
  image.src = project.image;
  image.alt = project.imageAlt;

  visual.classList.toggle("is-contain", project.imageFit === "contain");

  fillList(highlights, project.highlights);
  fillList(focus, project.focus);
  fillTags(tags, project.tags);

  siteLink.href = project.siteUrl;
  if (!isKnownProject) {
    siteLink.removeAttribute("target");
    siteLink.textContent = "RETOUR AU PORTFOLIO";
  }

  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      `${project.title} : descriptif du projet, but et acces au site depuis le portfolio de Serge Weber.`
    );
  }
});
