const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // animate icon
  navLinks.classList.toggle('show'); // slide menu
  // accessibility
  hamburger.setAttribute(
    'aria-expanded',
    hamburger.classList.contains('active')
  );
});
