import reverse from '../../src/tst/main.js';

test('reverse444', () => {
    expect(reverse('hello4')).toEqual('olleh');
    expect(reverse('')).toEqual('');
});