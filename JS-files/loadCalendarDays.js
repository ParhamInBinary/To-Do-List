/**
 * Loads in days into calendar body.
 */
export function loadCalendarDays() {
    const calendarBody = document.querySelector(".calendarBody");
    const weekdays = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date( year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString("UTC", {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });

    const emptySquare = weekdays.indexOf(dateString.split(", ")[0]);

    for ( let i = 0; i <= emptySquare + daysInMonth; i++ ) {

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