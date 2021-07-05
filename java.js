var hour1 = $("#1");
var hour2 = $("#2");
var hour3 = $("#3");
var hour4 = $("#4");
var hour5 = $("#5");
var hour6 = $("#6");
var hour7 = $("#7");
var hour8 = $("#8");
var hour9 = $("#9");
var time = moment();

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

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

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