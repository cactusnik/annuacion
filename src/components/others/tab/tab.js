function Tab (tab){
    this.tab = tab;
    this.tabBtns = null;
    this.tabContent = null;
    this.carrentActive = 0;
}

Tab.prototype.init = function (){
    this.tabBtns = this.tab.querySelectorAll('.tab__btn');
    this.tabContent = this.tab.querySelectorAll('.tab__block');
    const _selfSet = this.setActive;
    const _selfRemove = this.removeActive;

    this.tabBtns.forEach((item,index) => {
        item.dataset.id = index;
        item.addEventListener('click', event => {
            this.getId(event);
        })
    });

}

Tab.prototype.setActive = function(id){
    this.carrentActive = id;
    this.tabBtns[this.carrentActive].classList.add('tab__btn_active');
    this.tabContent[this.carrentActive].classList.add('tab__block_active');
}

Tab.prototype.removeActive = function(){
    this.tabBtns[this.carrentActive].classList.remove('tab__btn_active');
    this.tabContent[this.carrentActive].classList.remove('tab__block_active');
}

Tab.prototype.getId = function(event) {
    let target = event.target;

    while(!target .classList.contains('tab__btn')) {
        target  = target .parentNode;
    }

   this.removeActive();
   this.setActive(target.dataset.id);
}

module.exports = Tab;


