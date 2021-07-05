// Sets the current time on the site
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
setInterval(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

}, 1000);

// set planner function used to set the text in each time block based on if there is anything saved in local storage
function setPlanner() {
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
        else {
            $(this).children(".schedule").val("");
        }
    });
}
setPlanner();

// save button and clear button event listener and function
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

$("#clear-btn").on("click", function () {
    var confirmDelete = confirm("Are you sure you want to delete everything?")
    if (confirmDelete) {
        localStorage.clear()
        setPlanner()
    }
})

// function used to determine what the background color should be for each time block depending on time of day
function pastPresentFuture() {
    var time = moment();
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