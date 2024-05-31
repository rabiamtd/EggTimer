"use strict";
const eggTimes = {
    soft: {
        small: 180,
        medium: 240,
        large: 300,
        xl: 360,
    },
    medium: {
        small: 240,
        medium: 300,
        large: 360,
        xl: 420,
    },
    hard: {
        small: 420,
        medium: 480,
        large: 540,
        xl: 600,
    }
};

const getStartedPage = document.getElementById("getStartedPage");
const configPage = document.getElementById("configPage");
const timerPage = document.getElementById("timerPage");

const getStartedBtn = document.getElementById("getStartedBtn");
const applyBtn = document.getElementById("applyBtn");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");

const timerDisplay = document.getElementById("timerDisplay");
const infoContainer = document.querySelector(".info-container");
const boilTypeBtns = document.querySelectorAll(".boilTypeBtn");
const eggSizeBtns = document.querySelectorAll(".eggSizeBtn");

let isTimerRunning = false;
let selectedBoilType = "";
let selectedEggSize = "";
let countdown;

getStartedBtn.addEventListener("click", () => {
    showConfigPage();
});

boilTypeBtns.forEach((button) => {
    button.addEventListener("click", () => {
        selectedBoilType = button.value;
        updateButtonSelection(button, boilTypeBtns);
    });
});

eggSizeBtns.forEach((button) => {
    button.addEventListener("click", () => {
        selectedEggSize = button.value;
        updateButtonSelection(button, eggSizeBtns);
    })
})

applyBtn.addEventListener("click", () => {
    if (selectedBoilType && selectedEggSize) {

        const totalTimeInSeconds = eggTimes[selectedBoilType][selectedEggSize];
        displayTimer(totalTimeInSeconds);
        showTimerPage();
    } else {
        showErrorModal();
    }
});

startBtn.addEventListener("click", () => {
    if (!isTimerRunning) {
        startTimer();
        isTimerRunning = true;
        startBtn.textContent = "Pause";
        startBtn.classList.add("pauseBtn");
    } else {
        pauseTimer();
        startBtn.classList.remove("pauseBtn");
        isTimerRunning = false;
        startBtn.textContent = "Resume";
    }
});

backBtn.addEventListener("click", () => {
    showResetModal();
});

resetConfirmBtn.addEventListener("click", () => {
    pauseTimer();
    hideResetModal();
    showConfigPage();
});

resetCancelBtn.addEventListener("click", () => {
    hideResetModal();
});

function displayTimer(totalTimeInSeconds) {
    const minutes = Math.floor(totalTimeInSeconds / 60);
    const seconds = totalTimeInSeconds % 60;

    const formattedMinutes = ('0' + minutes).slice(-2);
    const formattedSeconds = ('0' + seconds).slice(-2);

    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}


function showgetStartedPage() {
    getStartedPage.style.display = "block";
    configPage.style.display = "none";
    timerPage.style.display = "none";
}

function showConfigPage() {

    infoContainer.addEventListener("click", showInstructionsModal);

    getStartedPage.style.display = "none";
    configPage.style.display = "block";
    timerPage.style.display = "none";
}

function showTimerPage() {
    startBtn.textContent = "Start";
    getStartedPage.style.display = "none";
    configPage.style.display = "none";
    timerPage.style.display = "block";
}


function startTimer() {
    backBtn.disabled = true;

    const displayedTime = timerDisplay.textContent.split(':');
    const minutes = parseInt(displayedTime[0]);
    const seconds = parseInt(displayedTime[1]);

    const totalTimeInSeconds = minutes * 60 + seconds;

    let totalTime = totalTimeInSeconds;

    const startButtonOverlay = document.querySelector('.start-button-overlay');

    countdown = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "00:00";
            showTimeoutModal();
        } else {
            totalTime--;

            const progress = (totalTimeInSeconds - totalTime) / totalTimeInSeconds;
            startButtonOverlay.style.width = `${progress * 100}%`;

            displayTimer(totalTime);
        }
    }, 1000);
}

timeoutCloseBtn.addEventListener("click", () => {
    hideTimeoutModal();
    showConfigPage();
});

function pauseTimer() {
    backBtn.disabled = false;
    clearInterval(countdown);
}

function updateButtonSelection(selectedButton, buttons) {
    const isSelected = selectedButton.classList.contains("selected");

    buttons.forEach((button) => {
        button.classList.remove("selected");
    });

    if (!isSelected) {
        selectedButton.classList.add("selected");
    }
}

showgetStartedPage();