// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //employee constructors
    super(name, id, email);
    //manager constructor
    this.officeNumber = officeNumber;
    //override employee role
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;