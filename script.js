// Funzione per cambiare la lingua e reindirizzare alla pagina corretta
function changeLanguage(language) {
    const currentPath = window.location.pathname; // Ottieni il percorso corrente della pagina
    let newPath;

    // Cambia il percorso della pagina in base alla lingua selezionata
    if (language === "it") {
        newPath = currentPath.replace("-en", ""); // Se è in inglese, cambia a italiano
    } else if (language === "en") {
        newPath = currentPath.replace(".html", "-en.html"); // Se è in italiano, cambia a inglese
    }

    // Redirige alla pagina nella lingua selezionata
    window.location.href = newPath;
}

// Funzione per aprire e chiudere il menu mobile con effetto X
function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    const hamburger = document.querySelector(".hamburger");
    const body = document.body;

    if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
        navMenu.classList.add("hide");
        hamburger.classList.remove("open");
        body.classList.remove("no-scroll");

        setTimeout(() => {
            navMenu.classList.remove("hide");
        }, 500);
    } else {
        navMenu.classList.add("show");
        navMenu.classList.remove("hide");
        hamburger.classList.add("open");
        body.classList.add("no-scroll");
    }
}

// Evita che il menu si apra automaticamente al caricamento sulla versione mobile
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector("nav ul");
    const hamburger = document.querySelector(".hamburger");

    if (window.innerWidth <= 768) {
        navMenu.classList.remove("show");
        hamburger.classList.remove("open");
    }
});
