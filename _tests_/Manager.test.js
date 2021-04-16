const Manager = require('../lib/Manager');
 
describe('Manager', () => {

    it('should define name via constructor argument and get name via getName() method', () => {
      const testName = "John";
      const manager = new Manager ("John")
      expect(manager.name).toBe(testName);
      expect(manager.getName()).toBe(testName);
    });
  
    it('should define id via constructor argument and get id via getId() method', () => {
      const testId = 5;
      const manager = new Manager ("John", testId);
      expect(manager.id).toEqual(testId);
      expect(manager.getId()).toBe(testId);
    });
  
    it('should define email via constructor argument and get email via getEmail() method', () => {
      const testEmail = "John@test.com";
      const manager = new Manager ("John", 1 , "John@test.com");
      expect(manager.email).toBe(testEmail);
      expect(manager.getEmail()).toBe(testEmail);
    });

    it('should define office number via constructor argument and get office number via getOfficeNumber() method', () => {
      const testOfficeNumber = 1234;
      const manager = new Manager ("John", 1 , "John@test.com", testOfficeNumber);
      expect(manager.officeNumber).toBe(testOfficeNumber);
      expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
    });
  
    it('should get role via getRole() method', () => {
      const testRole = "Manager";
      const manager = new Manager;
      expect(manager.getRole()).toBe(testRole);
    });
});