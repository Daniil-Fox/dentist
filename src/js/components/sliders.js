import { Swiper } from "swiper";

import { Navigation, Thumbs } from "swiper/modules";

Swiper.use([Navigation, Thumbs]);
new Swiper(".team__slider", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    prevEl: ".team-prev",
    nextEl: ".team-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    560: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".testi__slider", {
  slidesPerView: 2,
  spaceBetween: 20,

  navigation: {
    prevEl: ".testi-prev",
    nextEl: ".testi-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

new Swiper(".about-lic__slider", {
  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".articles__slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: ".articles-prev",
    nextEl: ".articles-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".about-slider__slider", {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    prevEl: ".about-slider__btn--prev",
    nextEl: ".about-slider__btn--next",
  },
});
const drThumbs = new Swiper(".dr-lic__thumbs", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 20,
});
new Swiper(".dr-lic__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  thumbs: {
    swiper: drThumbs,
  },
  navigation: {
    prevEl: ".lic-prev",
    nextEl: ".lic-next",
  },
});

const baThumbs = new Swiper(".ba__thumbs", {
  slidesPerView: 4,
  spaceBetween: 20,
});

const baSlider = new Swiper(".ba__slider", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: ".ba-prev",
    nextEl: ".ba-next",
  },
  thumbs: {
    swiper: baThumbs,
  },
});
window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  // const someFunc = (instance) => {
  //   if (instance) {
  //     instance.on("slideChange", function (e) {
  //       console.log("*** mySwiper.activeIndex", instance.activeIndex);
  //     });
  //   }
  // };

  resizableSwiper("(max-width: 1024px)", ".trust__slider", {
    spaceBetween: 20,
    slidesPerView: 2,
    navigation: {
      prevEl: ".trust-prev",
      nextEl: ".trust-next",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
    },
  });
  resizableSwiper("(max-width: 900px)", ".doctors-team__slider", {
    spaceBetween: 20,
    slidesPerView: 2,
    navigation: {
      prevEl: ".dt-prev",
      nextEl: ".dt-next",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      560: {
        slidesPerView: 2,
      },
    },
  });
});
