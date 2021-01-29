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