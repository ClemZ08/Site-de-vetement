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
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  const dateString = day + '/' + month + '/' + year;
  document.getElementById('date').textContent = dateString;
}

updateDate();

const searchBar = document.querySelector('.input');
const suggestedArticles = document.querySelector('.suggested-articles');

searchBar.addEventListener('focus', function() {
    suggestedArticles.style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (!searchBar.contains(event.target) && !suggestedArticles.contains(event.target)) {
        suggestedArticles.style.display = 'none';
    }
});
document.addEventListener('click', function(event) {
    if (!searchBar.contains(event.target) && !suggestedArticles.contains(event.target)) {
        suggestedArticles.style.display = 'none';
    }
});

const cartIcon = document.getElementById('cart-icon');
const cart = document.getElementById('cart');
let cartVisible = false;

cartIcon.addEventListener('click', () => {
    if (cartVisible) {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
    }
    cartVisible = !cartVisible;
});

const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', function() {
    cart.style.display = 'none';
});
