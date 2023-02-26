// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //employee constructors
    super(name, id, email);
    //intern constructor
    this.school = school;
    //override employee role
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;