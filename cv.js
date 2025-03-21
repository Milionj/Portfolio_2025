document.addEventListener("DOMContentLoaded", function () {
    const cvFrame = document.getElementById("cv-frame");
    const fallback = document.getElementById("fallback");
    const navbar = document.querySelector(".navbar");
    let lastScrollTop = 0;

    // 🛠 Vérifie si le PDF charge bien, sinon affiche l'alternative
    cvFrame.addEventListener("error", function () {
        fallback.style.display = "block";
        cvFrame.style.display = "none";
    });

    // 🛠 Animation de la navbar au scroll
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-70px"; // Cache la navbar quand on descend
        } else {
            navbar.style.top = "0"; // Affiche la navbar quand on remonte
        }
        lastScrollTop = scrollTop;
    });

    //  Smooth scroll pour le retour à l'accueil
    const btnRetour = document.querySelector(".btn-retour");
    if (btnRetour) {
        btnRetour.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500);
        });
    }

    //  Ajustement dynamique de la hauteur du CV en fonction de l’écran
    function adjustIframeSize() {
        let windowHeight = window.innerHeight;
        let navbarHeight = navbar.offsetHeight;
        let footerHeight = document.querySelector(".footer").offsetHeight;
        let availableHeight = windowHeight - navbarHeight - footerHeight - 20;

        cvFrame.style.height = availableHeight + "px";
    }

    adjustIframeSize();
    window.addEventListener("resize", adjustIframeSize);
});
