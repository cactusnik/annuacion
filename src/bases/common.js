const menu = require('../components/navs/nav_main/main_nav');
const sliderNews = require('../components/others/slider/slider_news/slider_news')
const tabConst = require('../components/others/tab/tab');
const processHover = require('../components/others/process/process')
function init () {
    let domTab = document.querySelector('.tab');
    let tab = new  tabConst(domTab);
    tab.init();

    let domProcessList = document.querySelector('.process__list');
    let process = new processHover;
    process.init(domProcessList);
    menu.init();
    sliderNews.init();
}

module.exports = {
    init: init
};