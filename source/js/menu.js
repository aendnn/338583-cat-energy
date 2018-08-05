var menu = document.querySelector(".main-nav");
var toggle = document.querySelector(".main-nav__toggle");

menu.classList.remove("main-nav--nojs");

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (menu.classList.contains("main-nav--opened")) {
    menu.classList.remove("main-nav--opened");
    menu.classList.add("main-nav--closed");
    }  else {
    menu.classList.add("main-nav--opened");
    menu.classList.remove("main-nav--closed");
  }
});
