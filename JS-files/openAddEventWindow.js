/**
 * Displays a window to add a new event.
 */
export function openAddEventWindow() {
  document.querySelector(".dropdownWindow").classList.toggle("displayNone");
  document.querySelector(".blurCover").classList.toggle("displayBlock");
  document.querySelector(".addEventWindow").classList.toggle("displayFlex");
  document.querySelector("#submitEvent").classList.toggle("displayFlex");
}