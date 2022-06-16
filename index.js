// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of this project"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a brief description of your application."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter project usage description"
    },
    {
        type: "input",
        name: "contributing",
        message: "How to contribute and/or who contributed to project"
    },
    {
        type: "list",
        message: "Enter license used",
        name: "license",
        choices: ["AAL", "ISC", "MIT", "NTP", "W3C"]
    },
    {
        type: "input",
        name: "testing",
        message: "Provide testing instructions"
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Enter github username"
    },
    {
        type: "input",
        name: "githubLink",
        message: "Enter GitHub link"
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address"
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(userInput) {
            const markdownString = generateMarkdown(userInput)

            // TODO: Create a function to write README file
            fs.writeFile('README.md', markdownString, function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Readme complete')
                }
            })
        },

    )
}

// Function call to initialize app
init();