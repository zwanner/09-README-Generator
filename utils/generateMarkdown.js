// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null) {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null) {
    return '';
  }
  return `[License](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null) {
    return '';
  }

  const licenceLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);
  let licenseData = {
    text : `## License
    This project is licensed under the ${license} license.`,
    badge : licenseBadge,
    link : licenceLink
  }


  return licenseData;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseData = renderLicenseSection(data.license);
  return `# ${data.title}\n`
    + `## Description\n ${licenseData.badge}\n \n ${data.description}\n`
    + `## Table of Contents\n * [Installation](#installation)\n * [Usage](#usage)\n * [License](#license)\n * [Contributing](#contributing)\n * [Tests](#tests)\n * [Questions](#questions)\n`
    + `## Installation\n ${data.installation}\n`
    + `## Usage\n ${data.usage}\n`
    + `${licenseData.text}\n ${licenseData.link}\n`
    + `## Contributing\n ${data.contributing}\n`
    + `## Tests\n ${data.tests}\n`
    + `## Questions\n [${data.questions}](https://github.com/${data.questions})\n`;
}

module.exports = generateMarkdown;
