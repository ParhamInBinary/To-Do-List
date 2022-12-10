import { startTimeAndDate } from "./JS-files/startTimeAndDate.js";
import { loadCalendarDays } from "./JS-files/loadCalendarDays.js";
import { goToPrevMonth } from "./JS-files/switchMonth.js";
import { goToNextMonth } from "./JS-files/switchMonth.js";

main();

/**
 * Reading in the main function.
 */
function main() {
    startTimeAndDate();
    loadCalendarDays();
    addEventListeners();
}

/**
 * EventListeners thoughout the script.
 */
function addEventListeners() {
    document.querySelector(".fa-angle-left").addEventListener("click", goToPrevMonth);
    document.querySelector(".fa-angle-right").addEventListener("click", goToNextMonth);
}