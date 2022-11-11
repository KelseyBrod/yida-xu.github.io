// Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X and https://codepen.io/Prachl/pen/jjKzEy -Kelsey

window.addEventListener('scroll', parallax);


function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector(".header");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * .8) + 'px';
  var coords2 = (scrolled * .2) + 'px';
  parallax.style.transform = 'translateY(' + coords + ')';
  parallaxH.style.transform = 'translateX(' + coords2 + ')';
};

