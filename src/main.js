import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/spacetime.js';

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($('#ageInput').val());
    const userLifeExpectancy = parseInt($('#lifeExpectancyInput').val());
    const userData = new Age(userAge, userLifeExpectancy);
    $(".output").show();
    $("#userMercury").text(userData.mercuryAge());
    $("#mercuryLeft").text(userData.lifeLeft((userData.mercuryAge()), (userData.mercuryLifeExpentancy())));
    $("#userVenus").text(userData.venusAge());
    $("#venusLeft").text(userData.lifeLeft((userData.venusAge()), (userData.venusLifeExpentancy())));
    $("#userMars").text(userData.marsAge());
    $("#marsLeft").text(userData.lifeLeft((userData.marsAge()), (userData.marsLifeExpentancy())));
    $("#userJupiter").text(userData.jupiterAge());
    $("#jupiterLeft").text(userData.lifeLeft((userData.jupiterAge()), (userData.jupiterLifeExpentancy())));
  });
});