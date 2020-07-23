//definition of read and write files and inquire module

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./Develop/utils/generateMarkdown");


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


