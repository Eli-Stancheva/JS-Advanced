function toggle() {
    let text = document.getElementById('extra');
    let buttonCurrname = document.getElementsByClassName('button')[0];

    if(buttonCurrname.textContent == 'More'){
        buttonCurrname.textContent = 'Less';
        text.style.display = 'block';
    } else {
        buttonCurrname.textContent = 'More';
        text.style.display = 'none';
    }
}