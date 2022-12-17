
export function addEventToLS() {
  const eventTitleInput = document.querySelector("#title");
  const eventDescInput = document.querySelector("#description");
  const eventOccasionInput = document.querySelector("#occasion");
  const eventDateInput = document.querySelector("#pickDate");
  
  const events = JSON.parse(localStorage.getItem('events')) || [];

  const date = eventDateInput.value;

  const event= {
    title: eventTitleInput.value,
    date,
    description: eventDescInput.value,
    occasion: eventOccasionInput.value,
  };

  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
}