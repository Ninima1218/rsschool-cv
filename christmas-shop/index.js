document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuContent = document.querySelector('.burger-menu-content');

    const toggleBurgerMenu = () => {
        burgerMenu.classList.toggle('active');
    };

    burgerMenu.addEventListener('click', toggleBurgerMenu);

    let slideIndex = 0;
    const slideWidth = document.querySelector('.slide').offsetWidth;

    const updateSlide = (index) => {
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    const showPrevSlide = () => {
        slideIndex = (slideIndex - 1 + 4) % 4;
        updateSlide(slideIndex);
    };

    const showNextSlide = () => {
        slideIndex = (slideIndex + 1) % 4; 
        updateSlide(slideIndex);
    };

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);
});

