const Employee = require('../lib/Employee');
 
describe('Employee', () => {
  it('should define name via constructor argument and get name via getName() method', () => {
    const testName = "John";
    const employee = new Employee ("John")
    expect(employee.name).toBe(testName);
    expect(employee.getName()).toBe(testName);
  });

  it('should define id via constructor argument and get id via getId() method', () => {
    const testId = 5;
    const employee = new Employee ("John", testId);
    expect(employee.id).toEqual(testId);
    expect(employee.getId()).toBe(testId);
  });

  it('should define email via constructor argument and get email via getEmail() method', () => {
    const testEmail = "John@test.com";
    const employee = new Employee ("John", 1 , "John@test.com");
    expect(employee.email).toBe(testEmail);
    expect(employee.getEmail()).toBe(testEmail);
  });

  it('should get role via getRole() method', () => {
    const testRole = "Employee";
    const employee = new Employee;
    expect(employee.getRole()).toBe(testRole);
  });
});
