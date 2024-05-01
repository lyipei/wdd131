window.addEventListener('load', () => {
    const year = document.getElementById('currentyear');
    year.innerHTML = new Date().getFullYear();
});

window.addEventListener('load', () => {
    const modified = document.getElementById('lastModified');
    modified.innerHTML = document.lastModified;
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.menu');
    const navMenu = document.querySelector('nav ul');

    hamburgerBtn.addEventListener('clock', function() {
        navMenu.classList.toggle('hide-menu');
    });

});