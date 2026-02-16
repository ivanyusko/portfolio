// Мобільне меню (Гамбургер)
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Закриття меню при натисканні на посилання
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Проста валідація форми
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Дякуємо! Ваше повідомлення відправлено (імітація).');
});