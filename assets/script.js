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

function hourVerification(){
    
    //creates a variable called 'searchTime' and gives it only the number of the hour from the luxon DataTime.local() function
    //the split method ensures only the number is saved
    var searchTime = parseInt(luxon.DateTime.local().toLocaleString({hour: 'numeric'}).split(" ", 1));
    
    //adds 12 hours to the current searchTime value to ensure it's consistent with how hours are formatted within textblock 
    searchTime += 12;

    //function that checks the value of each time-block class
    $(".time-block").each(function(){

        //assigns the hour of each time-block as an int in a variable 'blockHour'
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        
        //checks the time-block hour with the current time and assigns class of 'past' to the current instance of the time-block if blockHour is less than searchTime
        if (blockHour < searchTime){
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }

        //checks the time-block hour with the current time and assigns class of 'present' to the current instance of the time-block if blockHour is equal to searchTime
        if (blockHour === searchTime){
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        
        //checks the time-block hour with the current time and assigns class of 'future' to the current instance of the time-block if blockHour is greater than searchTime
        if (blockHour > searchTime){
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    
    })
    
}

//calls the hourVerificaiton() function
hourVerification();

 //populates the textBlock of each time-block based on what is currently stored in localStorage
 $("#hour9 .textBlock").val(localStorage.getItem("hour9"));
 $("#hour10 .textBlock").val(localStorage.getItem("hour10"));
 $("#hour11 .textBlock").val(localStorage.getItem("hour11"));
 $("#hour12 .textBlock").val(localStorage.getItem("hour12"));
 $("#hour13 .textBlock").val(localStorage.getItem("hour13"));
 $("#hour14 .textBlock").val(localStorage.getItem("hour14"));
 $("#hour15 .textBlock").val(localStorage.getItem("hour15"));
 $("#hour16 .textBlock").val(localStorage.getItem("hour16"));
 $("#hour17 .textBlock").val(localStorage.getItem("hour17"));

 //reset button functionality
 $(".resetBtn").on("click", function(){
    //clear all the text boxes on the page
    $("#hour9 .textBlock").val("");
    $("#hour10 .textBlock").val("");
    $("#hour11 .textBlock").val("");
    $("#hour12 .textBlock").val("");
    $("#hour13 .textBlock").val("");
    $("#hour14 .textBlock").val("");
    $("#hour15 .textBlock").val("");
    $("#hour16 .textBlock").val("");
    $("#hour17 .textBlock").val("");
    //clear all the text values in local storage for their respective hour keys
    localStorage.setItem("hour9", "");
    localStorage.setItem("hour10", "");
    localStorage.setItem("hour11", "");
    localStorage.setItem("hour12", "");
    localStorage.setItem("hour13", "");
    localStorage.setItem("hour14", "");
    localStorage.setItem("hour15", "");
    localStorage.setItem("hour16", "");
    localStorage.setItem("hour17", "");

})