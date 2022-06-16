// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


//checks to generate if any fields are empty, which is ok

const generateInstall = installText => {
    if (!installText) {
        return ''
    } else {
        return `## Installation
  ${installText}
  `
    }
}
const generateContribute = contributeText => {
    if (!contributeText) {
        return ''
    } else {
        return `## Contributions
  ${contributeText}
  `
    }
}
const generateTesting = testText => {
    if (!testText) {
        return ''
    } else {
        return `## Testing
  ${testText}
  `
    }
}
const installCheck = check => {
    if (!check) {
        return '';
    } else {
        return `* [Installation](#installation)`
    }
}
const contributeCheck = check => {
    if (!check) {
        return '';
    } else {
        return `* [Contributions](#contributions)`
    }
}
const testCheck = check => {
    if (!check) {
        return '';
    } else {
        return `* [Testing](#testing)`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  ![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${installCheck(data.installation)}
  * [Usage](#usage)
  * [License](#license)
  ${contributeCheck(data.contributing)}
  ${testCheck(data.testing)}
  * [Questions](#questions)
  
  ${generateInstall(data.installation)}
  ## Usage
  ${data.usage}
  ## License
  * This application is covered under the ${data.license} license
  ${generateContribute(data.contributing)}
  ${generateTesting(data.testing)}
  ## Any Questions
  This project was created by me: [${data.githubUsername}](${data.githubLink})
  
  Contact me with any questions at: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;