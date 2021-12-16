// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
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
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add license?',
            default: false
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to apply to your project?',
            choices: ['MIT', 'GNU GPLv3', 'Unlicense'],
            when: ({ confirmLicense }) => confirmLicense
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log('Your README.md file has been generated')
    });
}

// TODO: Create a function to initialize app
function init () {
    questions()
    .then(readmeData => {
        const pageReadme = generateMarkdown(readmeData);
        fs.writeFile('./dist/README.md', pageReadme, err => {
            if (err) throw new Error(err);

            console.log('README created!');
        });
    })
};

// Function call to initialize app
init();
