function time() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedDateTime = now.toLocaleDateString('fr-FR', options);

  document.getElementById('time').textContent = formattedDateTime;
}
time();
setInterval(time, 1000);


document.getElementById('showSlideBtn').addEventListener('click', function() {
  const slide = document.getElementById('slide');
  slide.classList.toggle('visible');
});
