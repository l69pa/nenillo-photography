"use strict";

// Selections

const previews = document.querySelectorAll(".img-small");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal-content");

// Functions

const closeModal = function (e) {
  if (e.target !== e.currentTarget) return;
  lightbox.style.display = "none";
};

// Event handlers
previews.forEach((preview) => {
  preview.addEventListener("click", function (e) {
    lightbox.style.display = "block";
    const modalImg = document.createElement("img");
    modalImg.src = preview.src;

    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }
    modal.appendChild(modalImg);
  });
});

closeBtn.addEventListener("click", closeModal);
lightbox.addEventListener("click", closeModal);
