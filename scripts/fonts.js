let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

serifButton.onclick = function() {
    document.body.classList.add('serif');
    sansSerifButton.classList.remove('active');
    serifButton.classList.add('active');
}

sansSerifButton.onclick = function() {
    document.body.classList.remove('serif');
    sansSerifButton.classList.add('active');
    serifButton.classList.remove('active');
}