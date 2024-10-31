const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})



document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
    perPage: 2,
    type: 'loop',
    focus: 'center',
    breakpoints: {
      640: {
        perPage: 1,
      }
    }
  } 
).mount();
} );

var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 3,
  focus  : 'center',
} );

splide.mount();

