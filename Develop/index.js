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
        message: "Please enter Description of your project: ",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
        default: "There are no specific intallation for this project"
    },
    {
        type: "input",
        message: "Please describe the use of this project?",
        name: "usage",
    },
    {
        type: "list",
        message: "Please choose a license you used for this project.",
        name: "lic",
        choices: ['Unlicense','GNU LGPL v3','GNU GPL v3','Mozilla Public License 2.0','MIT','Apache License 2.0','Boost Software License 1.0',]
    },
    {
        type: "input",
        message: "Please describe how to contribute to this project?",
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
    // console.log("README.md generated succesfully");
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
