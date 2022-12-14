const eventTitle = document.querySelector("#title");
const eventDesc = document.querySelector("#description");
const eventOccasion = document.querySelector("#occasion");
const eventDate = document.querySelector("#pickDate");



export function addEventToLS() {
    const date = eventDate.value;

    const eventItem = {
        title : eventTitle.value,
        date,
        description : eventDesc.value,
        occasion : eventOccasion.value,
    }
    localStorage.setItem("events", JSON.stringify(eventItem))

    console.log(eventItem)
}