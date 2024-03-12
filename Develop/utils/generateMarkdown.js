// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache-2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'Mozilla Public License / MPL-2.0':
        return '[![License: MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      case 'None':
        return '';
    }
   
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'Apache-2.0':
        return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
      case 'Mozilla Public License / MPL-2.0':
        return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
      case 'None':
        return '';
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  } else { 
    return '## License \nThis project is licensed under the ' + license + ' License. See the ' + renderLicenseLink(license) + ' page for details.'}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}


  ## Contributing

  ${data.contributing}

  ## Questions

  [Contact Me](${data.questions})
`;
}

module.exports = generateMarkdown;
