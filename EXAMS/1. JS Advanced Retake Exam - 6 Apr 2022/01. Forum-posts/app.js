window.addEventListener("load", solve);

function solve() {
    let inputTitle = document.getElementById('post-title');
    let inputCategory = document.getElementById('post-category');
    let inputContent = document.getElementById('post-content');
    let reviewList = document.getElementById('review-list');
    let publishedList = document.getElementById('published-list');
    let publishBtn = document.getElementById('publish-btn');
    let clearBtn = document.getElementById('clear-btn');

    publishBtn.addEventListener('click', publish);
    clearBtn.addEventListener('click', clear);

    function publish(event) {
        event.preventDefault();

        let title = inputTitle.value;
        let category = inputCategory.value;
        let content = inputContent.value;

        if (!title || !category || !content) {
            return;
        }

        let li = createElement('li');
        li.setAttribute('class', 'rpost');

        let article = createElement('article', '', li);
        createElement('h4', `${title}`, article);
        createElement('p', `Category: ${category}`, article);
        createElement('p', `Content: ${content}`, article);
        let editBtn = createElement('button', 'Edit', li);
        editBtn.setAttribute('class', 'action-btn edit');
        let approveBtn = createElement('button', 'Approve', li);
        approveBtn.setAttribute('class', 'action-btn approve');
        reviewList.appendChild(li);

        editBtn.addEventListener('click', (event) => {
            event.target.parentNode.remove();

            inputTitle.value = title;
            inputCategory.value = category;
            inputContent.value = content;
        });

        approveBtn.addEventListener('click', (event) => {
            event.target.parentNode.remove();

            let li = createElement('li');
            li.setAttribute('class', 'rpost');

            let article = createElement('article', '', li);
            createElement('h4', `${title}`, article);
            createElement('p', `Category: ${category}`, article);
            createElement('p', `Content: ${content}`, article);

            publishedList.appendChild(li);
        });

        inputTitle.value = '';
        inputCategory.value = '';
        inputContent.value = '';
    }

    function clear() {
        publishedList.textContent = ''
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