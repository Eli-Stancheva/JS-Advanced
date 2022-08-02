window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    let collected = document.querySelector('.all-hits-container');
    let saved = document.querySelector('.saved-container');
    let likes = document.querySelector('div.likes p');


    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        let iGenre = genre.value;
        let iName = name.value;
        let iAuthor = author.value;
        let iDate = date.value;

        if (!iGenre || !iName || !iAuthor || !iDate) {
            return;
        }

        let div = createElement('div');
        div.setAttribute('class', 'hits-info');
        let img = createElement('img', '', div);
        img.setAttribute('src', './static/img/img.png');
        createElement('h2', `Genre: ${iGenre}`, div);
        createElement('h2', `Name: ${iName}`, div);
        createElement('h2', `Author: ${iAuthor}`, div);
        createElement('h3', `Date: ${iDate}`, div);
        let saveBtn = createElement('button', 'Save song', div);
        saveBtn.setAttribute('class', 'save-btn');
        let likeBtn = createElement('button', 'Like song', div);
        likeBtn.setAttribute('class', 'like-btn');
        let deleteBtn = createElement('button', 'Delete', div);
        deleteBtn.setAttribute('class', 'delete-btn');
        collected.appendChild(div);

        saveBtn.addEventListener('click', (event) => {
            event.target.parentNode.remove();

            let div = createElement('div');
            div.setAttribute('class', 'hits-info');
            let img = createElement('img', '', div);
            img.setAttribute('src', './static/img/img.png');
            createElement('h2', `Genre: ${iGenre}`, div);
            createElement('h2', `Name: ${iName}`, div);
            createElement('h2', `Author: ${iAuthor}`, div);
            createElement('h3', `Date: ${iDate}`, div);
            let deleteBtn2 = createElement('button', 'Delete', div);
            deleteBtn2.setAttribute('class', 'delete-btn');
            saved.appendChild(div);

            deleteBtn2.addEventListener('click', (event) =>{
                event.target.parentNode.remove();
            })
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.setAttribute('disabled', '');
            let count = Number(likes.textContent.replace(/Total Likes: /g, ''));
            likes.textContent = `Total Likes: ${Number(count + 1)}`;
        });

        deleteBtn.addEventListener('click', (event) => {
            event.target.parentNode.remove();
        });

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
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