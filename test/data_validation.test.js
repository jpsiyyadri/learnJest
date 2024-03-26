const square = require('../src/data_validation');

test('throw an exception if input is not a number', () => {
    expect(() => {
        square('a')
    }).toThrow('Input must be a number')
});