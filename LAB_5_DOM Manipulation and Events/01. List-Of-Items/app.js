function addItem() {
    let text = document.getElementById('newItemText').value; 
    let li = document.createElement('li');
    li.textContent = text;
    let ul = document.querySelector('ul');
    ul.appendChild(li);
    document.getElementById('newItemText').value = '';
}