Third-Party APIs: Work Day Scheduler

This simple work day scheduler allows the user to input daily plans within time blocks and save them to persist even after the browser has been closed. Throughout the day it updates to apply different colors to the text boxes based on the user's current local time. The user has the option to save inputted data with save buttons or clear the entire schedule with a clear button on the bottom of the page. 


Below are screen shots of the Website:

1. index.html
![example1.JPG](screenShots/example1.JPG?raw=true "index.html capture")


Here is the User Story and Acceptance Criteria:

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
#
