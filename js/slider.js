document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelectorAll('.swiperContainer').forEach((container, index) => {
      const swiper = new Swiper(container.querySelector('.newSwiper'), {
        navigation: {
          nextEl: container.querySelector('.next-btn'),
          prevEl: container.querySelector('.prev-btn'),
        },
        pagination: {
          el: container.querySelector('.swiper-pagination'),
          clickable: true,
        },
      });
    });
  }, 1000);
});
