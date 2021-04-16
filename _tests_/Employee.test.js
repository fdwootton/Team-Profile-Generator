const Employee = require('../lib/Employee');
 
describe('Employee', () => {
  it('should set the name via constructor argument', () => {
      const testValue = 5;
      const employee = new Employee ("John", testValue, "John@email.com")
    expect(employee.id).toBe(testValue);
  });
});
