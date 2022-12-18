let whichMonth = 0;

/**
 * Loads in days into calendar body.
 */
export function loadCalendarDays() {
  const calendarBody = document.querySelector(".calendarBody");
  const currentMonth = document.querySelector(".currentMonth");
  const weekdays = [
    "söndag",
    "måndag",
    "tisdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lördag",
  ];
  const userLocation = navigator.language;

  const date = new Date();

  if (whichMonth !== 0) {
    date.setMonth(new Date().getMonth() + whichMonth);
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  currentMonth.textContent = `${date
    .toLocaleString(userLocation, { month: "long", year: "numeric" })
    .toUpperCase()}`;

  const dateString = firstDayOfMonth.toLocaleDateString(userLocation, {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const emptySquare = weekdays.indexOf(dateString.split(", ")[0]);

  calendarBody.textContent = "";

  for (let i = 1; i <= emptySquare + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    daySquare.classList.add("daySquare");

    const eventArray = JSON.parse(localStorage.getItem("events"));
    
    if (i > emptySquare) {
      daySquare.innerText = i - emptySquare;
      const event = eventArray.find((event) => event.id === event.id);

      if ( event ) {
      const eventInDay = document.createElement("div");
      eventInDay.classList.add("eventInDay");

      eventInDay.textContent = event.title;
      
      daySquare.append(eventInDay)
    }

      daySquare.addEventListener("click", () => {});
    } else {
      daySquare.classList.add("emptySquare");
    }

    calendarBody.appendChild(daySquare);
  }
}

/**
 * Switches name of month on click, displaying chosen month.
 */
export function switchMonth() {
  document.querySelector(".prevMonth").addEventListener("click", () => {
    whichMonth--;
    loadCalendarDays();
  });
  document.querySelector(".nextMonth").addEventListener("click", () => {
    whichMonth++;
    loadCalendarDays();
  });
}
