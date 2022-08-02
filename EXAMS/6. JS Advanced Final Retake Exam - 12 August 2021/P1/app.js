window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');

    let totalPrice = document.getElementsByClassName('total-price');
    let tbody = document.getElementById('furniture-list');
    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', add);


    function createElement(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }


    function add(event) {
        event.preventDefault();

        let model = modelInput.value;
        let year = Number(yearInput.value);
        let description = descriptionInput.value;
        let price = Number(priceInput.value);

        if (!model || !year || !description || !price || year < 0 || price < 0 || model == '' || description == '') {
            return;
        }

        let tr = createElement('tr');
        tr.setAttribute('class', 'info');
        createElement('td', `${model}`, tr);
        createElement('td', `${price.toFixed(2)}`, tr);
        let td = createElement('td', '', tr);

        let moreInfoBtn = createElement('button', 'More Info', td);
        moreInfoBtn.setAttribute('class', 'moreBtn');

        let buyBtn = createElement('button', 'Buy it', td);
        buyBtn.setAttribute('class', 'buyBtn');

        let tr2 = createElement('tr');
        tr2.setAttribute('class', 'hide');
        createElement('td', `Year: ${year}`, tr2);
        let td2 = createElement('td', `Description: ${description}`, tr2);
        td2.setAttribute('colspan', '3');

        tbody.appendChild(tr);
        tbody.appendChild(tr2);

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';



        moreInfoBtn.addEventListener('click', (event) => {
            if (event.currentTarget.textContent == 'More Info') {
                event.currentTarget.textContent = 'Less Info';
                tr2.style.display = 'contents';
            } else {
                event.currentTarget.textContent = 'More Info';
                tr2.style.display = 'none';
            }
        });

        buyBtn.addEventListener('click', () => {
            let currPrice = Number(totalPrice.textContent);
            let newPrice = currPrice + price;

            totalPrice.textContent = newPrice.toFixed(2);

            tbody.removeChild(tr);
            tbody.removeChild(tr2);
        });

    }
}