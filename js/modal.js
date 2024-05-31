"use strict";

const overlay = document.getElementById("overlay");

const resetModal = document.getElementById("resetModal");
const timeoutModal = document.getElementById("timeoutModal");

const resetConfirmBtn = document.getElementById("resetConfirmBtn");
const resetCancelBtn = document.getElementById("resetCancelBtn");
const timeoutCloseBtn = document.getElementById("timeoutCloseBtn");

const errorModal = document.getElementById("errorModal");
const errorCloseBtn = document.getElementById("errorCloseBtn");

const instructionsModal = document.getElementById("instructionsModal");
const instructionsCloseBtn = document.getElementById("instructionsCloseBtn");


function showResetModal() {
    overlay.style.display = "block";
    resetModal.style.display = "block";
}

function hideResetModal() {
    overlay.style.display = "none";
    resetModal.style.display = "none";
}

function showTimeoutModal() {
    overlay.style.display = "block";
    timeoutModal.style.display = "block";
}

function hideTimeoutModal() {
    overlay.style.display = "none";
    timeoutModal.style.display = "none";
}

resetCancelBtn.addEventListener("click", () => {
    hideResetModal();
});

function showErrorModal() {
    overlay.style.display = "block";
    errorModal.style.display = "block";
}
function closeErrorModal() {
    errorModal.style.display = "none";
    overlay.style.display = "none";
}

errorCloseBtn.addEventListener("click", closeErrorModal);


function showInstructionsModal() {
    overlay.style.display = "block";
    instructionsModal.style.display = "block";
}
function closeInstructionsModal() {
    instructionsModal.style.display = "none";
    overlay.style.display = "none";
}
instructionsCloseBtn.addEventListener("click", closeInstructionsModal);
