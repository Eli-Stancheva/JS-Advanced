function getArticleGenerator(articles) {
    let div = document.getElementById('content');

    return function () {
        if(articles.length !== 0){
            const content = articles.shift() //removes first element from the array
            const element = document.createElement('article');
            element.textContent = content;
            div.appendChild(element);    
        }
    }
}

