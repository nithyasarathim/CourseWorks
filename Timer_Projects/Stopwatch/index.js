// Selecting the display element and buttons
const display = document.getElementById('stopwatch');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

// Initializing variables for tracking time and the interval
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Function to start the stopwatch
function start() {
    startTime = Date.now() - elapsedTime;  // Set the start time, subtracting elapsed time to continue from where it was paused
    timerInterval = setInterval(updateTime, 10);  // Update the display every 10ms

    // Disable the Start button and enable the Stop and Reset buttons
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

// Function to stop the stopwatch
function stop() {
    clearInterval(timerInterval);  // Stop the interval timer

    // Enable the Start button and disable the Stop button
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// Function to reset the stopwatch
function reset() {
    clearInterval(timerInterval);  // Stop the interval timer
    elapsedTime = 0;  // Reset elapsed time
    display.textContent = '00:00.00';  // Reset the display to initial value

    // Enable the Start button and disable the Stop and Reset buttons
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

// Function to update the display with the current elapsed time
function updateTime() {
    elapsedTime = Date.now() - startTime;  // Calculate the elapsed time
    display.textContent = formatTime(elapsedTime);  // Update the display with formatted time
}

// Function to format time in mm:ss.ms format
function formatTime(time) {
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}.${milliseconds}`;
}

// Attach event listeners to buttons
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

// Initialize the buttons' state
reset();
