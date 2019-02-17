$(document).ready(function() {
var startDate = new Date(2017, 08, 18);
var currentDate = new Date();

var timeDiff = (Math.abs(currentDate - startDate))/(1000*3600*24*30);

$('#count').html(Math.round(timeDiff));

$('.education').click(function() {
    $('section-heading').slideToggle();
});
});