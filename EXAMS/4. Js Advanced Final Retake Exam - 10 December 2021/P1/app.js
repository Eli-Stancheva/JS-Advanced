window.addEventListener('load', solve);

function solve() {
    let typeProduct = document.getElementById('type-product');
    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let sendBtn = document.getElementsByTagName('button')[0];
    let clearBtn = document.getElementsByTagName('button')[1];
    let resivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    sendBtn.addEventListener('click', send);
    clearBtn.addEventListener('click', clear);

    function send(event) {
        event.preventDefault();

        let product = typeProduct.value;
        let des = description.value;
        let name = clientName.value;
        let phone = clientPhone.value;

        if (!des || !name || !phone) {
            return;
        }

        let div = createElement('div');
        div.setAttribute('class', 'container');
        createElement('h2', `Product type for repair: ${product}`, div);
        createElement('h3', `Client information: ${name}, ${phone}`, div);
        createElement('h4', `Description of the problem: ${des}`, div);
        let startBtn = createElement('button', `Start repair`, div);
        startBtn.setAttribute('class', 'start-btn');
        let finishBtn = createElement('button', `finish repair`, div);
        finishBtn.setAttribute('class', 'finish-btn');
        finishBtn.setAttribute('disabled', '');
        resivedOrders.appendChild(div);

        startBtn.addEventListener('click', (event) => {
            event.preventDefault();
            startBtn.setAttribute('disabled', '');
            finishBtn.removeAttribute('disabled');
        });

        finishBtn.addEventListener('click', (event) => {
            event.preventDefault();
            event.target.parentNode.remove();

            let div = createElement('div');
            div.setAttribute('class', 'container');
            createElement('h2', `Product type for repair: ${product}`, div);
            createElement('h3', `Client information: ${name}, ${phone}`, div);
            createElement('h4', `Description of the problem: ${des}`, div);
            completedOrders.appendChild(div);
        });

        description.value = '';
        clientName.value = '';
        clientPhone.value = '';
    }

    function clear() {
        let parent = document.querySelectorAll('#completed-orders div');

        for (const child of parent) {
            completedOrders.removeChild(child);
        }
    }

    function createElement(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}