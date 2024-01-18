// swiper

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 4500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });