


// Get a reference to the dropdown menu
const themeSelect = document.getElementById('theme-selected');

// Listen for when the user selects a new option
themeSelect.addEventListener('change', function() {
  const selectedTheme = this.value;
  
  // Set the data-theme attribute on the root HTML element
  document.documentElement.setAttribute('data-theme', selectedTheme);

  localStorage.setItem('theme', selectedTheme);
});

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSelect.value = savedTheme;
}

// Get reference to timer buttons
const pomodoroBtn = document.getElementById('pomodoro-btn');
const shortBreakBtn = document.getElementById('short-break-btn');
const longBreakBtn = document.getElementById('long-break-btn');

// Get refence to displayed time
const timeDisplay = document.querySelector('.time-display');

// Reference to start pause button
const startPauseBtn = document.getElementById('start-pause-btn');

let durations = {                 // Default values 
    pomodoro: 25 ,
    shortBreak: 5 ,
    longBreak: 10 
};


const savedPomodoro = localStorage.getItem('pomodoro');

if (savedPomodoro) {
    durations.pomodoro = Number(savedPomodoro);
}

const savedShort = localStorage.getItem('short');
const savedLong = localStorage.getItem('long');
if (savedShort) {
    durations.shortBreak = Number(savedShort);
}
if (savedLong) {
    durations.longBreak = Number(savedLong);
}


// Keeping track of currently selected mode
let currentMode = 'pomodoro';
pomodoroBtn.classList.add('active');

// All other declarations
const modeCycle = [
    'pomodoro',
    'shortBreak',
    'pomodoro',
    'shortBreak',
    'pomodoro',
    'longBreak'
];

let cycleIndex = 0;

// Timer state

let timeRemaining = durations[currentMode] * 60;    //  <------------

let countdownInterval = null;
let isRunning = false;

let cycleRunning = false;

const timerSound = new Audio('alexis_gaming_cam-timer-terminer-342934.mp3');

const resetBtn = document.getElementById('reset-btn');



// 1. Get references to the HTML elements
const selectElement = document.getElementById('number-select');



const settingsBtn = document.querySelector('.custom-time-setting');
const settingPop = document.getElementById('setting-pop');
const closeSettings = document.getElementById('close-settings');




