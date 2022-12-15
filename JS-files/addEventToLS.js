const eventTitleInput = document.querySelector("#title");
const eventDescInput = document.querySelector("#description");
const eventOccasionInput = document.querySelector("#occasion");
const eventDateInput = document.querySelector("#pickDate");

export function addEventToLS() {
  const date = eventDateInput.value;

  const eventItemStored = {
    title: eventTitleInput.value,
    date,
    description: eventDescInput.value,
    occasion: eventOccasionInput.value,
  };

  localStorage.setItem("events", JSON.stringify(eventItemStored));
}
