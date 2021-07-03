var today = function () {
    $(currentDay).text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
};
setInterval(today, 1000);