// On attend que la page soit complètement chargée 
document.addEventListener('DOMContentLoaded', () => { 
    const searchBar = document.getElementById('search-bar'); 
    const songCards = document.querySelectorAll('.song-card'); 
 
    // Écoute chaque touche tapée dans la barre de recherche 
    searchBar.addEventListener('keyup', (e) => { 
        const searchString = e.target.value.toLowerCase(); 
 
        songCards.forEach((card) => { 
            // Récupère le titre et l'artiste de chaque carte 
            const title = card.querySelector('h3').textContent.toLowerCase(); 
            const artist = card.querySelector('p').textContent.toLowerCase(); 
 
            // Vérifie si la recherche correspond au titre OU à l'artiste 
            if (title.includes(searchString) || artist.includes(searchString)) { 
                card.style.display = 'block'; // Affiche la carte 
            } else { 
                card.style.display = 'none';  // Masque la carte 
            } 
        }); 
    }); 
}); 