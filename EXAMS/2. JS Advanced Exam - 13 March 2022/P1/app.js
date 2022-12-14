function solve() {
    let recipientInput = document.getElementById('recipientName');
    let titletInput = document.getElementById('title');
    let messagetInput = document.getElementById('message');

    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    let list = document.getElementById('list');
    let sentList = document.getElementsByClassName('sent-list')[0];
    let deleteList = document.getElementsByClassName('delete-list')[0];

    addBtn.addEventListener('click', addFunction);
    resetBtn.addEventListener('click', resetFunction);

    function createElement(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    }

    function addFunction(e) {
        let recipient = recipientInput.value;
        let title = titletInput.value;
        let message = messagetInput.value;

        e.preventDefault();
        if (recipient != '' && title != '' && message != '') {
            let li = document.createElement('li');
            list.appendChild(li);
            li.appendChild(createElement('h4', 'Title: ' + title));
            li.appendChild(createElement('h4', 'Recipient Name: ' + recipient));
            li.appendChild(createElement('span', message));
            let div = createElement('div');
            div.id = 'list-action';
            li.appendChild(div);
            let sendBtn = createElement('button', 'Send');
            sendBtn.type = 'submit';
            sendBtn.id = 'send';
            sendBtn.addEventListener('click', send);
            div.appendChild(sendBtn);
            let deletedBtn = createElement('button', 'Delete');
            deletedBtn.type = 'submit';
            deletedBtn.id = 'delete';
            deletedBtn.addEventListener('click', deleteEmailfromList);
            div.appendChild(deletedBtn);
            recipientInput.value = '';
            titletInput.value = '';
            messagetInput.value = '';
        }
    }

    function resetFunction(e) {
        e.preventDefault();
        recipientInput.value = '';
        titletInput.value = '';
        messagetInput.value = '';
    }

    function send(e) {
        e.preventDefault();
        let targetLi = e.target.parentNode.parentNode;
        let data = targetLi.querySelectorAll('h4');
        let li = document.createElement('li');
        list.appendChild(li);
        li.appendChild(createElement('span', 'To: ' + (data[1].textContent).slice(16)));
        li.appendChild(createElement('span', 'Title: ' + (data[0].textContent).slice(7)));
        let div = createElement('div');
        div.className = "btn";
        li.appendChild(div);
        let btn = createElement('button', 'Delete', 'delete');
        btn.type = "submit";
        btn.addEventListener('click', deleteEmailfromSent);
        div.appendChild(btn);
        sentList.appendChild(li);
        targetLi.remove();
    }

    function deleteEmailfromList(e) {
        e.preventDefault();
        let fromLi = e.target.parentNode.parentNode;
        let li = document.createElement('li');
        deleteList.appendChild(li);
        li.appendChild(createElement('span', 'To: ' + fromLi.children[1].textContent.slice(16)));
        li.appendChild(createElement('span', 'Title: ' + fromLi.children[0].textContent.slice(7)));
        e.target.parentNode.parentNode.remove();

    }

    function deleteEmailfromSent(e) {
        e.preventDefault();
        let fromLi = e.target.parentNode.parentNode;
        // e.target.parentNode.parentNode.remove();
        fromLi.children[2].remove();
        deleteList.appendChild(fromLi);

    }
}
solve()