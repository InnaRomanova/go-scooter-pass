//Слайдер
const slider = document.querySelector(".access__image-block");
const sliders = document.querySelectorAll(".access__image_icon");
const nextButton = document.querySelector(".access__rigth");
const prevButton = document.querySelector(".access__left");

//const slides = Array.from(slider.querySelectorAll(".access__image"));
const slides = document.querySelector(".slides");
const arrSlide = Array.from(slides.children);
const slideCount = sliders.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// // Функция для показа предыдущего слайда
function showPreviousSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlider();
  } else {
    prevButton.classList.add("access__button_disabled");
  }
}

// Функция для показа следующего слайда
function showNextSlide() {
  if (slideIndex < arrSlide.length - 1) {
    slideIndex++;
    updateSlider();
  } else {
    nextButton.classList.add("access__button_disabled");
  }
}

// Функция для обновления отображения слайдера

function updateSlider() {
  if (window.innerWidth > 1033) {
    // показываем все слайды
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "flex";
    }
  } else {
    arrSlide.forEach(function callback(value, index) {
      if (index == slideIndex) {
        value.style.display = "block";
      } else {
        value.style.display = "none";
      }
    });
 
  }
}
