"use strict";

// get DOM elements
const startCookingPage = document.getElementById("startCookingPage");
const configPage = document.getElementById("configPage");
const timerPage = document.getElementById("timerPage");
const startCookingBtn = document.getElementById("startCookingBtn");



startCookingBtn.addEventListener("click", () => {
    showConfigPage();
});


function showStartCookingPage() {
    startCookingPage.style.display = "block";
    configPage.style.display = "none";
    timerPage.style.display = "none";
}

function showConfigPage() {
    startCookingPage.style.display = "none";
    configPage.style.display = "block";
    timerPage.style.display = "none";
}

function showTimerPage() {
    startCookingPage.style.display = "none";
    configPage.style.display = "none";
    timerPage.style.display = "block";
}


// initially show Start Cooking Page
showStartCookingPage();