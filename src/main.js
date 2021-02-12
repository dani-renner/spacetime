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
    $("#userMercury").text(userData.ageCalculator("mercury"));
    $("#mercuryLeft").text(userData.lifeLeft((userData.ageCalculator("mercury")), (userData.mercuryLifeExpentancy())));
    $("#userVenus").text(userData.ageCalculator("venus"));
    $("#venusLeft").text(userData.lifeLeft((userData.ageCalculator("venus")), (userData.venusLifeExpentancy())));
    $("#userMars").text(userData.ageCalculator("mars"));
    $("#marsLeft").text(userData.lifeLeft((userData.ageCalculator("mars")), (userData.marsLifeExpentancy())));
    $("#userJupiter").text(userData.ageCalculator("jupiter"));
    $("#jupiterLeft").text(userData.lifeLeft((userData.ageCalculator("jupiter")), (userData.jupiterLifeExpentancy())));
  });
});