// Function for displaying time on screen
function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    timeDisplay.textContent =
        `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}


// Function for selecting a mode
function selectMode(mode) {
    clearInterval(countdownInterval);
    countdownInterval = null;

    currentMode = mode;
    displayTime(durations[mode] * 60);  //  Converting min to sec

    // Highlight the active mode button
    let activeBtn;
    pomodoroBtn.classList.remove('active');
    shortBreakBtn.classList.remove('active');
    longBreakBtn.classList.remove('active');
    if (currentMode === 'pomodoro') {
        activeBtn = pomodoroBtn;
    } else if(currentMode === 'shortBreak') {
        activeBtn = shortBreakBtn;
    } else if(currentMode === 'longBreak') {
        activeBtn = longBreakBtn;
    }
    activeBtn.classList.add('active');
    

    timeRemaining = durations[currentMode] * 60;    //  Converting min to sec
    isRunning = false;
    startPauseBtn.textContent = 'Start';
}

// Connecting the buttons
pomodoroBtn.addEventListener('click', function() {
    
    selectMode('pomodoro');
    // cycleRunning = true;
    
});

shortBreakBtn.addEventListener('click', function() {
    selectMode('shortBreak');
    cycleRunning = false;
});

longBreakBtn.addEventListener('click', function() {    
    selectMode('longBreak');
    cycleRunning = false;
});



// Display initial time

displayTime(timeRemaining );    


// Start the timer

function startTimer() {

    countdownInterval = setInterval(() => {

        timeRemaining--;
        
        if (timeRemaining <= 0) {
            timeRemaining = 0;

            timerSound.play();

            displayTime(timeRemaining);

            clearInterval(countdownInterval);
            countdownInterval = null;

            isRunning = false;
            startPauseBtn.textContent = 'Start';

            if (cycleRunning === true) {
                moveToNextMode();
            }
            return;
        }

        displayTime(timeRemaining);

    }, 1000);
}


// Start / Pause button

startPauseBtn.addEventListener('click', function() {

    if (!isRunning) {

        if (currentMode === 'pomodoro'){        // Initialtes pomodoro auto cycle
            cycleRunning = true;
            // cycleIndex = 0;                  // <----It was resetting the index on pause in case of cycle in pomodoro mode.
        }

        startTimer();

        isRunning = true;
        startPauseBtn.textContent = 'Pause';

    } else {

        clearInterval(countdownInterval);
        countdownInterval = null;

        isRunning = false;
        startPauseBtn.textContent = 'Start';
    }

});



function moveToNextMode() {
    cycleIndex++

    if (cycleIndex < modeCycle.length){
        selectMode(modeCycle[cycleIndex]);
        startTimer();
        isRunning = true;
        startPauseBtn.textContent = 'Pause';

    } else {
        cycleIndex = 0;
        selectMode(modeCycle[cycleIndex]);
        cycleRunning = false;
    }
}

resetBtn.addEventListener('click', function() {
    clearInterval(countdownInterval);
    countdownInterval = null;

    timeRemaining = durations[currentMode] * 60;     //  Converting min to sec
    displayTime(timeRemaining);

    isRunning = false;
    cycleRunning = false;
    cycleIndex = 0;

    startPauseBtn.textContent = 'Start';
}
)



//  Define our number boundaries for settings pomodoro time dropdown
const startNum = 25;
const endNum = 55;

//  Populate the dropdown dynamically using a loop
for (let i = startNum; i <= endNum; i++) {
    // Create a new <option> element
    const option = document.createElement('option');
    
    // Set both the value attribute and the visible text
    option.value = i;
    option.textContent = i;

    if (i === Number(savedPomodoro)) {
        option.selected = true;
    } else if (!savedPomodoro && i === 25){
        option.selected = true;
    }

    
    // Append the newly created option to the select element
    selectElement.appendChild(option);    
}



const shortBreak = document.getElementById('short-break');

//  Define our short break duration boundaries for settings dropdown
const startShort = 5;
const endShort = 15;

//  Populate the dropdown dynamically using a loop
for (let i = startShort; i <= endShort; i++) {
    // Create a new <option> element
    const option = document.createElement('option');
    
    // Set both the value attribute and the visible text
    option.value = i;
    option.textContent = i;
    
    // if (i === 5) {
    //     option.selected = true;
    // }
    if (i === Number(savedShort)) {
        option.selected = true;
    } else if (!savedShort && i === 5){
        option.selected = true;
    }
    

    // Append the newly created option to the select element
    shortBreak.appendChild(option);
}



const longBreak = document.getElementById('long-break');


//  Define our long break duration boundaries
const startLong = 10;
const endLong = 25;

//  Populate the dropdown dynamically using a loop
for (let i = startLong; i <= endLong; i++) {
    // Create a new <option> element
    const option = document.createElement('option');
    
    // Set both the value attribute and the visible text
    option.value = i;
    option.textContent = i;
    
    if (i === Number(savedLong)) {
        option.selected = true;
    } else if (!savedLong && i === 10){
        option.selected = true;
    }
    
    // Append the newly created option to the select element
    longBreak.appendChild(option);
}



const customApply = document.getElementById('custom-time');

customApply.addEventListener('click', function(){
    durations.pomodoro = Number(selectElement.value);   
    
    localStorage.setItem('pomodoro', durations.pomodoro);
    
    durations.shortBreak = Number(shortBreak.value);
    localStorage.setItem('short', durations.shortBreak);

    durations.longBreak = Number(longBreak.value);
    localStorage.setItem('long', durations.longBreak);

    timeRemaining = durations[currentMode] * 60;
    displayTime(timeRemaining);
});



settingsBtn.addEventListener('click', function() {
    settingPop.style.display = 'block';
});



closeSettings.addEventListener('click', function() {
    settingPop.style.display = 'none';
});




