window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

// 1️ Sélectionne toutes les sections qui ont la classe "hidden"
const hiddenSections = document.querySelectorAll('.hidden');

// 2️ Crée un observateur qui surveille si un élément devient visible
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // 3️ Vérifie si l'élément est dans le viewport
        if (entry.isIntersecting) {
            // 4️ Ajoute la classe "show" pour déclencher l'animation
            entry.target.classList.add('show');

            // 5️ Arrête d'observer cet élément après l'animation (gain de performance)
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 }); // 6️ Déclenche l’animation quand 20% de l’élément est visible

// 7️ Applique l'observateur à toutes les sections cachées
hiddenSections.forEach(section => {
    observer.observe(section);
});

const animateProgressBar = (entries, observer) => {
    entries.forEach(entry => { // ✅ Correction ici

        if (entry.isIntersecting){

            const progress = entry.target;
            const percent = progress.getAttribute('data-percent');
            progress.style.width = percent + "%";
            observer.unobserve(progress);

        };
    });
};
const progressBars = document.querySelectorAll('.progress');
const progressObserver = new IntersectionObserver(animateProgressBar, {threshold: 0.5});
progressBars.forEach(bar => {
    progressObserver.observe(bar);
});
