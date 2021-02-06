export default class Age {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryAge(){
    this.lifeExpectancy=Math.round(this.lifeExpectancy/.24);
    this.age=Math.round(this.age/.24);
  }
  venusAge(){
    this.lifeExpectancy=Math.round(this.lifeExpectancy/.62);
    this.age=Math.round(this.age/.62);
  }
  marsAge(){
    this.lifeExpectancy=Math.round(this.lifeExpectancy/1.88);
    this.age=Math.round(this.age/1.88);
  }
  jupiterAge(){
    this.lifeExpectancy=Math.round(this.lifeExpectancy/11.86);
    this.age=Math.round(this.age/11.86);
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
}
