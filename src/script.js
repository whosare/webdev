//Galaxy feature
const galaxy = document.getElementById('galaxyimg');

let angle = 0;          // current rotation in degrees
let speed = 6;          // degrees per second (a full turn takes 60s)
let spinning = true;
let lastTime = null;

// Runs about 60 times a second, in sync with the screen
function rotate(time) {
    if (lastTime !== null && spinning) {
        const seconds = (time - lastTime) / 1000; 
        angle = (angle + speed * seconds) % 360;
        galaxy.style.transform = `rotate(${angle}deg)`;
    }
    lastTime = time;
    requestAnimationFrame(rotate);
}

// only should be on the galaxy page
if (galaxy) {
    // Click the galaxy to pause or resume
    galaxy.addEventListener('click', () => {
        spinning = !spinning;
    });

    // Spin faster while mouse hover
    galaxy.addEventListener('mouseenter', () => { speed = 30; });
    galaxy.addEventListener('mouseleave', () => { speed = 6; });
    requestAnimationFrame(rotate);
}

//Mercury feature
const earthAge = document.getElementById('earthAge');
const mercuryAgeButton = document.getElementById('mercuryAgeButton');
const mercuryAgeResult = document.getElementById('mercuryAgeResult');

const MERCURY_YEAR_IN_DAYS = 88;   // one trip around the sun
const EARTH_YEAR_IN_DAYS = 365;

// x Earth years = (x * 365) / 88 = 87.1 Mercury years
function mercuryYears(earthYears) {
    return (earthYears * EARTH_YEAR_IN_DAYS) / MERCURY_YEAR_IN_DAYS;
}

function showMercuryAge() {
    const years = Number(earthAge.value);

    // Catch an empty box, text, or a negative age
    if (earthAge.value === '' || Number.isNaN(years) || years < 0) {
        mercuryAgeResult.textContent = 'Please enter your age as a positive number.';
        return;
    }

    const result = mercuryYears(years);
    mercuryAgeResult.textContent = `${years} Earth years = ${result.toFixed(1)} Mercury years!`;
}

// Only on the Mercury page
if (mercuryAgeButton) {
    mercuryAgeButton.addEventListener('click', showMercuryAge);

    // Pressing Enter in the box works too
    earthAge.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            showMercuryAge();
        }
    });
}

//Venus feature
const venusColorButton = document.getElementById('venusColorButton');
const venusColorPanel = document.getElementById('venusColorPanel');

// Flip color panel
function toggleVenusColors() {
    venusColorPanel.hidden = !venusColorPanel.hidden;

    venusColorButton.textContent = venusColorPanel.hidden ? 'Show colors' : 'Hide colors';
    venusColorButton.setAttribute('aria-expanded', String(!venusColorPanel.hidden));
}

//can only show on venus
if (venusColorButton) {
    venusColorButton.addEventListener('click', toggleVenusColors);
}

//Earth feature
const cleanTrashButton = document.getElementById('cleanTrashButton');
const trashImage = document.getElementById('trashImage');
const cleanTrashResult = document.getElementById('cleanTrashResult');

function cleanTheTrash() {
    // fade animation, then gone for good
    trashImage.classList.add('cleaned');
    setTimeout(() => { trashImage.hidden = true; }, 600);

    cleanTrashResult.textContent = 'Thank you for cleaning up, Earth looks better already!';
    cleanTrashButton.hidden = true;   //checker for empty
}

// only Earth page
if (cleanTrashButton) {
    cleanTrashButton.addEventListener('click', cleanTheTrash);
}



//Mars feature
const launchButton = document.getElementById('launchButton');
const spaceship = document.getElementById('spaceship');
const marsCartoon = document.getElementById('marsCartoon');
const marsFlightPath = document.getElementById('marsFlightPath');

let hasLaunched = false;

function launchSpaceship() {
    hasLaunched = !hasLaunched;

    if (hasLaunched) {
        // How far the ship can slide before it bumps into Mars
        const distance = marsFlightPath.clientWidth - marsCartoon.clientWidth - spaceship.clientWidth;

        spaceship.style.transform = `translateX(${distance}px)`;
        launchButton.textContent = 'Finished';
    } else {
        spaceship.style.transform = 'translateX(0)';
        launchButton.textContent = 'Start';
    }
}

// Only on the Mars page
if (launchButton) {
    launchButton.addEventListener('click', launchSpaceship);
}


//Jupiter Feature
const jupiter = document.getElementById('jupiterimg');


//Runs about 60 times a second, in sync with the screen
function rotateJ(time) {
    if (lastTime !== null && spinning) {
        const seconds = (time - lastTime) / 1000; 
        angle = (angle + speed * seconds) % 360;
        jupiter.style.transform = `rotate(${angle}deg)`;
    }
    lastTime = time;
    requestAnimationFrame(rotateJ);
}

//only should be on the jupiter page
if (jupiter) {
    //Click the jupiter to pause or resume
    jupiter.addEventListener('click', () => {
        spinning = !spinning;
    });

    //Spin faster while mouse hover
    jupiter.addEventListener('mouseenter', () => { speed = 30; });
    jupiter.addEventListener('mouseleave', () => { speed = 6; });
    requestAnimationFrame(rotateJ);
}