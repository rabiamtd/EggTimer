"use strict";

const overlay = document.getElementById("overlay");

const resetModal = document.getElementById("resetModal");
const timeoutModal = document.getElementById("timeoutModal");

const resetConfirmBtn = document.getElementById("resetConfirmBtn");
const resetCancelBtn = document.getElementById("resetCancelBtn");
const timeoutCloseBtn = document.getElementById("timeoutCloseBtn");

const errorModal = document.getElementById("errorModal");
const errorCloseBtn = document.getElementById("errorCloseBtn");


// function to show the reset modal
function showResetModal() {
    overlay.style.display = "block";
    resetModal.style.display = "block";
}

// function to hide the reset modal
function hideResetModal() {
    overlay.style.display = "none";
    resetModal.style.display = "none";
}

// function to show the timeout modal
function showTimeoutModal() {
    overlay.style.display = "block";
    timeoutModal.style.display = "block";
}

// function to hide the timeout modal
function hideTimeoutModal() {
    overlay.style.display = "none";
    timeoutModal.style.display = "none";
}

resetCancelBtn.addEventListener("click", () => {
    hideResetModal();
});

function showErrorModal() {
    errorModal.style.display = "block";
}
function closeErrorModal() {
    errorModal.style.display = "none";
}

errorCloseBtn.addEventListener("click", closeErrorModal);
