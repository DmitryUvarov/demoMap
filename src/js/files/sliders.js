/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper"
import { Navigation } from "swiper/modules"
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss"
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	//   if (document.querySelector(".name__slider")) {
	//     new Swiper(".name__slider", {
	//       modules: [],
	//       observer: true,
	//       observeParents: true,
	//       slidesPerView: 1,
	//       spaceBetween: 0,
	//autoHeight: true,
	//   speed: 800,

	//   lazyPreloaderClass: "preloader",

	//   // Ефекти
	//   effect: "fade",
	//   autoplay: {
	//     delay: 3000,
	//     disableOnInteraction: false,
	//   },

	//   pagination: {
	//     el: ".test__slider .pagination",
	//     clickable: true,
	//   },
	//   pagination: {
	//     type: "fraction",
	//     el: ".test__slider .fraction",
	//     currentClass: "fraction__current",
	//     totalClass: "fraction__total",
	//   },

	//   // Скроллбар
	//   scrollbar: {
	//     el: ".test__slider .slider-scrollbar",
	//     dragClass: "slider-scrollbar__drag",
	//     draggable: true,
	//   },

	//   navigation: {
	//     prevEl: ".test__slider .button-prev",
	//     nextEl: ".test__slider .button-next",
	//   },

	// breakpoints: {
	// 	640: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		autoHeight: true,
	// 	},
	// 	768: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 20,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 20,
	// 	},
	// 	1268: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 30,
	// 	},
	// },

	// Події
	//   on: {},
	//     })
	//   }

	if (document.querySelector(".name__slider")) {
		new Swiper(".name__slider", {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,

			// lazyPreloaderClass: 'preloader',

			//   pagination: {
			//     el: ".test__slider .pagination",
			//     clickable: true,
			//   },

			//   navigation: {
			//     prevEl: ".test__slider .button-prev",
			//     nextEl: ".test__slider .button-next",
			//   },

			// breakpoints: {
			// 	640: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 0,
			// 		autoHeight: true,
			// 	},
			// 	768: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20,
			// 	},
			// 	992: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 20,
			// 	},
			// 	1268: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 30,
			// 	},
			// },
		})
	}
	/* AUTOPLAY LOGOS SLIDER

  //   &__wrapper {
  //   -webkit-transition-timing-function: linear !important;
  //   transition-timing-function: linear !important;
  // }

  if (document.querySelector(".partners__slider")) {
    new Swiper(".partners__slider", {
      modules: [Autoplay],
      observer: true,
      observeParents: true,

      speed: 5000,
      loop: true,
      slidesPerGroup: 6,
      allowTouchMove: false,

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 2.5,
          spaceBetween: 25,
        },
        479: {
          slidesPerView: 3.5,
          spaceBetween: 25,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        991: {
          slidesPerView: 5,
          spaceBetween: 60,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 100,
        },
      },
    })
  }
  */

	/* THUMBS SLIDER
  if (document.querySelector(".product__thumb-slider")) {
    const productTrumbSlider = new Swiper(".product__thumb-slider", {
      modules: [],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 10,
      speed: 800,
      // direction: 'vertical'
    })

    new Swiper(".product__slider", {
      modules: [Thumbs, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,

      // pagination: {
      // 	el: '.product-slider__pagination',
      // 	clickable: true,
      // },

      thumbs: {
        swiper: productTrumbSlider,
      },
    })
  }
  */

	/* MOBILE SLIDER
  for (const mobileSlider of document.querySelectorAll(".test__slider")) {
    if (mobileSlider) {
      ;(function () {
        "use strict"

        const breakpoint = window.matchMedia("(min-width:768px)")
        let slider

        const enableSwiper = function () {
          slider = new Swiper(".test__slider", {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1.5,
            spaceBetween: 20,
            //autoHeight: true,
            speed: 800,

            // lazyPreloaderClass: 'preloader',

            pagination: {
              el: ".test__slider .pagination",
              clickable: true,
            },
            navigation: {
              prevEl: ".test__slider .button-prev",
              nextEl: ".test__slider .button-next",
            },

            // Брейкпоінти
            breakpoints: {
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
            },
          })
        }

        const breakpointChecker = function () {
          if (breakpoint.matches === true) {
            if (slider !== undefined) {
              slider.destroy(true, true)
            }

            return
          } else if (breakpoint.matches === false) {
            return enableSwiper()
          }
        }

        breakpoint.addListener(breakpointChecker)
        breakpointChecker()
      })()
    }
  }
  */
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index]
			const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar")
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			})
			sliderScroll.scrollbar.updateSize()
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders()
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
})
