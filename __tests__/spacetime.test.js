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
  test('should correctly calculate a users age in Mercury years', () => {
  expect(ageObject.mercuryAge()).toEqual(229);
  });
  test('should correctly calculate a users age in Venus years', () => {
  expect(ageObject.venusAge()).toEqual(89);
  });
  test('should correctly calculate a users age in Mars years', () => {
  expect(ageObject.marsAge()).toEqual(29);
  });
  test('should correctly calculate a users age in Jupiter years', () => {
  expect(ageObject.jupiterAge()).toEqual(5);
  });
  test('should correctly calculate a users age in Mercury years', () => {
  expect(ageObject.mercuryLifeExpentancy()).toEqual(304);
  });
  test('should correctly calculate a users age in Venus years', () => {
  expect(ageObject.venusLifeExpentancy()).toEqual(118);
  });
  test('should correctly calculate a users age in Mars years', () => {
  expect(ageObject.marsLifeExpentancy()).toEqual(39);
  });
  test('should correctly calculate a users age in Jupiter years', () => {
  expect(ageObject.jupiterLifeExpentancy()).toEqual(6);
  });
  test('should correctly calculate years left in users life', () => {
  expect(ageObject.lifeLeft(55,73)).toEqual("18 years until death");
  expect(ageObject.lifeLeft(55,55)).toEqual("Time's up.")
  expect(ageObject.lifeLeft(78,73)).toEqual("You've outlived your life expectancy by 5 years!");
  });
});