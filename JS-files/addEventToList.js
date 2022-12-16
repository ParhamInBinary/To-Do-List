const eventList = document.querySelector(".eventList");

export function addEventToList() {
  const eventItem = document.createElement("div");
  eventItem.classList.add("eventItem");

  const eventIcon = document.createElement("div");
  eventIcon.classList.add("eventIcon");

  const birthdayIconOccasion = document.createElement("i");
  birthdayIconOccasion.classList.add("fa-solid", "fa-cake-candles", "fa-xl");
  
  const meetingIconOccasion = document.createElement("i");
  meetingIconOccasion.classList.add("<fa-solid", "fa-handshake-simple");

  const appointmentIconOccasion = document.createElement("i");
  appointmentIconOccasion.classList.add("fa-solid", "fa-user-doctor");

  const otherIconOccasion = document.createElement("i");
  otherIconOccasion.classList.add("fa-solid", "fa-ellipsis");

  const eventItemInfo = document.createElement("div");
  eventItemInfo.classList.add("eventItemInfo");

  const titleAndDateContainer = document.createElement("div");

  const eventItemTitle = document.createElement("p");
  eventItemTitle.classList.add("eventItemTitle");

  const eventItemDate = document.createElement("p");
  eventItemDate.classList.add("eventItemDate");

  const eventItemDateIcon = document.createElement("i");
  eventItemDateIcon.classList.add("fa-regular", "fa-calendar-xmark");

  const eventItemDescription = document.createElement("p");
  eventItemDescription.classList.add("eventItemDescription");

  const removeAndEditContainer = document.createElement("div");
  removeAndEditContainer.classList.add("removeAndEditContainer");

  const removeEventItem = document.createElement("button");
  removeEventItem.classList.add("removeEventItem");

  const removeEventItemIcon = document.createElement("i");
  removeEventItemIcon.classList.add("fa-solid", "fa-trash");

  const editEventItem = document.createElement("button");
  editEventItem.classList.add("editEventItem");

  const editEventItemIcon = document.createElement("i");
  editEventItemIcon.classList.add("fa-solid", "fa-pen");

  editEventItem.append(editEventItemIcon);
  removeEventItem.append(removeEventItemIcon);
  removeAndEditContainer.append(removeEventItem, editEventItem);
  eventItemDate.append(eventItemDateIcon);
  titleAndDateContainer.append(eventItemTitle, eventItemDate);
  eventItemInfo.append(titleAndDateContainer, eventItemDescription);
  eventIcon.append(birthdayIconOccasion);
  eventItem.append(eventIcon, eventItemInfo, removeAndEditContainer);
  eventList.append(eventItem);


  const eventInStorage = JSON.parse(localStorage.getItem("events"));
  
  eventItemTitle.innerHTML = eventInStorage.title;
  eventItemDate.innerHTML = eventInStorage.date;
  eventItemDescription.innerHTML = eventInStorage.description;
  // eventIcon.innerHTML = if ( eventInStorage.occasion ) {
    
  // }
}
