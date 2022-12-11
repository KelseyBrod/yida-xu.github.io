// Get the navbar element
const navbar = document.querySelector('.navbar');

// Add the "slide-in" class when the user scrolls down
window.onscroll = function() {
  if (window.pageYOffset > 100) {
    navbar.classList.add('slide-in');
  } else {
    navbar.classList.remove('slide-in');
  }
}
