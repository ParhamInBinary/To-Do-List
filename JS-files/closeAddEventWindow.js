import { loadCalendarDays } from "./loadCalendar.js";

export function closeAddEventWindow() {
  document.querySelector(".dropdownWindow").classList.remove("displayNone");
  document.querySelector(".blurCover").classList.remove("displayBlock");
  document.querySelector(".addEventWindow").classList.remove("displayFlex");
  document.querySelector("#submitEvent").classList.remove("displayFlex");
  const saveChanges = document.querySelector("#saveChanges");
  saveChanges.classList.remove("displayFlex");

  const inputs = document.querySelectorAll("input, textarea, select");
  for (const input of inputs) {
    input.value = "";
  }
  loadCalendarDays();
}
