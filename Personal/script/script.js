// Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X and https://codepen.io/Prachl/pen/jjKzEy -Kelsey

window.addEventListener('scroll', parallax);


function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector(".header");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * .4) + 'px';
  parallax.style.transform = 'translateY(' + coords + ')';
  
};

