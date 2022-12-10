/**
 * Loads in days into calendar body.
 */
export function loadCalendarDays() {
    const weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDayOfMonth = new Date();
    const daysInMonth = new Date( year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString("UTC", {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
    console.log(dateString)
}