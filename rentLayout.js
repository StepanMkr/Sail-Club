let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');
let cardList = document.querySelector('.cards');

listViewButton.onclick = function() {
    cardList.classList.add('list');
    listViewButton.classList.add('active');
    gridViewButton.classList.remove('active');
}

gridViewButton.onclick = function() {
    cardList.classList.remove('list');
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
}