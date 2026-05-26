$(document).ready(function() {
var startDate = new Date(2024, 03, 01);
var currentDate = new Date();

var months = (currentDate.getFullYear() - startDate.getFullYear()) * 12 
          + (currentDate.getMonth() - startDate.getMonth());
$('#count').text(Math.max(0, months)); // Ensure non-negative

$('.education').click(function() {
    $('section-heading').slideToggle();
});

document.getElementById('year').textContent = new Date().getFullYear();
});