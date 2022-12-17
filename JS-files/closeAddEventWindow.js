export function closeAddEventWindow() {
  document.querySelector(".dropdownWindow").classList.toggle("displayNone");
  document.querySelector(".blurCover").classList.toggle("displayBlock");
  document.querySelector(".addEventWindow").classList.toggle("displayFlex");

  const inputs = document.querySelectorAll("input, textarea, select");
  for (const input of inputs) {
    input.value = "";
  }
}