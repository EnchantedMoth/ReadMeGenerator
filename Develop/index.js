// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide Installation instructions for your project:',
    },
    {
        type: 'list',
        message: 'Which license are you using for your project?',
        name: 'license',
        choices: ['MIT','Apache-2.0','Mozilla Public License / MPL-2.0', 'None']
    },
    {
        type: 'input',
        message: 'How can someone contribute to your project',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Where can people contact you with any questions about this project',
        name: 'questions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README.md has been generated successfully as ${fileName}`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const readMeContent = generateMarkdown(answers)
        writeToFile('README.md', readMeContent)
    })
}

// Function call to initialize app
init();


