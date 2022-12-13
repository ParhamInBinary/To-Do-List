
export function addEventItem() {
    const inputs = document.querySelectorAll(".addEventWindow input, .addEventWindow textarea, .addEventWindow select");
    for (const input of inputs) {
      input.addEventListener("input", saveToLS);
    }
}

function saveToLS(event) {
    const input = event.target;
    localStorage.setItem(input.name, input.value);
}

export function addEventToList() {
    console.log("ASd")
    const eventItem = document.querySelector(".eventItem");
    const eventItemTitle = document.querySelector(".eventItemtitle");
    const eventItemDesc = document.querySelector(".eventItemDescription");
    const eventItemDate = document.querySelector(".eventItemDate");

    eventItem.classList.add(".eventItem");
}