// declared global variables
var hour1 = $("#9");
var hour2 = $("#10");
var hour3 = $("#11");
var hour4 = $("#12");
var hour5 = $("#13");
var hour6 = $("#14");
var hour7 = $("#15");
var hour8 = $("#16");
var hour9 = $("#17");
var time = moment();

// set planner function used to set the time and ate on the website and set the text in each time block based on if there is anything saved in local storage
function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    }); setInterval(setPlanner, 1000);
}

setPlanner();
var saveBtn = $(".saveBtn");

// save button event listener and function
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

// function used to determine what the background color should be for each time block depending on time of day
function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();