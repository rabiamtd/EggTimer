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



applyBtn.addEventListener('click', () => {
    // check if both boil type and egg size are selected
    if (selectedBoilType && selectedEggSize) {
        // calculate total time in seconds based on selected boil type and egg size
        const totalTimeInSeconds = eggTimes[selectedBoilType][selectedEggSize];
        // and display the timer with the calculated time
        displayTimer(totalTimeInSeconds);
        // then switch to the timer page to show the countdown
        showTimerPage();
    } else {
        alert("Please select Boil Type and Egg Size");
    }
});

// function to display timer in minutes and seconds format
function displayTimer(totalTimeInSeconds) {
    // calculate minutes and seconds from total time in seconds
    const minutes = Math.floor(totalTimeInSeconds / 60);
    const seconds = totalTimeInSeconds % 60;

    // then format minutes and seconds as two digit strings using slice
    const formattedMinutes = ('0' + minutes).slice(-2);
    const formattedSeconds = ('0' + seconds).slice(-2);

    // and update the timer display with the formatted time
    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
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