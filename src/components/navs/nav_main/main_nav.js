function init () {
    const mainNav = document.querySelector('.header__nav'),
          btnOpen = mainNav.querySelector('.header__btn-nav'),
          btnClose = mainNav.querySelector('.nav__btn');
    let nav = document.querySelector('.nav_main');


    btnOpen.addEventListener('click', function(){
        nav.classList.add('nav-main_active');
    });

    btnClose.addEventListener('click', function(){
        nav.classList.remove('nav-main_active');
    });

}

module.exports = {
    init: init
};