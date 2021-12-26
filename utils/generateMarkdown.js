// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  else if (license === "GNU GPLv3 License") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (license === "Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  else if (license === "GNU GPLv3 License") {
    return "[GPL v3 License](https://choosealicense.com/licenses/gpl-3.0/)";
  }
  else if (license === "MIT License") {
    return "[MIT License](https://choosealicense.com/licenses/mit/)";
  }
  else if (license === "Unlicense") {
    return "[Unlicense](https://choosealicense.com/licenses/unlicense/)";
  }
 };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
  } 
  else {
  return `
  ## License
  This project was created uning the ${license}
 `
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ${renderLicenseSection(answers.license)}

  ${renderLicenseBadge(answers.license)}

  ${renderLicenseLink(answers.license)}


  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions

  [GitHub](https://github.com/${answers.github})

  [Email](mailto:${answers.email})

`;
}

module.exports = generateMarkdown;
