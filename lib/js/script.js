// Tambahkan kode JavaScript ini di bagian bawah file, sebelum tag </body>
document.getElementById("menu-toggle").addEventListener("click", function () {
  var mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

// Kode Swiper yang sudah ada
var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// Loading animation
