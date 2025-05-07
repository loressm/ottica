// header.js
document.addEventListener('DOMContentLoaded', function () {
    // Selezioniamo l'elemento dove inseriremo l'header
    const headerElement = document.getElementById('dynamic-header');
  
    // Carichiamo il contenuto del file header.html
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            headerElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Errore nel caricare l\'header:', error);
        });
});

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show'); // Alterna la visibilità del menu
}
