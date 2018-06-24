function Hover (){
    this.list = null;
    this.listItems = null;
    this.target = null;
    this.progress = null;
}

Hover.prototype.init = function(list){
    this.list = list;
    this.progress = this.list.querySelector('.process__progress');
    this.listItems = this.list.querySelectorAll('.process__step');

    //для прогресса
    this.listItems.forEach(function(item,index){
        item.dataset.id = ++index;
    })

    //если покинули весь лист удалить очистить классы
    this.list.addEventListener( 'mouseout', event => {
       this.removeClass();
    });

    //смотрит ховер по нужным элементам
    this.list.addEventListener( 'mouseover', event => {
        if(this.Check(event)){
            this.addClass();
        }
        else {
            this.removeClass();
        }
    });
}

Hover.prototype.Check = function (event) {
    let target = event.target;

    while(target != document.body && !target .classList.contains('process__icon-wrap') && !target .classList.contains('process__step-content')) {
        target  = target .parentNode;
    }
    if(target != document.body){
        this.target = target;
        return true;
    }

    return false;
}

Hover.prototype.addClass = function(){
    this.target.parentNode.classList.add('process__step_active');
    this.setpPogressBar();
}

Hover.prototype.removeClass = function(){
    if(this.target)
        this.target.parentNode.classList.remove('process__step_active');
    this.resetPogressBar();

}

Hover.prototype.setpPogressBar = function(){
    let dataId = this.target.parentNode.dataset.id;
    this.progress.style.height  = `${100 / this.listItems.length * dataId}%`;
}


Hover.prototype.resetPogressBar = function(){
    this.progress.style.height  = `0%`;
}

module.exports = Hover;