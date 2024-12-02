document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let slideIndex = 0;
  const slideWidth = document.querySelector('.slide').offsetWidth; // Ширина одного слайда

  prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + 4) % 4; // 4 - количество слайдов
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`; // Прокручиваем слайдер влево
  });

  nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % 4; // 4 - количество слайдов
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`; // Прокручиваем слайдер вправо
  });
});
