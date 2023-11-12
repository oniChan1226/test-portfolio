document.addEventListener('DOMContentLoaded', function () {
  // Get the elements you want to apply animations to
  const slideInLeftElements = document.querySelectorAll('.slide-in-left');
  const fadeInElements = document.querySelectorAll('.fade-in');
  const rotateElements = document.querySelectorAll('.rotate');
  const scaleInElements = document.querySelectorAll('.scale-in');
  const flipElements = document.querySelectorAll('.flip');

  // Function to add the scale-in class with a delay
  function applyScaleInWithDelay(element, delay) {
    setTimeout(function () {
      element.classList.add('scale-in');
    }, delay);
  }

  // Function to add the flip class with a delay
  function applyFlipWithDelay(element, delay) {
    setTimeout(function () {
      element.classList.add('flip');
    }, delay);
  }

  // Apply the scale-in animation with a staggered delay
  scaleInElements.forEach(function (element, index) {
    const delay = index * 300; // Adjust the delay as needed
    applyScaleInWithDelay(element, delay);
  });

  // Apply the flip animation with a staggered delay
  flipElements.forEach(function (element, index) {
    const delay = index * 300; // Adjust the delay as needed
    applyFlipWithDelay(element, delay);
  });
});

// mobile nav
const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

hamburger.addEventListener('click', (e) => {
  hamburgerMenu.classList.toggle('toggle-menu');
});
