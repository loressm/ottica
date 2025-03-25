// Funzione per cambiare la lingua
function changeLanguage(page) {
    window.location.href = page; // Ricarica la pagina in base alla selezione
}

// Funzione per aprire e chiudere il menu mobile con effetto X
function toggleMenu() {
    const navMenu = document.querySelector("nav ul");  // Seleziona il menu
    const hamburger = document.querySelector(".hamburger");  // Seleziona l'icona hamburger
    const body = document.body;  // Seleziona il body della pagina

    // Se il menu è già aperto (ha la classe 'show')
    if (navMenu.classList.contains("show")) {
        // Aggiungi la classe 'hide' per chiuderlo con animazione
        navMenu.classList.remove("show");
        navMenu.classList.add("hide");

        // Rimuovi la classe 'open' dall'icona hamburger per tornare alla forma normale
        hamburger.classList.remove("open");

        // Rimuovi la classe 'no-scroll' dal body per riabilitare lo scroll
        body.classList.remove("no-scroll");

        // Dopo 0.5s (durata dell'animazione), rimuovi la classe 'hide' per ripulire la logica futura
        setTimeout(() => {
            navMenu.classList.remove("hide");
        }, 500); // Sincronizzare con la durata dell'animazione
    } else {
        // Se il menu è chiuso, aggiungi la classe 'show' per aprirlo con animazione
        navMenu.classList.add("show");
        navMenu.classList.remove("hide");

        // Aggiungi la classe 'open' all'icona hamburger per trasformarla in "X"
        hamburger.classList.add("open");

        // Aggiungi la classe 'no-scroll' al body per disabilitare lo scroll
        body.classList.add("no-scroll");
    }
}

// Evita che il menu si apra automaticamente al caricamento sulla versione mobile
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector("nav ul");
    const hamburger = document.querySelector(".hamburger");

    // Solo se la larghezza della finestra è mobile (<= 768px)
    if (window.innerWidth <= 768) {
        // Rimuovi la classe 'show' al caricamento per evitare che il menu appaia automaticamente
        navMenu.classList.remove("show");
        // Rimuovi la classe 'open' sull'hamburger per evitare che diventi "X"
        hamburger.classList.remove("open");
    }
});
