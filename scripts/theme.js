let darkTehemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');

darkTehemeButton.onclick = function() {
    document.body.classList.add('dark');
    darkTehemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
}

lightThemeButton.onclick = function() {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkTehemeButton.classList.remove('active');
}