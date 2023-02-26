const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//manager questions
const managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?"
    }, 
    {
      type: "input",
      name: "id",
      message: "What is the manager's employee id?"
    },        
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?"
    },        
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?"
    }
];

//engineer questions
const engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?"
    }, 
    {
      type: "input",
      name: "id",
      message: "What is the engineer's employee id?"
    },        
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email address?"
    },        
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username?"
    }
];

//intern questions
const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?"
    }, 
    {
      type: "input",
      name: "id",
      message: "What is the intern's employee id?"
    },        
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?"
    },        
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?"
    }
];

//menu questions
const menuQuestions = [
    {
        type: "rawlist",
        name: "menu",
        message: "What would you like to do next?",
        choices: ['Add an engineer', 'Add an intern', "Finish building the team"]
      }
];

//function to initialize program
function init() {
    console.log('init');
    //ask Manager Questions
    addManager();
}

//function to add manager
function addManager() {
    console.log('add manager');
    inquirer.prompt(managerQuestions);
}

//function to display menu
function displayMenu() {
    console.log('display menu');
    inquirer.prompt(menuQuestions);
}

//function to add intern
function addIntern() {
    console.log('add intern');
    inquirer.prompt(internQuestions);
}

//function to add engineer
function addEngineer() {
    console.log('add engineer');
    inquirer.prompt(engineerQuestions);
}




//function call to initialize program
init();