"use strict";

const toggle = document.getElementById("open-toggle");
const btn = document.querySelector(".share-icon");
const svg = document.querySelector(".icon");

document.querySelector(".share-icon").addEventListener("click", function () {
  toggle.classList.toggle("open");
  btn.classList.toggle("bg-dark");
  svg.classList.toggle("fill-white");
});
