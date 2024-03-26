const fetchData = require('../src/async_function');

test('fetch data from an API', async () => {
    const data = await fetchData();
    expect(data).toBe('Data fetched');
});