"use strict";

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

function showModal() {
    overlay.style.display = "flex";
}

function closeModal() {
    overlay.style.display = "none";
}