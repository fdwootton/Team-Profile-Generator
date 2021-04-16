const Intern = require('../lib/Intern');
 
describe('Intern', () => {
  it('should set the name via constructor argument', () => {
      const testValue = 5;
      const intern = new Intern ("John", testValue, "John@email.com")
    expect(intern.id).toBe(testValue);
  });
});