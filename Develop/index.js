//Written by Marlon Guandique
//definition of read and write files and inquire module

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
console.log('Launching README.md file generator program')

// Prompt the user for questions
const questions = [
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
        name: "usage",
    },
    {
        type: 'list',
        message: 'Please choose a license you used for this project.',
        name: 'lic',
        choices: ['GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'MIT', 'Apache', 'Boost']
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
];

// function to write README file
function writeToFile(fileName, data) {
    let inputData = generateMarkdown(data);
    fs
        .writeFileSync(fileName, inputData, err => {
        if (err) {
            return console(err);
        }
    });
}

// function to initialize program
// Added  catch error 
async function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            console.log(JSON.stringify(data, null, 2));
            writeToFile("README.md", data);
        })
        .catch(error => {
            if(error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment")
              // Prompt couldn't be rendered in the current environment
            }
            console.error('ERROR=>',error)
        });
}
// function call to initialize program
init();
