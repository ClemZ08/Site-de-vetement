function updateTime() {
  const now = new Date();
  
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const timeString = hours + ':' + minutes;
  document.getElementById('time').textContent = timeString;
}

updateTime();

setInterval(updateTime, 60 * 1000);

function updateDate() {
  const now = new Date();
  
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');  // Les mois sont de 0 (janvier) à 11 (décembre) dans JavaScript.
  const year = now.getFullYear();

  const dateString = day + '/' + month + '/' + year;
  document.getElementById('date').textContent = dateString;
}

updateDate();

const searchBar = document.querySelector('.input');
const suggestedArticles = document.querySelector('.suggested-articles');

// Affichez la liste déroulante lorsque la barre de recherche est cliquée
searchBar.addEventListener('focus', function() {
    suggestedArticles.style.display = 'block';
});

// Cachez la liste déroulante lorsque l'utilisateur clique ailleurs sur la page
document.addEventListener('click', function(event) {
    if (!searchBar.contains(event.target) && !suggestedArticles.contains(event.target)) {
        suggestedArticles.style.display = 'none';
    }
});

