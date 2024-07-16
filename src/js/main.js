import "./_components.js";

const burgerBtn = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const menuBody = menu.querySelector(".menu__body");

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("active");
});

menuBody.addEventListener("click", (e) => {
  e.stopPropagation();
});
menu.addEventListener("click", (e) => {
  menu.classList.remove("active");
});
