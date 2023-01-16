const Intern = require('../lib/Intern');

test('creates a school', () => {
    const intern = new Intern('5', 'John', 'john@fakemail.com', '2University');
    expect(intern.getSchool()).toBe('2University')
})
test('creates intern role', () => {
    const intern = new Intern('5', 'John', 'john@fakemail.com', '2University');
    expect(intern.getRole()).toBe('Intern')
})