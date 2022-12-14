
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
    
    const eventItemtitle = document.createElement("p");
    eventItemtitle.classList.add("eventItemtitle");

    const eventItemDate = document.createElement("p");
    eventItemDate.classList.add("eventItemDate");

    const eventItemDateIcon = document.createElement("i");
    eventItemDateIcon.classList.add("fa-regular", "fa-calendar-xmark");

    const eventItemDescription = document.createElement("p");
    eventItemDescription.classList.add("eventItemDescription");

    const removeEventItem = document.createElement("button");
    removeEventItem.classList.add("removeEventItem");

    const removeEventItemIcon = document.createElement("i");
    removeEventItemIcon.classList.add("fa-solid", "fa-trash");
    
    removeEventItem.append(removeEventItemIcon);
    eventItemDate.append(eventItemDateIcon);
    titleAndDateContainer.append(eventItemtitle, eventItemDate);
    eventItemInfo.append(titleAndDateContainer, eventItemDescription);
    eventIcon.append(i);
    eventItem.append(eventIcon, eventItemInfo, removeEventItem);
    eventList.append(eventItem);
    
    
    console.log(eventItem)
}
