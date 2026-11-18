//Galaxy feature
const galaxy = document.getElementById('galaxyimg');

let angle = 0; //current rotation in degrees
let speed = 6; //degrees per second (a full turn takes 60s)
let spinning = true;
let lastTime = null;

//Runs about 60 times a second, once per second
function rotate(time) {
    if (lastTime !== null && spinning) {
        const seconds = (time - lastTime) / 1000; 
        angle = (angle + speed * seconds) % 360;
        galaxy.style.transform = `rotate(${angle}deg)`;
    }
    lastTime = time;
    requestAnimationFrame(rotate);
}

//only should be on the galaxy page
if (galaxy) {
    requestAnimationFrame(rotate);
}


//Sun feature
const lifecycleButton = document.getElementById('lifecycleButton');
const lifecyclePanel = document.getElementById('lifecyclePanel');

function toggleLifecycle() {
    lifecyclePanel.hidden = !lifecyclePanel.hidden;

    lifecycleButton.textContent = lifecyclePanel.hidden ? 'Show lifecycle' : 'Hide lifecycle';
    lifecycleButton.setAttribute('aria-expanded', String(!lifecyclePanel.hidden));
}

// Only on the Sun page
if (lifecycleButton) {
    lifecycleButton.addEventListener('click', toggleLifecycle);
}



//Mercury feature
const earthAge = document.getElementById('earthAge');
const mercuryAgeButton = document.getElementById('mercuryAgeButton');
const mercuryAgeResult = document.getElementById('mercuryAgeResult');

const MERCURY_YEAR_IN_DAYS = 88;   //one trip around the sun
const EARTH_YEAR_IN_DAYS = 365;

//x Earth years = (x * 365) / 88
function mercuryYears(earthYears) {
    return (earthYears * EARTH_YEAR_IN_DAYS) / MERCURY_YEAR_IN_DAYS;//Calculation done in days
}

function showMercuryAge() {
    const years = Number(earthAge.value);
    //incorrect value, negative age, or empty
    if (earthAge.value === '' || Number.isNaN(years) || years < 0) {
        mercuryAgeResult.textContent = 'Please enter your age as a positive number.';
        return;
    }
    const result = mercuryYears(years);
    mercuryAgeResult.textContent = `${years} Earth years = ${result.toFixed(1)} Mercury years!`;
}

//Only on the Mercury page
if (mercuryAgeButton) {
    mercuryAgeButton.addEventListener('click', showMercuryAge);

    earthAge.addEventListener('click', (event) => {
            showMercuryAge();
    });
}

//Venus feature
const venusColorButton = document.getElementById('venusColorButton');
const venusColorPanel = document.getElementById('venusColorPanel');

//Flip color panel
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
    //fade animation, then gone for good
    trashImage.classList.add('cleaned');
    setTimeout(() => { trashImage.hidden = true; }, 600);

    cleanTrashResult.textContent = 'Thank you for cleaning up, Earth looks better already!';
    cleanTrashButton.hidden = true;   //checker for empty
}

//only Earth page
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
        //distance of slide between ship and mars
        const distance = marsFlightPath.clientWidth - marsCartoon.clientWidth - spaceship.clientWidth;

        spaceship.style.transform = `translateX(${distance}px)`;
        launchButton.textContent = 'Finished';
    } else {
        spaceship.style.transform = 'translateX(0)';
        launchButton.textContent = 'Start';
    }
}

//Only on the Mars page
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
    requestAnimationFrame(rotateJ);
}

//Saturn feature
const ringsButton = document.getElementById('ringsButton');
const saturnImage = document.getElementById('saturnImage');

const SATURN_WITH_RINGS = '/src/images/saturnWith.png';
const SATURN_WITHOUT_RINGS = '/src/images/saturnwithout.webp';

let hasRings = true;

//We swap src to change pictures
function toggleRings() {
    hasRings = !hasRings;

    if (hasRings) {
        saturnImage.src = SATURN_WITH_RINGS;
        saturnImage.alt = 'Saturn with its rings';
        ringsButton.textContent = 'Remove rings';
    } else {
        saturnImage.src = SATURN_WITHOUT_RINGS;
        saturnImage.alt = 'Saturn without its rings';
        ringsButton.textContent = 'Put rings back';
    }
}

//Only on the Saturn page
if (ringsButton) {
    ringsButton.addEventListener('click', toggleRings);
}


//Uranus feature
const diamondButton = document.getElementById('diamondButton');
const diamondPanel = document.getElementById('diamondPanel');

function toggleDiamondFact() {
    diamondPanel.hidden = !diamondPanel.hidden;

    diamondButton.textContent = diamondPanel.hidden ? 'Read more' : 'Read less';
    diamondButton.setAttribute('aria-expanded', String(!diamondPanel.hidden));
}

//Only on the Uranus page
if (diamondButton) {
    diamondButton.addEventListener('click', toggleDiamondFact);
}


//moon feature
const moonSpeed = document.getElementById('moonSpeed');
const moonTravelButton = document.getElementById('moonTravelButton');
const moonTravelResult = document.getElementById('moonTravelResult');

const MILES_TO_MOON = 238855;   //200k miles from Earth

function showTravelTime() {
    const speed = Number(moonSpeed.value);

    //allow only non empty, non negative
    if (moonSpeed.value === '' || Number.isNaN(speed) || speed <= 0) {
        moonTravelResult.textContent = 'Please enter a speed greater than 0.';
        return;
    }

    const hours = MILES_TO_MOON / speed;
    moonTravelResult.textContent = `At ${speed} mph it would take ${hours.toLocaleString()} hours.`;
}

//Only on the moon page
if (moonTravelButton) {
    moonTravelButton.addEventListener('click', showTravelTime);

    //Pressing Enter in the box works too
    moonSpeed.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            showTravelTime();
        }
    });
}