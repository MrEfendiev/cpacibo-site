var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$('.catalog__btn-open').click(function(){
  $(".page__catalog_to").slideToggle(400);
  return false;
}); 


$('.catalog__button-close"').click(function(){
  $(".page__catalog_to").slideToggle(400);
  return false;
}); 


