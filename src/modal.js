"use strict";
const projectBtns = document.querySelectorAll(".project_btn");
const modalWrap = document.querySelector(".modal-wrap");
const closeBtn = document.querySelector(".modal_close-btn");

projectBtns.forEach((button) => {
  button.addEventListener("click", openModal);
});

modalWrap.addEventListener("click", function (event) {
  if (event.target === modalWrap) {
    closeModal();
  }
});

closeBtn.addEventListener("click", closeModal);

function openModal() {
  modalWrap.style.display = "block";
}

function closeModal() {
  modalWrap.style.display = "none";
}
