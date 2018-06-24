const Swiper = require('swiper/dist/js/swiper.min');

const sliderNewsSettings = {
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
};

function init() {
    const sliderMain = new Swiper('.slider_news .slider__container', sliderNewsSettings)
}

module.exports = {
    init: init
};