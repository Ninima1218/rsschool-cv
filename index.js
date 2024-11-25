const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function showSlide(n) {
    index = (n + slide.length) % slide.length; 
    slides.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

const burgerMenu = document.querySelector('.burger-menu');
const navUl = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navUl.classList.toggle('active');
});
