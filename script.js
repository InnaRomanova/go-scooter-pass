//Слайдер
const slider = document.querySelector(".access__image-block");
const sliders = document.querySelectorAll(".access__image_icon");
const nextButton = document.querySelector(".access__rigth");
const prevButton = document.querySelector(".access__left");

const slides = Array.from(slider.querySelectorAll(".access__image"));
const slideCount = sliders.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// // Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
// function updateSlider() {
//   if (window.innerWidth <= 1033) {
//     sliders.forEach((slide, index) => {
//       if (index === slideIndex) {
//         slide.style.display = "block";
//       } else {
//         slide.style.display = "none";
//       }
//     });
//   }
// }
function updateSlider() {
  if (window.innerWidth > 1033) {
    // показываем все слайды
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "flex";
    }
  } else {
    // показываем только текущий слайд
    for (let i = 0; i < slides.length; i++) {
      if (i === slideIndex) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
  }
}
// function updateSlider() {
//   if (window.innerWidth >= 1033) {
//     // показываем все слайды
//     slides.style.display = "flex";
//   } else {
//     // показываем только текущий слайд
//     sliders.forEach((slide, index) => {
//       if (index === slideIndex) {
//         slide.style.display = "block";
//       } else {
//         slide.style.display = "none";
//       }
//     });
// for (let i = 0; i < slides.length; i++) {
//   if (i === slideIndex) {
//     slides[i].style.display = "block";
//   } else {
//     slides[i].style.display = "none";
//   }
// }
//   }
// }

// Инициализация слайдера
updateSlider();
