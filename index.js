// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project title!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContents',
            message: 'Would you like to add a table of contents?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'contents',
            message: 'Which sections would you like to add to your table of contents? Check all that apply.',
            choices: ['Installation', 'Usage', 'Credits', 'License'],
            when: ({ confirmContents }) => confirmContents
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the steps required to install your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
questions()