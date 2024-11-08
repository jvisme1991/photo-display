const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})



document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
    perPage: 3,
    type: 'loop',
    focus: 0,
    omitEnd: true,
    play: true,
    paginationDirection: 'ttb',
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 4000,
    pauseonHover: true,
    pauseOnFocus: true,
    breakpoints: {
      1020: {perPage: 2},
      590: {perPage: 1},
    }
  } 
).mount();
} );

document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', function () {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});


// Function to detect if the device is a touch device
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Function to check if an element is fully in the viewport
function isFullyInView(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (isTouchDevice()) {
  const cards = document.querySelectorAll('.service-card');

  function handleScroll() {
      cards.forEach(card => {
          if (isFullyInView(card)) {
              card.classList.add('scale-up');
          } else {
              card.classList.remove('scale-up');
          }
      });
  }

  // Add scroll event listener to check cards on scroll
  window.addEventListener('scroll', handleScroll);

  // Initial check in case any cards are in view on page load
  handleScroll();
}
