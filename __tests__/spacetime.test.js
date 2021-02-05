import { MercuryAge } from './../src/js/spacetime.js';
describe('MercuryAge', () => {
  let age =55;
  test('should correctly calculate a users age in Mercury years', () => {
    expect(MercuryAge(age)).toEqual(229);
  });
});