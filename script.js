document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuBody = document.getElementById('menuBody');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', () => {
        menuBody.classList.toggle('active');
        menuToggle.classList.toggle('open'); // змінюємо клас іконки для заміни на хрестик
        overlay.classList.toggle('active');
    });

    window.addEventListener ('resize', () => {
        if (window.innerWidth > 767.98) {
            menuBody.classList.remove('active');
            menuToggle.classList.remove('open');
            menuBody.classList.add("no-transition");
        } else {
            menuBody.classList.remove("no-transition");
        }
    })
});
