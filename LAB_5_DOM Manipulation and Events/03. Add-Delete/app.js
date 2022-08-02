function addItem() {
    const text = document.getElementById('newItemText'); 

    const li = document.createElement('li');
    li.textContent = text.value;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', onDelete);

    document.getElementById('items').appendChild(li);
    
    text.value = '';

    function onDelete(event){
        //и така става
        //const parent = li.parentNode;
        //parent.removeChild(li);

        event.target.parentNode.remove();
    }
}