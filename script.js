//Слайдер
const sliders = document.querySelectorAll(".access__image");
const slider = document.querySelector(".access__image-block");
const buttonRight = document.querySelector(".access__rigth");
const buttonLeft = document.querySelector(".access__left");
// const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlides = sliders.length;

//в начале нужны были, чтобы видеть.
slider.style.scale = 0.5;
slider.style.overflow = "visible";
