var button = document.querySelector(".burger");
var menu = document.querySelector(".menu");

var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

var closeMenu = function () {
  menu.classList.remove("is-open");
  button.classList.remove("is-active");
};

button.addEventListener("click", openMenu);

var menuLinks = menu.getElementsByTagName("a");

for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", closeMenu);
}
