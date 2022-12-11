import { startTimeAndDate } from "./JS-files/startTimeAndDate.js";
import { loadCalendarDays } from "./JS-files/loadCalendarDays.js";
import { switchMonth } from "./JS-files/loadCalendarDays.js";
import { openMyEvents } from "./JS-files/openMyEvents.js";

main();

/**
 * Reading in the main function.
 */
function main() {
    startTimeAndDate();
    loadCalendarDays();
    addEventListeners();
    switchMonth();
}

/**
 * EventListeners thoughout the script.
 */
function addEventListeners() {
    document.querySelector(".eventDropdown").addEventListener("click", openMyEvents)
}