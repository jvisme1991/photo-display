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
    breakpoints: {
      640: {
        perPage: 1,
      }
    }
  } 
).mount();
} );

// var splide = new Splide( '.splide', {
//   type   : 'loop',
//   perPage: 3,
//   focus  : 'center',
// } );

// splide.mount();

