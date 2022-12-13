import { startTimeAndDate } from "./JS-files/startTimeAndDate.js";
import { loadCalendarDays } from "./JS-files/loadCalendar.js";
import { switchMonth } from "./JS-files/loadCalendar.js";
import { openMyEvents } from "./JS-files/openMyEvents.js";
import { openAddEventWindow } from "./JS-files/openAddEventWindow.js";
import { addEventItem } from "./JS-files/eventItem.js";

main();

/**
 * Reading in the main function.
 */
function main() {
    startTimeAndDate();
    loadCalendarDays();
    addEventListeners();
    switchMonth();
    addEventItem();
}

/**
 * EventListeners thoughout the script.
 */
function addEventListeners() {
    document.querySelector(".eventDropdown").addEventListener("click", openMyEvents);
    document.querySelector(".addEvent").addEventListener("click", openAddEventWindow);
}