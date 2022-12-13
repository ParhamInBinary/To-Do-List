const eventItemTitle = document.querySelector("#title").addEventListener("input", addEventItem);
const eventItemDesc = document.querySelector("#description").addEventListener("input", addEventItem);
let eventItemMonth = document.querySelector("#choseMonth").addEventListener("change", addEventItem);
let eventItemDay = document.querySelector("#choseDay").addEventListener("change", addEventItem);
const eventItemYear = document.querySelector("#choseYear").addEventListener("input", addEventItem);
let eventItemOccasion = document.querySelector("#occasion").addEventListener("change", addEventItem);


export function addEventItem(event) {
    eventItemTitle = event.target;
    localStorage.setItem(eventItemTitle.title, eventItemTitle.value);
}