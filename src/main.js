"use strict";
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("dark");
  } else {
    header.classList.remove("dark");
  }
});

const navbarMenu = document.querySelector(".header_menu");
const toggleBtn = document.querySelector(".header_toggle");
toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
