import reverse from '../../src/tst/main.js';

test('myTest', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
});