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
    
  });
});