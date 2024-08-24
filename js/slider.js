document.addEventListener('DOMContentLoaded', function() {
  function handleHashChange() {
    if (window.location.hash === '#guides/how-to-pay') {
      setTimeout(function() {
        document.querySelectorAll('.swiperContainer').forEach((container, index) => {
          const swiper = new Swiper(container.querySelector('.swiper'), {
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
    }
  }

  window.addEventListener('hashchange', handleHashChange);

  handleHashChange();
});
