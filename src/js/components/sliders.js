import { Swiper } from "swiper";

import { Navigation } from "swiper/modules";

Swiper.use([Navigation]);
new Swiper(".team__slider", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    prevEl: ".team-prev",
    nextEl: ".team-next",
  },
});

new Swiper(".testi__slider", {
  slidesPerView: 2,
  spaceBetween: 20,

  navigation: {
    prevEl: ".testi-prev",
    nextEl: ".testi-next",
  },
});
