// Nav background on scroll
const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});