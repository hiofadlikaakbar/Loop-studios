const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const xMark = document.querySelector("#close");
burger.addEventListener("click", () => {
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
xMark.addEventListener("click", () => {
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
