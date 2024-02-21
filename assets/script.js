

var currentDate = dayjs().format("ddd, MMM, D, YYYY")
$("#currentDate").html(currentDate)


$(function () {
    $("#datepicker").datepicker();
});