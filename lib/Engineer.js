// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    //employee constructors
    super (name, id, email);
    //engineer constructor
    this.github = github;
  }
    getGithub(){
      return this.github;
  }
      //override employee role
  getRole(){
      return "Engineer";
  }
  }

module.exports = Engineer;