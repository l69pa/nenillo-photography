"use strict";

// Selections

const previews = document.querySelectorAll(".img-small");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal-content");

const form = document.getElementById("form");

const backToTopBtn = document.querySelector(".back-to-top");
const rootElement = document.documentElement;
const scrollTarget = document.querySelector(".contact");

// Functions

const closeModal = function (e) {
  if (e.target !== e.currentTarget) return;
  lightbox.style.display = "none";
};

const scrollToTop = function () {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      backToTopBtn.classList.add("showBtn");
    } else {
      backToTopBtn.classList.remove("showBtn");
    }
  });
};

// Lightbox feature
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

// Prevent submit

form.addEventListener("submit", (e) => e.preventDefault());
// Back to top button

backToTopBtn.addEventListener("click", scrollToTop);

let observer = new IntersectionObserver(callback);
observer.observe(scrollTarget);
