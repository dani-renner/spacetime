import Age from './../src/js/spacetime.js';
describe('Age', () => {
  let ageObject;
  beforeEach(() => {
    ageObject = new Age(55, 73);
  });
  test('should correctly create an Age object', () => {
    expect(ageObject.age).toEqual(55);
    expect(ageObject.lifeExpectancy).toEqual(73);
  });
  test('should correctly calculate a users age on different planets', () => {
    expect(ageObject.ageCalculator("mercury")).toEqual(229);
    expect(ageObject.ageCalculator("venus")).toEqual(89);
    expect(ageObject.ageCalculator("mars")).toEqual(29);
    expect(ageObject.ageCalculator("jupiter")).toEqual(5);
  });
  test('should correctly calculate a users life expectancy different planets', () => {
    expect(ageObject.lifeExpectancyCalculator("mercury")).toEqual(304);
    expect(ageObject.lifeExpectancyCalculator("venus")).toEqual(118);
    expect(ageObject.lifeExpectancyCalculator("mars")).toEqual(39);
    expect(ageObject.lifeExpectancyCalculator("jupiter")).toEqual(6);
  });

  test('should correctly calculate years left in users life', () => {
    expect(ageObject.lifeLeft(55,73)).toEqual("18 years until death.");
    expect(ageObject.lifeLeft(55,55)).toEqual("Time's up.")
    expect(ageObject.lifeLeft(78,73)).toEqual("You've outlived your life expectancy by 5 years!");
  });
});