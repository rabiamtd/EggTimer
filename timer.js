"use strict";

// egg boiling times in seconds
const eggTimes = {
    soft: {
        small: 180,
        medium: 240,
        large: 300
    },
    medium: {
        small: 240,
        medium: 300,
        large: 360
    },
    hard: {
        small: 420,
        medium: 480,
        large: 540
    }
};

// get DOM elements
const startCookingPage = document.getElementById("startCookingPage");
const configPage = document.getElementById("configPage");
const timerPage = document.getElementById("timerPage");
const startCookingBtn = document.getElementById("startCookingBtn");
const applyBtn = document.getElementById("applyBtn");
const startBtn = document.getElementById("startBtn");
const timerDisplay = document.getElementById("timerDisplay");
const boilTypeBtns = document.querySelectorAll(".boilTypeBtn");
const eggSizeBtns = document.querySelectorAll(".eggSizeBtn");

let selectedBoilType = "";
let selectedEggSize = "";
let countdown;


startCookingBtn.addEventListener("click", () => {
    showConfigPage();
});

// add click event listeners to the boil type buttons
boilTypeBtns.forEach((button) => {
    button.addEventListener("click", () => {
        selectedBoilType = button.value;
        updateButtonSelection(button, boilTypeBtns);
    });
});

eggSizeBtns.forEach((button) => {
    button.addEventListener("click", () => {
        selectedBoilType = button.value;
        updateButtonSelection(button, eggSizeBtns);
    })
})

function updateButtonSelection(selectedButton, buttons) {
    buttons.forEach((button) => {
        if (button === selectedButton) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    });
}



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