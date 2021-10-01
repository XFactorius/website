$(document).ready(function() {
var startDate = new Date(2021, 00, 01);
var currentDate = new Date();

var timeDiff = (Math.abs(currentDate - startDate))/(1000*3600*24*30);

$('#count').html(Math.round(timeDiff));

$('.education').click(function() {
    $('section-heading').slideToggle();
});
});