main();

/**
 * Reading in the main function.
 */
function main() {
    startTimeAndDate();
}

/**
 * A function start a interval of 1s to simulate a clock ticking.
 */
function startTimeAndDate() {
    setInterval(tick, 1000);
}

/**
 * Gets the current time and date.
 */
function tick() {
    const currently = new Date();
    updateTime(currently);
    updateMonth(currently);
    updateDay(currently);
    updateYear(currently);
}

/**
 * Function to get the current month.
 * @param {Date} today 
 */
function updateMonth(today) {
    const date = document.querySelector(".date");
    const monthElement = document.createElement("p");
    date.innerHTML = "";
    date.append(monthElement);
    monthElement.textContent = getMonth(today) + "/";
}

/**
 * A function displaying the current month as a number.
 * @param {Date} today 
 * @returns {String} A number representing the current month.
 */
function getMonth(today) {
    const month = today.getMonth();

    switch (month) {
        case 0: return "01"
        case 1: return "02"
        case 2: return "03"
        case 3: return "04"
        case 4: return "05"
        case 5: return "06"
        case 6: return "07"
        case 7: return "08"
        case 8: return "09"
        case 9: return "10"
        case 10: return "11"
        case 11: return "12"
    }
}

/**
 * Function to display the time as a digital clock.
 * @param {Date} today 
 */
function updateTime(today) {
    const clock = document.querySelector(".clock")
    const time = today.toTimeString().split(" ")[0];
    clock.textContent = time;
}