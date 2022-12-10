/**
* A function start a interval of 1s to simulate a clock ticking.
*/
export function startTimeAndDate() {
   setInterval(tick, 1000);
}
/**
* Gets the current time and date.
*/
function tick() {
   const currently = new Date();
   updateWeekday(currently);
   updateMonth(currently);
   updateDate(currently);
   updateYear(currently);
   updateTime(currently);
   UpdateMonthName(currently);
}

/**
* Function to update to the current weekday.
* @param {Date} today 
*/
function updateWeekday(today) {
   const weekday = document.querySelector(".todaysWeekday");
   const weekdayElement = document.createElement("p");
   weekday.innerHTML = "";
   weekday.append(weekdayElement);
   weekdayElement.textContent = getDay(today);
}
/**
* A function displaying the current weekday.
* @param {Date} today 
* @returns {String} Current weekday.
*/
function getDay(today) {
   const weekday = today.getDay();
   
   switch (weekday) {
       case 0: return "Sunday"
       case 1: return "Monday"
       case 2: return "Tuesday"
       case 3: return "Wednesday"
       case 4: return "Thursday"
       case 5: return "Friday"
       case 6: return "Saturday"
   }
}

/**
* Function to update to the current month.
* @param {Date} today 
*/
function updateMonth(today) {
   const date = document.querySelector(".currentDate");
   const monthElement = document.createElement("p");
   date.innerHTML = "";
   date.append(monthElement);
   monthElement.textContent = getMonth(today) + " /";
}
/**
* A function displaying the current month as a number.
* @param {Date} today 
* @returns {String} A number representing the current month.
*/
function getMonth(today) {
   const month = today.getMonth();

   switch (month) {
       case 0: return "01"
       case 1: return "02"
       case 2: return "03"
       case 3: return "04"
       case 4: return "05"
       case 5: return "06"
       case 6: return "07"
       case 7: return "08"
       case 8: return "09"
       case 9: return "10"
       case 10: return "11"
       case 11: return "12"
   }
}

/**
* Function to update to the current date.
* @param {Date} today 
*/
function updateDate(today) {
   const date = document.querySelector(".currentDate");
   const dayElement = document.createElement("p");
   date.append(dayElement);
   dayElement.textContent = getDate(today) + " /";
}
/**
* A function displaying the current date.
* @param {Date} today 
* @returns {String} A number representing the current date.
*/
function getDate(today) {
   const day = today.getDate();

   switch (day) {
           case 0: return "31"
           case 1: return "01"
           case 2: return "02"
           case 3: return "03"
           case 4: return "04"
           case 5: return "05"
           case 6: return "06"
           case 7: return "07"
           case 8: return "08"
           case 9: return "09"
           case 10: return "10"
           case 11: return "11"
           case 12: return "12"
           case 13: return "13"
           case 14: return "14"
           case 15: return "15"
           case 16: return "16"
           case 17: return "17"
           case 18: return "18"
           case 19: return "19"
           case 20: return "20"
           case 21: return "21"
           case 22: return "22"
           case 23: return "23"
           case 24: return "24"
           case 25: return "25"
           case 26: return "26"
           case 27: return "27"
           case 28: return "28"
           case 29: return "29"
           case 30: return "30"
   }
}

/**
* Displaying the current year.
* @param {Date} today 
*/
function updateYear(today) {
   const date = document.querySelector(".currentDate");
   const yearElement = document.createElement("p");
   date.append(yearElement);
   yearElement.textContent = today.getFullYear();
}

/**
* Function to display the time as a digital clock.
* @param {Date} today 
*/
function updateTime(today) {
   const clock = document.querySelector(".clock")
   const time = today.toTimeString().split(" ")[0];
   clock.textContent = time;
}

/**
* Function to display the months name.
* @param {Date} today 
*/
function UpdateMonthName(today) {
   const currentMonth = document.querySelector(".currentMonth");
   const monthName = document.createElement("p");
   currentMonth.innerHTML = "";
   currentMonth.append(monthName);
   monthName.textContent = getMonthName(today);
}
/**
* Displaying the name of the current month.
* @param {Date} today 
* @returns {String} Name of month.
*/
function getMonthName(today) {
   const month = today.getMonth();

   switch (month) {
       case 0: return "January"
       case 1: return "February"
       case 2: return "Mars"
       case 3: return "April"
       case 4: return "May"
       case 5: return "June"
       case 6: return "July"
       case 7: return "August"
       case 8: return "September"
       case 9: return "October"
       case 10: return "November"
       case 11: return "December"
   }
}