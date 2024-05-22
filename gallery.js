let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list li a');

for (let image in previews) {
    image.onclick = function(evt) {
        evt.perventDefault();
        mainImage.src = image.href;
        let currentActive = document.querySelector('.preview-list li .active');
        currentActive.classList.remove('active');
        image.classList.add('active');
    }
}