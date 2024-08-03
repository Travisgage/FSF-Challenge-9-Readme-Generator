// Returns the appropriate badge for the user provided license
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch (license) {
    case 'MIT': 
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;

    case 'APACHE 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;

    case 'GPL 3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;

    case 'BSD 3-Clause':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;

    case 'None':
      licenseBadge = '';
      break; 

    default:
      console.log("Please select a license for your project, or choose none.");
  }
  return licenseBadge;
}

// Returns the link to provide documentation for the user provided license
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
  case 'MIT':
    licenseLink = 'https://opensource.org/license/mit';
    break;

  case 'APACHE 2.0':
    licenseLink = 'https://opensource.org/license/apache-2-0';
    break;

  case 'GPL 3.0':
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    break;

  case 'BSD 3-Clause':
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
    break;

  case 'None':
    licenseLink = '';
    break;  
 }
 return licenseLink;
}

//Returns a description for user provided licens.
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ``
  } else {
    return `This project is operating under the ${license} license.  For more detailed information, please click [here](${renderLicenseLink(license)}).`
  } 
}

//Generate markdown for README
function generateMarkdown(data) {
return `
# ${data.projectName}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)

## Installation
Installation instructions for application:
${data.dependencies}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributions}

## Credits
${data.credits}

## Tests
To run tests for the application:
${data.tests}

## Questions
Contact me for any questions regarding this project:

GitHub: [${data.username}](https://github.com/${data.username})

Email: ${data.email}
`;
}
//exports generateMarkdown to index.js
module.exports = generateMarkdown;
