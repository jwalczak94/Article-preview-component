"use strict";

const modal = document.getElementById("open-toggle");
const btn = document.querySelector(".share-icon");
const svg = document.querySelector(".icon");

document.querySelector(".share-icon").addEventListener("click", function () {
  modal.classList.toggle("open");
  btn.classList.toggle("bg-dark");
  svg.classList.toggle("fill-white");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    modal.classList.remove("open");
    btn.classList.remove("bg-dark");
    svg.classList.remove("fill-white");
  }
});
