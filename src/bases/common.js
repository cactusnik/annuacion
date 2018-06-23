const menu = require('../components/navs/nav_main/main_nav');
const tabConst = require('../components/others/tab/tab');
function init () {
    let domTab = document.querySelector('.tab');
    let tab = new  tabConst(domTab);
    tab.init();
    console.log(tab);
    menu.init();
}

module.exports = {
    init: init
};