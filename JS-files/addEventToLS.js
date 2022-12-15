const eventTitle = document.querySelector("#title");
const eventDesc = document.querySelector("#description");
const eventOccasion = document.querySelector("#occasion");
const eventDate = document.querySelector("#pickDate");

export function addEventToLS() {
  const date = eventDate.value;

  const eventItemObject = {
    title: eventTitle.value,
    date,
    description: eventDesc.value,
    occasion: eventOccasion.value,
  };
  localStorage.setItem("events", JSON.stringify(eventItemObject));

  console.log(eventItemObject);
}
