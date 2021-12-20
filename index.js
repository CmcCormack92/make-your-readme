// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
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
        type: 'input',
        name: 'installation',
        message: 'Describe the steps required to install your project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter instructions!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add license?',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to apply to your project?',
        choices: ['MIT License', 'GNU GPLv3 License', 'Unlicense'],
        when: ({ confirmLicense }) => confirmLicense
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide a list of all contributors including any tutorials used',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter all contributors!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List all tests (if any), along with examples of how to use them.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter email!');
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const pageReadMe = generateMarkdown(data);
            fs.writeFile('./dist/README.md', pageReadMe, (err) => {
                if (err) throw (err);
                console.log('Your README was generated')
            })
        })
};

// Function call to initialize app
init();
