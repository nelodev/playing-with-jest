const text = 'Hola Mundo';
const fruits = ['apple', 'watermelon', 'banana'];

//Test against string
test('Should contain word "Mundo" inside given text', () => {
  expect(text).toMatch(/Mundo/);
});

//Test against arrays
test('Array of fruits should contain a banana', () => {
  expect(fruits).toContain('banana');
});

//Tests against numbers
test('Number 10 should be greather than number 5', () => {
  expect(10).toBeGreaterThan(5);
});

//Tests against boolean
test('Should be truthy', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

//Testing callbacks?¿
test('Should reverse word Hola and return aloH', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});
