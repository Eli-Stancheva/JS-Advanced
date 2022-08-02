function calculator() {
    let selector1 = null;
    let selector2 = null;
    let resultSelector = null;

    return{
        init,
        add,
        subtract
    };

    function init(s1, s2, rSelector){
        selector1 = document.querySelector(s1);
        selector2 = document.querySelector(s2);
        resultSelector = document.querySelector(rSelector);
    }

    function add(){
        resultSelector.value = Number(selector1.value) + Number(selector2.value);
    }

    function subtract(){
        resultSelector.value = Number(selector1.value) - Number(selector2.value);
    } 
}




