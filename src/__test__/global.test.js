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

const reverseStringWithPromise = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    }

    resolve(str.split('').reverse().join(''));
  });
};

//Testing promises?¿
test('Should return a text reversed using a promise with .then', () => {
  return reverseStringWithPromise('Hola').then((string) => {
    expect(string).toBe('aloH');
  });
});

//Testing promises?¿
test('Should return a text reversed using a promise with async/await', async () => {
  const string = await reverseStringWithPromise('Hola');
  expect(string).toBe('aloH');
});

//Lifecycle tests hooks
afterEach(() => console.log('Message after each test'));
afterAll(() => console.log('Message after all tests'));
beforeEach(() => console.log('Message before each test'));
beforeAll(() => console.log('Message before all tests'));
