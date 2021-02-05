import Age from './../src/js/spacetime.js';
describe('Age', () => {
  let ageObject;
  beforeEach(() => {
    ageObject = new Age(55);
  });
    test('should correctly create an Age object', () => {
    expect(ageObject.age).toEqual(55);
    });
    test('should correctly calculate a users age in Mercury years', () => {
    expect(ageObject.mercuryAge()).toEqual(229);
  });
    test('should correctly calculate a users age in Venus years', () => {
    expect(ageObject.venusAge()).toEqual(89);
  })
    test('should correctly calculate a users age in Mars years', () => {
    expect(ageObject.marsAge()).toEqual(29);
  });
});