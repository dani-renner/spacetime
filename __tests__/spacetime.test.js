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
  test('should correctly calculate a users age & life expectancy in Mercury years', () => {
  ageObject.mercuryAge();
  expect(ageObject.age).toEqual(229);
  expect(ageObject.lifeExpectancy).toEqual(304);
  });
  test('should correctly calculate a users age & life expectancy in Venus years', () => {
  ageObject.venusAge();
  expect(ageObject.age).toEqual(89);
  expect(ageObject.lifeExpectancy).toEqual(118);
  });
  test('should correctly calculate a users age & life expectancy in Mars years', () => {
  ageObject.marsAge();
  expect(ageObject.age).toEqual(29);
  expect(ageObject.lifeExpectancy).toEqual(39);
  });
  test('should correctly calculate a users age & life expectancy in Jupiter years', () => {
  ageObject.jupiterAge();
  expect(ageObject.age).toEqual(5);
  expect(ageObject.lifeExpectancy).toEqual(6);
  });
  test('should correctly calculate years left in users life', () => {
  expect(ageObject.lifeLeft()).toEqual("18 years until death");
  ageObject.age = 73;
  expect(ageObject.lifeLeft()).toEqual("Time's up.")
  ageObject.age = 78;
  expect(ageObject.lifeLeft()).toEqual("You've outlived your life expectancy by 5 years!");
  });
});