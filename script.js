let menuToggle = document.getElementById('nav-menu');
let navBar = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  if (navBar.style.display === 'flex') {
    navBar.style.display = 'none';
  } else {
    navBar.style.display = 'flex';
  }
});