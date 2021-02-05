export default class Age {
  constructor(age) {
    this.age = age;
  }

  mercuryAge(){
    return parseInt(this.age/.24);
  }
};
