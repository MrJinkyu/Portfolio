"use strict";
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("dark");
  } else {
    header.classList.remove("dark");
  }
});
