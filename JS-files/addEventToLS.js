const eventTitle = document.querySelector("#title");
const eventDesc = document.querySelector("#description");
const eventOccasion = document.querySelector("#occasion");
const eventMonth = document.querySelector("#choseMonth");
const eventDay = document.querySelector("#choseDay");
const eventYear = document.querySelector("#choseYear");


export function addEventToLS() {
    const date = `${eventYear.value}-${eventMonth.value}-${eventDay.value}`;

    const eventItem = {
        title : eventTitle.value,
        date,
        description : eventDesc.value,
        occasion : eventOccasion.value,
    }
    localStorage.setItem("events", JSON.stringify(eventItem))

    console.log(eventItem)
}