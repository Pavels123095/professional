// sliders
const clients = new Swiper(".clients-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".clients-slider-next",
    prevEl: ".clients-slider-prev",
  },
  pagination: {
    el: ".swiper-pagination-clients",
    clickable: true,
  },
  breakpoints: {
    1280: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1140: {
      slidesPerView: 6,
    },
    930: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    },
    374: {
      slidesPerView: 2,
    },
  },
});
const certificates = new Swiper(".certificates-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  watchOverflow: true,
  navigation: {
    nextEl: ".certificates-slider-next",
    prevEl: ".certificates-slider-prev",
  },
  pagination: {
    el: ".swiper-pagination-certificates",
    clickable: true,
  },
  breakpoints: {
    1030: {
      slidesPerView: 5,
      spaceBetween: 56,
    },
    870: {
      slidesPerView: 4,
    },
    660: {
      slidesPerView: 3,
    },
    460: {
      slidesPerView: 2,
    },
  },
});
const reviews = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  navigation: {
    nextEl: ".reviews-slider-next",
    prevEl: ".reviews-slider-prev",
  },
  pagination: {
    el: ".swiper-pagination-reviews",
    clickable: true,
  },
  breakpoints: {
    1281: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    720: {
      slidesPerView: 2,
      autoHeight: false,
    },
  },
});
const news = new Swiper(".news-detail-slider", {
  slidesPerView: 1,

  navigation: {
    nextEl: ".news-detail-slider-next",
    prevEl: ".news-detail-slider-prev",
  },
  pagination: {
    el: ".swiper-pagination-news-detail",
    clickable: true,
  },
  breakpoints: {},
});
const specialists = new Swiper(".specialists-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  watchOverflow: true,
  navigation: {
    nextEl: ".specialists-slider-next",
    prevEl: ".specialists-slider-prev",
  },
  pagination: {
    el: ".swiper-pagination-specialists",
    clickable: true,
  },
  breakpoints: {},
});
//
const aboutSmall = new Swiper(".aboutSmall-slider", {
  slidesPerView: 12,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {},
});
const aboutBig = new Swiper(".aboutBig-slider", {
  slidesPerView: 1,
  thumbs: {
    swiper: aboutSmall,
  },
  breakpoints: {},
});
const plan = new Swiper(".plan-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".plan-slider-next",
    prevEl: ".plan-slider-prev",
  },
  pagination: {
    el: ".swiper-pagination-plan",
    clickable: true,
  },
  breakpoints: {},
});
const graf = new Swiper(".graf-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".graf-slider-next",
    prevEl: ".graf-slider-prev",
  },
  pagination: {
    el: ".swiper-pagination-graf",
    clickable: true,
  },
  breakpoints: {},
});
const practice = new Swiper(".practice-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".practice-slider-next",
    prevEl: ".practice-slider-prev",
  },
  pagination: {
    el: ".swiper-pagination-practice",
    clickable: true,
  },
  breakpoints: {},
});
const shares = new Swiper(".shares-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".shares-slider-next",
    prevEl: ".shares-slider-prev",
  },
  pagination: {
    el: ".swiper-pagination-shares",
    clickable: true,
  },
  breakpoints: {},
});

// active classes
$(".filter__item").on("click", function () {
  $(".filter__item--active").removeClass("filter__item--active");
  $(this).addClass("filter__item--active");
});
$(".pagination__link").on("click", function () {
  $(".pagination__link--active").removeClass("pagination__link--active");
  $(this).addClass("pagination__link--active");
});
$(".dates__link").on("click", function () {
  $(".dates__link--active").removeClass("dates__link--active");
  $(this).addClass("dates__link--active");
});
$(".page-courses__alphabet-item").on("click", function () {
  $(".page-courses__alphabet-item--active").removeClass(
    "page-courses__alphabet-item--active"
  );
  $(this).addClass("page-courses__alphabet-item--active");
});

// contacts
$(".js-contact-item").on("click", function () {
  $(".contacts__right").addClass("contacts__right--active");
});

$(".js-contact-item").on("click", function () {
  let tabId = $(this).attr("data-id");
  let tabRight = $(".contacts__right");
  let selected = tabRight.find("[data-id=" + tabId + "]");

  $(".contacts__get-item--active").removeClass("contacts__get-item--active");
  $(this).addClass("contacts__get-item--active");

  tabRight
    .find(".contacts__right-item--active")
    .removeClass("contacts__right-item--active");

  selected.addClass("contacts__right-item--active");
});

$(".contacts__right-btn-hide").on("click", function () {
  $(".contacts__right").removeClass("contacts__right--active");
});

// questions
$(".questions__item-top").on("click", function () {
  $(this).parents(".questions__item").toggleClass("questions__item--active");
});

$(".about-courses__tabs-link").on("click", function () {
  let tabId = $(this).attr("data-id");
  let tabBottom = $(".about-courses__bottom");
  let selected = tabBottom.find("[data-id=" + tabId + "]");
  $(".about-courses__tabs-link--active").removeClass(
    "about-courses__tabs-link--active"
  );
  $(this).addClass("about-courses__tabs-link--active");
  tabBottom
    .find(".about-courses__item--active")
    .removeClass("about-courses__item--active");
  selected.addClass("about-courses__item--active");
});

// modals
$(".header__email-notation").on("click", function () {
  $(".modal--send").addClass("modal--active");
  $("body").addClass("overflow");
});
$(".header__number-notation").on("click", function () {
  $(".modal--call").addClass("modal--active");
  $("body").addClass("overflow");
});
$(".modal__close").on("click", function () {
  $(".modal--active").removeClass("modal--active");
  $("body").removeClass("overflow");
});

//
document.addEventListener("DOMContentLoaded", function () {
  const deadline = new Date(2022, 00, 20, 17, 30, 00);
  let timerId = null;
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? "0" + days : days;
    $hours.textContent = hours < 10 ? "0" + hours : hours;
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
  }
  const $days = document.querySelector(".timer__days");
  const $hours = document.querySelector(".timer__hours");
  const $minutes = document.querySelector(".timer__minutes");
  const $seconds = document.querySelector(".timer__seconds");
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});

$(".header__burger").on("click", function () {
  $(".mobile-menu").addClass("mobile-menu--active");
  $("body").addClass("overflow");
});
$(".mobile-menu__close").on("click", function () {
  $(".mobile-menu").removeClass("mobile-menu--active");
  $("body").removeClass("overflow");
});
