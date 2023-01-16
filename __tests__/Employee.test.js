const Employee = require('../lib/Employee.js');

test('creates a employee name', () => {
    const employee = new Employee('2', 'Alec', 'alec@fakemail.com');
    expect(employee.getName()).toBe('Alec')
})
test('creates employee id', () => {
    const employee = new Employee('2', 'Alec', 'alec@fakemail.com');
    expect(employee.getId()).toBe('2')
})
test('creates employee email', () => {
    const employee = new Employee('2', 'Alec', 'alec@fakemail.com');
    expect(employee.getEmail()).toContain('alec@fakemail.com')
})
test('creates a role for employee', () => {
    const employee = new Employee('2', 'Alec', 'alec@fakemail.com');
    expect(employee.getRole()).toBe('Employee')
})