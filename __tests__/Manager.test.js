const Manager = require('../lib/Manager');

test('creates office number', () => {
    const manager = new Manager('1', 'Jared', 'jared@fakemail.com', '1');
    expect(manager.getOfficeNumber()).toBe('1')
})
test('changes role', () => {
    const manager = new Manager('1', 'Jared', 'jared@fakemail.com', '1');
    expect(manager.getRole()).toBe('Manager')
})