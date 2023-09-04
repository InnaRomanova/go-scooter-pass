//Слайдер
const slider = document.querySelector(".access__image-block");
const sliders = document.querySelectorAll(".access__image_icon");
const nextButton = document.querySelectorAll(".access__rigth")[1];
const prevButton = document.querySelectorAll(".access__left")[1];

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
    arrSlide.forEach(function callback(value, index) {
      if (index == slideIndex) {
        value.style.display = "block";
      } else {
        value.style.display = "none";
      }
    });
    /*
    // показываем только текущий слайд
    for (let i = 0; i < slides.length; i++) {
      if (i === slideIndex) {
        console.log(slides[i]);
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
    */
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
//updateSlider();
