const userLocation = navigator.language;

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
}

/**
 * Function to display the current weekday.
 */
function updateWeekday() {
  const weekday = new Date();
  const weekdayToString = weekday
    .toLocaleString(userLocation, {
      weekday: "long",
    })
    .toUpperCase();
  const weekdayDiv = document.querySelector(".todaysWeekday");
  weekdayDiv.textContent = weekdayToString;
}

/**
 * Function to display the current date.
 */
function updateDate() {
  const date = new Date();
  const dateToString = date.toLocaleString(userLocation, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const dateDiv = document.querySelector(".currentDate");
  dateDiv.textContent = "";
  dateDiv.textContent = dateToString;
}

/**
 * Function to display the time as a digital clock.
 */
function updateTime(today, locale) {
  const clock = document.querySelector(".clock");
  const time = today.toTimeString(locale).split(" ")[0];
  clock.textContent = time;
}
