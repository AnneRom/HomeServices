document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuBody = document.getElementById('menuBody');

    menuToggle.addEventListener('click', () => {
        menuBody.classList.toggle('active');
        menuToggle.classList.toggle('open'); // змінюємо клас іконки для заміни на хрестик
    });
});
