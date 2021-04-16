const Manager = require('../lib/Manager');
 
describe('Manager', () => {
  it('should set the name via constructor argument', () => {
      const testValue = 5;
      const manager = new Manager ("John", testValue, "John@email.com")
    expect(manager.id).toBe(testValue);
  });
});