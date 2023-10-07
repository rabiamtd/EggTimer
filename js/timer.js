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
const getStartedPage = document.getElementById("getStartedPage");
const configPage = document.getElementById("configPage");
const timerPage = document.getElementById("timerPage");

const getStartedBtn = document.getElementById("getStartedBtn");
const applyBtn = document.getElementById("applyBtn");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const backBtn = document.getElementById("backBtn");

const timerDisplay = document.getElementById("timerDisplay");
const boilTypeBtns = document.querySelectorAll(".boilTypeBtn");
const eggSizeBtns = document.querySelectorAll(".eggSizeBtn");

let selectedBoilType = "";
let selectedEggSize = "";
let countdown;

getStartedBtn.addEventListener("click", () => {
    showConfigPage();
});

// add click event listeners to the boil type buttons
boilTypeBtns.forEach((button) => {
    button.addEventListener("click", () => {
        selectedBoilType = button.value;
        updateButtonSelection(button, boilTypeBtns);
    });
});

// add click event listeners to the egg size buttons
eggSizeBtns.forEach((button) => {
    button.addEventListener("click", () => {
        selectedEggSize = button.value;
        updateButtonSelection(button, eggSizeBtns);
    })
})

applyBtn.addEventListener("click", () => {
    // check if both boil type and egg size are selected
    if (selectedBoilType && selectedEggSize) {
        // calculate total time in seconds based on selected boil type and egg size
        const totalTimeInSeconds = eggTimes[selectedBoilType][selectedEggSize];
        // and display the timer with the calculated time
        displayTimer(totalTimeInSeconds);
        // then switch to the timer page to show the countdown
        showTimerPage();
    } else {
        showErrorModal();
    }
});

startBtn.addEventListener("click", () => {
    startTimer();
});

pauseBtn.addEventListener("click", () => {
    resetTimer();
});

backBtn.addEventListener("click", () => {
    showResetModal();
});

resetConfirmBtn.addEventListener("click", () => {
    resetTimer();
    hideResetModal();
    showConfigPage();
});

resetCancelBtn.addEventListener("click", () => {
    hideResetModal();
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

function showgetStartedPage() {
    getStartedPage.style.display = "block";
    configPage.style.display = "none";
    timerPage.style.display = "none";
}

function showConfigPage() {
    getStartedPage.style.display = "none";
    configPage.style.display = "block";
    timerPage.style.display = "none";
}

function showTimerPage() {
    pauseBtn.disabled = true;
    getStartedPage.style.display = "none";
    configPage.style.display = "none";
    timerPage.style.display = "block";
}


// function to start the countdown timer based on the displayed time
function startTimer() {
    // enable stop button when the timer starts
    pauseBtn.disabled = false;
    // disable back button when the timer starts
    backBtn.disabled = true;

    // get the displayed time from the timer display and parse minutes and seconds
    const displayedTime = timerDisplay.textContent.split(':');
    const minutes = parseInt(displayedTime[0]);
    const seconds = parseInt(displayedTime[1]);

    // calculate total time in seconds
    const totalTimeInSeconds = minutes * 60 + seconds;

    // initialize the countdown timer with the total time
    let totalTime = totalTimeInSeconds;

    // start a countdown interval that updates the timer every second
    countdown = setInterval(() => {
        // check if the total time has elapsed
        if (totalTime <= 0) {
            // clear the interval, set timer display to '00:00', show alert, and go back to configuration page
            clearInterval(countdown);
            timerDisplay.textContent = "00:00";
            showTimeoutModal();
        } else {
            // decrement the total time by 1 second and update the timer display
            totalTime--;
            displayTimer(totalTime);
        }
    }, 1000);
}

// close the modal when the close button is clicked
timeoutCloseBtn.addEventListener("click", () => {
    hideTimeoutModal();
    showConfigPage();
});

function resetTimer() {
    // enable back button when the timer is reset
    backBtn.disabled = false;
    clearInterval(countdown); // clear the countdown interval
}

function updateButtonSelection(selectedButton, buttons) {
    buttons.forEach((button) => {
        if (button === selectedButton) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    });
}

// initially show Start Cooking Page
showgetStartedPage();