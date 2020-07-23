//definition of read and write files and inquire module

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// Prompt the user
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'Slack', 'smoke signal']
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
    }
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


