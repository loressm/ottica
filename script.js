document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    // Assicura che il menu sia nascosto inizialmente e non visibile
    navMenu.style.transform = "translateX(-100%)";  // Menu nascosto
    navMenu.style.transition = "none";  // Disabilita temporaneamente la transizione

    // Funzione per aprire e chiudere il menu mobile con effetto X
    function toggleMenu() {
        // Se il menu è nascosto, lo apriamo con transizione
        if (navMenu.style.transform === "translateX(-100%)") {
            navMenu.style.transition = "transform 0.3s ease-in-out";  // Aggiungi la transizione solo quando il menu si apre
            navMenu.style.transform = "translateX(0)";  // Mostra il menu
        } else {
            navMenu.style.transition = "transform 0.3s ease-in-out";  // Riattiva la transizione quando si chiude
            navMenu.style.transform = "translateX(-100%)";  // Nascondi il menu
        }

        // Cambia l'icona dell'hamburger in X
        hamburger.classList.toggle("open");
    }

    // Aggiungi l'eventListener per il clic sull'icona hamburger
    hamburger.addEventListener("click", toggleMenu);
});
