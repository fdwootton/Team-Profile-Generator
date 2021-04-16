const Intern = require('../lib/Intern');
 
describe('Intern', () => {

    it('should define name via constructor argument and get name via getName() method', () => {
      const testName = "John";
      const intern = new Intern ("John")
      expect(intern.name).toBe(testName);
      expect(intern.getName()).toBe(testName);
    });
  
    it('should define id via constructor argument and get id via getId() method', () => {
      const testId = 5;
      const intern = new Intern ("John", testId);
      expect(intern.id).toEqual(testId);
      expect(intern.getId()).toBe(testId);
    });
  
    it('should define email via constructor argument and get email via getEmail() method', () => {
      const testEmail = "John@test.com";
      const intern = new Intern ("John", 1 , "John@test.com");
      expect(intern.email).toBe(testEmail);
      expect(intern.getEmail()).toBe(testEmail);
    });

    it('should define school via constructor argument and get school via getSchool() method', () => {
      const testSchool = "SLU";
      const intern = new Intern ("John", 1 , "John@test.com", testSchool);
      expect(intern.school).toBe(testSchool);
      expect(intern.getSchool()).toBe(testSchool);
    });
  
    it('should get role via getRole() method', () => {
      const testRole = "Intern";
      const intern = new Intern;
      expect(intern.getRole()).toBe(testRole);
    });
  });