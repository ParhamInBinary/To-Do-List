import { loadCalendarDays } from "./loadCalendar.js";

export function addEventToList() {
  const eventInStorage = JSON.parse(localStorage.getItem("events"));

  if (!eventInStorage) {
    return;
  }

  const eventList = document.querySelector(".eventList");
  eventList.textContent = "";

  for (const item of eventInStorage) {
    const eventItem = document.createElement("div");
    eventItem.classList.add("eventItem");

    const eventIcon = document.createElement("div");
    eventIcon.classList.add("eventIcon");

    const personalIconOccasion = document.createElement("i");
    personalIconOccasion.classList.add("fa-solid", "fa-user", "fa-xl");

    const professionalIconOccasion = document.createElement("i");
    professionalIconOccasion.classList.add(
      "fa-solid",
      "fa-handshake-angle",
      "fa-2xl"
    );

    const socialIconOccasion = document.createElement("i");
    socialIconOccasion.classList.add("fa-solid", "fa-people-group", "fa-2xl");

    const otherIconOccasion = document.createElement("i");
    otherIconOccasion.classList.add("fa-solid", "fa-ellipsis", "fa-2xl");

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
    eventItem.append(eventIcon, eventItemInfo, removeAndEditContainer);
    eventList.append(eventItem);

    if (item.occasion === "personal") {
      eventIcon.append(personalIconOccasion);
    } else if (item.occasion === "professional") {
      eventIcon.append(professionalIconOccasion);
    } else if (item.occasion === "social") {
      eventIcon.append(socialIconOccasion);
    } else {
      eventIcon.append(otherIconOccasion);
    }

    eventItemTitle.textContent = item.title;
    eventItemDate.textContent = item.date;
    eventItemDescription.textContent = item.description;

    removeEventItem.addEventListener("click", () => {
      const eventArray = JSON.parse(localStorage.getItem("events"));
      const filteredEvent = eventArray.filter((e) => e.id !== item.id);

      localStorage.setItem("events", JSON.stringify(filteredEvent));

      loadCalendarDays();
      addEventToList();
    });

    editEventItem.addEventListener("click", () => {
      const eventArray = JSON.parse(localStorage.getItem("events"));

      document.querySelector(".dropdownWindow").classList.add("displayNone");

      document.querySelector(".blurCover").classList.add("displayBlock");

      document.querySelector(".addEventWindow").classList.add("displayFlex");

      const saveChanges = document.querySelector("#saveChanges");
      saveChanges.classList.add("displayFlex");

      const eventTitleInput = document.querySelector("#title");
      const eventDescInput = document.querySelector("#description");
      const eventOccasionInput = document.querySelector("#occasion");
      const eventDateInput = document.querySelector("#pickDate");

      eventTitleInput.value = item.title;
      eventDescInput.value = item.description;
      eventOccasionInput.value = item.occasion;
      eventDateInput.value = item.date;

      saveChanges.addEventListener("click", () => {
        const event = eventArray.find((event) => event.id === item.id);

        event.title = eventTitleInput.value;
        event.description = eventDescInput.value;
        event.occasion = eventOccasionInput.value;
        event.date = eventDateInput.value;

        localStorage.setItem("events", JSON.stringify(eventArray));

        addEventToList();
        document
          .querySelector(".dropdownWindow")
          .classList.remove("displayNone");
        document.querySelector(".blurCover").classList.remove("displayBlock");
        document
          .querySelector(".addEventWindow")
          .classList.remove("displayFlex");

        const saveChanges = document.querySelector("#saveChanges");
        saveChanges.classList.remove("displayFlex");
        loadCalendarDays();
      });
    });
  }
}
