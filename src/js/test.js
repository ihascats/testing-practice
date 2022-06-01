import analyzeArray from './analyze-array';
import caesar from './caesar';
import calculator from './calculator';
import capitalize from './capitalize';
import reverseString from './reverse-string';

test('Capitalize the first letter of queen', () => {
  expect(capitalize('queen')).toBe('Queen');
});

test('Capitalize the first letter of king', () => {
  expect(capitalize('king')).toBe('King');
});

test('Reverse the string king', () => {
  expect(reverseString('king')).toBe('gnik');
});

test('Reverse the string queen', () => {
  expect(reverseString('queen')).toBe('neeuq');
});

test('add 6, 2 to 8', () => {
  expect(calculator.add([6, 2])).toBe(8);
});

test('add 9, 10 to 19', () => {
  expect(calculator.add([9, 10])).toBe(19);
});

test('sub 15, 7 to 8', () => {
  expect(calculator.subtract([15, 7])).toBe(8);
});

test('sub 8, 4 to 4', () => {
  expect(calculator.subtract([8, 4])).toBe(4);
});

test('divide 8, 4 to 2', () => {
  expect(calculator.divide([8, 4])).toBe(2);
});

test('divide 36, 6 to 6', () => {
  expect(calculator.divide([36, 6])).toBe(6);
});

test('multiply 40, 6 to 240', () => {
  expect(calculator.multiply([40, 6])).toBe(240);
});

test('multiply 2, 8 to 16', () => {
  expect(calculator.multiply([2, 8])).toBe(16);
});

test('caesar "attack at dawn" to "buubdl bu ebxo" with a shift of 1', () => {
  expect(caesar('attack at dawn', 1)).toBe('buubdl bu ebxo');
});

test('caesar "attack at dawn" to "cvvcem cv fcyp" with a shift of 2', () => {
  expect(caesar('attack at dawn', 2)).toBe('cvvcem cv fcyp');
});

test('caesar "attack at dawn" to "gzzgiq gz jgct" with a shift of 6', () => {
  expect(caesar('attack at dawn', 6)).toBe('gzzgiq gz jgct');
});

test('caesar "attack at dawn" to "kddkmu kd nkgx" with a shift of 10', () => {
  expect(caesar('attack at dawn', 10)).toBe('kddkmu kd nkgx');
});

test('caesar "attack, at dawn" to "kddkmu, kd nkgx" with a shift of 10', () => {
  expect(caesar('attack, at dawn', 10)).toBe('kddkmu, kd nkgx');
});

test('caesar "Attack, at dawn" to "Kddkmu, kd nkgx" with a shift of 10', () => {
  expect(caesar('Attack, at dawn', 10)).toBe('Kddkmu, kd nkgx');
});

test('caesar "attack at dawn" to "zsszbj zs czvm" with a shift of 25', () => {
  expect(caesar('attack at dawn', 25)).toBe('zsszbj zs czvm');
});

test('caesar "attack at dawn" to "zsszbj zs czvm" with a shift of 103', () => {
  expect(caesar('attack at dawn', 103)).toBe('zsszbj zs czvm');
});

test('analyzeArray([1, 8, 3, 4, 2, 6]) ', () => {
  //
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('analyzeArray([1, 1, 1, 1, 1, 1]) ', () => {
  //
  const object = analyzeArray([1, 1, 1, 1, 1, 1]);
  expect(object).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 6,
  });
});

test('analyzeArray([1, 2, 3, 4, 5, 6]) ', () => {
  //
  const object = analyzeArray([1, 2, 3, 4, 5, 6]);
  expect(object).toEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6,
  });
});
