//definition of read and write files and inquire module

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// Prompt the user for questions
inquirer
  .prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter Description of your project: ",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
        default: "There are no specific intallation for this project”"
    },
    {
        type: "input",
        message: "Describe the use of this project?",
        name: "title",
    },
    {
      type: 'list',
      message: 'Please choose a license you used for this project.',
      name: 'lic',
      choices: ['GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'MIT','Apache','Boost']
    },
    {
        type: "input",
        message: "Describe how to contribute to this project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please enter if any testing protocols were used for your project?",
        name: "test",
        default: "No test provided"
    },
    {
        type: "input",
        message: "Please enter your gitHub Username:",
        name: "userName",
    },
    {
        type: "input",
        message: "Please enter your email address:",
        name: "userEmail",
    },

  ]) // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
    // Bonus: Generate the name of your user file from their input
    const filename =
      data.name
        .toLowerCase()
        .split(' ')
        .join('') + '.json';

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });



// array of questions for user
const questions = [
    {
    type: "input",
    message: "What is your project title?",
    name: "title",
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


