//creates a variable for the luxon DateTime object 
var currentTime = luxon.DateTime.local();
//displays the current date and time within the currentDay id <p> tag formated to DATETIME_MED
$("#currentDay").text(currentTime.toLocaleString(luxon.DateTime.DATETIME_MED));