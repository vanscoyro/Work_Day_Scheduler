//creates a variable for the luxon DateTime object 
var currentTime = luxon.DateTime.local();
//displays the current date and time within the currentDay id <p> tag formated to DATETIME_MED
$("#currentDay").text(currentTime.toLocaleString(luxon.DateTime.DATETIME_MED));

//save button click functionality 
$(".saveBtn").on("click", function (){
   
    //assigns the text value of the textBlock class of each timeblock to a variable called 'text'
    var text = $(this).siblings(".textBlock").val();
    
    //assigns the id attribute value (which is the 'hourX) of each timeblock to a variable called 'time' 
    var time = $(this).parent().attr("id");
    
    //sets local storage key 'time' and value 'text' for each timeblock
    localStorage.setItem(time, text);
})