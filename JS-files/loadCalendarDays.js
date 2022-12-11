let whichMonth = 0;
/**
 * Loads in days into calendar body.
 */
export function loadCalendarDays() {
    const calendarBody = document.querySelector(".calendarBody");
    const currentMonth = document.querySelector(".currentMonth")
    const weekdays = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date( year, month + 1, 0).getDate();

    currentMonth.textContent = `${ date.toLocaleString( "UTC", { month: "long", year: "numeric" }).toUpperCase() }`

    if ( whichMonth !== 0 ) {
        date.setMonth( new Date().getMonth() + whichMonth );
    }

    const dateString = firstDayOfMonth.toLocaleDateString("UTC", {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });

    const emptySquare = weekdays.indexOf(dateString.split(", ")[0]);

    calendarBody.innerHTML = "";

    for ( let i = 1; i <= emptySquare + daysInMonth; i++ ) {

        const daySquare = document.createElement("div");
        daySquare.classList.add("daySquare");

        if ( i > emptySquare ) {
            daySquare.innerText = i - emptySquare;

            daySquare.addEventListener("click", () => {

            })
        } else {
            daySquare.classList.add("emptySquare");
        }

        calendarBody.appendChild(daySquare);
    }

}

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