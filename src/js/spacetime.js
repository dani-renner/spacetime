export default class Age {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  ageCalculator(planet){
    if (planet==="mercury"){
      return Math.round(this.age/.24);
    }
    else if (planet==="venus"){
      return Math.round(this.age/.62);
    }
    else if (planet==="mars"){
      return Math.round(this.age/1.88);
    }
    else if (planet==="jupiter"){
      return Math.round(this.age/11.86);
    }
  }
  lifeExpectancyCalculator(planet){
    if (planet==="mercury"){
      return Math.round(this.lifeExpectancy/.24);
    }
    else if (planet==="venus"){
      return Math.round(this.lifeExpectancy/.62);
    }
    else if (planet==="mars"){
      return Math.round(this.lifeExpectancy/1.88);
    }
    else if (planet==="jupiter"){
      return Math.round(this.lifeExpectancy/11.86);
    }
  }

  lifeLeft(age, lifeExpectancy){
    let left = lifeExpectancy-age;
    if (left < 0){
      left = Math.abs(left);
      return `You've outlived your life expectancy by ${left} years!`;
    }
    if (left===0){
      return "Time's up.";
    }
    else{
      return left + " years until death.";
    }
  }
}