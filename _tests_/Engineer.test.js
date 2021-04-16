const Engineer = require('../lib/Engineer');
 
describe('Engineer', () => {
  it('should set the name via constructor argument', () => {
      const testValue = 5;
      const engineer = new Engineer ("John", testValue, "John@email.com")
    expect(engineer.id).toBe(testValue);
  });
});