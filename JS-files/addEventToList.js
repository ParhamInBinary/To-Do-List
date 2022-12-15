const eventList = document.querySelector(".eventList");

export function addEventToList() {
  const eventItem = document.createElement("div");
  eventItem.classList.add("eventItem");

  const eventIcon = document.createElement("div");
  eventIcon.classList.add("eventIcon");

  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-cake-candles", "fa-xl");

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
  eventIcon.append(i);
  eventItem.append(eventIcon, eventItemInfo, removeAndEditContainer);
  eventList.append(eventItem);

  eventItemTitle.innerText = localStorage.getItem(JSON.parse(title));
  // eventItemDescription.innerText = JSON.stringify(localStorage.getItem(eventItemObject.description));
  // eventItemDate.innerText = JSON.stringify(localStorage.getItem(eventItemObject.date));
}
