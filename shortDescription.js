let articles = document.querySelectorAll('.blog-article.short');

for (let article of articles) {
    let moreButton = article.querySelector('.more');
    moreButton.onclick = function() {
        article.classList.remove('short');
    }
}