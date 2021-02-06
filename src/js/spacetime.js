
export default class Age {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryAge(){
    return Math.round(this.age/.24);
  }
  venusAge(){
    return Math.round(this.age/.62);
  }
  marsAge(){
    return Math.round(this.age/1.88);
  }
  jupiterAge(){
    return Math.round(this.age/11.86);
  }
  lifeLeft(){
    let left = this.lifeExpectancy-this.age;
    if (left < 0){
      left = Math.abs(left);
      return "You've outlived your life expectancy by " + left + " years!";
    }
    if (left===0){
      return "Time's up.";
    }
    else{
      return left + " years until death";
    }
  }
};