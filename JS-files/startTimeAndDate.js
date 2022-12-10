/**
* A function start a interval of 1s to simulate a clock ticking.
*/
export function startTimeAndDate() {
   setInterval(tick, 1000);
}
/**
* Gets the current time and date.
*/
function tick() {
    const currently = new Date();
    const locale = "en";
    updateWeekday();
    updateDate();
    updateTime(currently, locale);
    updateMonthName();
}

/**
* Function to display the current weekday.
*/
function updateWeekday() {
    const weekday = new Date();
    const weekdayToString = weekday.toLocaleString("UTC", {
        weekday: "long",
    }).toUpperCase() ;
    const weekdayDiv = document.querySelector(".todaysWeekday");
    weekdayDiv.textContent = weekdayToString;
}

/**
* Function to display the current date.
*/
function updateDate() {
    const date = new Date();
    const dateToString = date.toLocaleString("UTC", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
    const dateDiv = document.querySelector(".currentDate");
    dateDiv.innerHTML = "";
    dateDiv.textContent = dateToString
}

/**
* Function to display the time as a digital clock.
*/
function updateTime(today, locale) {
   const clock = document.querySelector(".clock")
   const time = today.toTimeString(locale).split(" ")[0];
   clock.textContent = time;
}

/**
* Function to display the name of current month.
*/
function updateMonthName() {
    const month = new Date();
    const monthToString = month.toLocaleString("UTC", {
        month: "long",
    }).toUpperCase() ;
    const monthDiv = document.querySelector(".currentMonth");
    monthDiv.textContent = monthToString;
}