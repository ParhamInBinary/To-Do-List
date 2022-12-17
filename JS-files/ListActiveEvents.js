
export function ListActiveEvents() {
    const events = JSON.parse(localStorage.getItem("events"));

    if ( !events ) {
        return
    }

    const eventList = document.querySelector(".eventList");

    for ( const event of events ) {

        const eventItem = document.createElement("div");
        eventItem.classList.add("eventItem");

        const eventIcon = document.createElement("div");
        eventIcon.classList.add("eventIcon");
      
        const personalIconOccasion = document.createElement("i");
        personalIconOccasion.classList.add("fa-solid", "fa-user", "fa-xl");
        
        const professionalIconOccasion = document.createElement("i");
        professionalIconOccasion.classList.add("fa-solid", "fa-handshake-angle", "fa-2xl");
      
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

        if (event.occasion === "personal") {
            eventIcon.append(personalIconOccasion);
      
          } else if (event.occasion === "professional") {
            eventIcon.append(professionalIconOccasion);
      
          } else if (event.occasion === "social") {
            eventIcon.append(socialIconOccasion);
      
          } else {
            eventIcon.append(otherIconOccasion);
          }
        
          eventItemTitle.textContent = event.title;
          eventItemDate.textContent = event.date;
          eventItemDescription.textContent = event.description;

          removeEventItem.addEventListener("click", (item) => {
            const eventArray = JSON.parse(localStorage.getItem("events"));
            const index = eventArray.indexOf(item);
      
            eventArray.splice(index, 1);
            localStorage.setItem("events", JSON.stringify(eventArray));
      
            eventItem.remove();
          });
        eventList.append(eventItem);
    }
}