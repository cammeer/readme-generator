// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [

    {
        type: "input",
        name: "description",
        message: "Enter a brief description of your application."
    },
    {
        type: "input",
        name: "description",
        message: "Enter a brief description of your application."
    },
    {
        type: "input",
        name: "installation",
        message: "Entre installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter project usage description"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contributing instrucitons, or who contributed to project."
    },
    {
        type: "list",
        message: "Enter license information",
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
        name: "email",
        message: "Enter email address."
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