var button = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);
