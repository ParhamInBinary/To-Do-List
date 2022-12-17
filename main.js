import { startTimeAndDate } from "./JS-files/startTimeAndDate.js";
import { loadCalendarDays } from "./JS-files/loadCalendar.js";
import { switchMonth } from "./JS-files/loadCalendar.js";
import { openMyEvents } from "./JS-files/openMyEvents.js";
import { openAddEventWindow } from "./JS-files/openAddEventWindow.js";
import { closeAddEventWindow } from "./JS-files/closeAddEventWindow.js";
import { addEventToLS } from "./JS-files/addEventToLS.js";
import { addEventToList } from "./JS-files/addEventToList.js";


main();

/**
 * Reading in the main function.
 */
function main() {
  startTimeAndDate();
  loadCalendarDays();
  addEventListeners();
  switchMonth();
  addEventToList();
}

/**
 * EventListeners thoughout the script.
 */
function addEventListeners() {
  document
    .querySelector(".eventDropdown")
    .addEventListener("click", openMyEvents);
  document
    .querySelector(".addEvent")
    .addEventListener("click", openAddEventWindow);
  document
    .querySelector(".closeAddEventWindow")
    .addEventListener("click", closeAddEventWindow);
  document.querySelector("#submitEvent").addEventListener("click", () => {
    addEventToLS();
    addEventToList();
    closeAddEventWindow();
  });
}