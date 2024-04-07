// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File created!');
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Provide license information:',
            choices: ['MIT', 'GNU', 'Apache', 'None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contribution guidelines:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test instructions:'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide contact information for questions:'
        }
    ])
    .then((data) => {
        writeToFile('README.md', data);
    });
}

// Function call to initialize app
init();
