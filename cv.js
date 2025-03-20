document.addEventListener("DOMContentLoaded", function () {
    const cvFrame = document.getElementById("cv-frame");
    const fallback = document.getElementById("fallback");

    cvFrame.onerror = function () {
        fallback.style.display = "block";
        cvFrame.style.display = "none";
    };
});
