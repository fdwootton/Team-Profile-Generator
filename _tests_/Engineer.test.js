const Engineer = require('../lib/Engineer');
 
describe('Engineer', () => {

  it('should define name via constructor argument', () => {
      const testName = "John";
      const engineer = new Engineer ("John");
      expect(engineer.name).toBe(testName);
  });

  it('should define id via constructor argument', () => {
    const testId = 5;
    const engineer = new Engineer ("John", testId);
    expect(engineer.id).toEqual(testId);
  });

  it('should define email via constructor argument', () => {
    const testEmail = "John@test.com";
    const engineer = new Engineer ("John", 1 , "John@test.com");
    expect(engineer.email).toBe(testEmail);
  });

  it('should define github via constructor argument', () => {
    const testGithub = "johngithub";
    const engineer = new Engineer ("John", 1 , "John@test.com", "johngithub");
    expect(engineer.github).toBe(testGithub);
  });

  it('should get github username via getGithub() method', () => {
    const testGithub = "johngithub";
    const engineer = new Engineer("John", 1 , "John@test.com", "johngithub");
    expect(engineer.getGithub()).toBe(testGithub);
  });

  it('should get role via getRole() method', () => {
    const testRole = "Engineer";
    const engineer = new Engineer;
    expect(engineer.getRole()).toBe(testRole);
  });


});