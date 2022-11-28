var swiper = new Swiper('.mvSwiper', {
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 7000,
    waitForTransition: false,
  },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    // el: '.swiper-pagination',
    type: 'progressbar',
    clickable: true,
  },
});
