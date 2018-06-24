const Swiper = require('swiper/dist/js/swiper.min');

const sliderNewsSettings = {
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 576px
        576: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        }
    }
};

function init() {
    const sliderMain = new Swiper('.slider_news .slider__container', sliderNewsSettings)
}

module.exports = {
    init: init
};