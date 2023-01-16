const Engineer = require('../lib/Engineer');

test('creates a engineer role', () => {
    const engineer = new Engineer('2', 'Alec', 'alec@fakemail.com', 'ibealec');
    expect(engineer.getRole()).toBe('Engineer')
})
test('creates a github', () => {
    const engineer = new Engineer('2', 'Alec', 'alec@fakemail.com', 'ibealec');
    expect(engineer.getGithub()).toBe('ibealec')
})
