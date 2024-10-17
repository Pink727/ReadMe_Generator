// utils/generateMarkdown.js

// Function to get the license text. i added this becuase i know that their are some licenses that are not included in the list
function getLicenseData(data) {
  return data.license === 'other' ? data.userlicense : data.license;
}

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') return '';
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none' || license === 'other') return '';
  const licenseLinks = {
    'APACHE_2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'GPL_3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    'BSD_2_CLAUSE': 'hhttps://opensource.org/license/bsd-2-clause',
    'BSD_3_CLAUSE': 'https://choosealicense.com/licenses/bsd-3-clause',
    'BSL_1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'CC0_1.0': 'https://choosealicense.com/licenses/cc0-1.0/',
    'EPL_2.0': 'https://www.eclipse.org/legal/epl-2.0/',
    'AGPL_3.0': 'https://www.gnu.org/licenses/agpl-3.0.en.html',
    'GPL_2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    'LGPL_2.1': 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html',
    'MPL_2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
    'MIT': 'https://opensource.org/license/mit',
    'UNLICENSE': 'https://opensource.org/license/unlicense'
  };
  return licenseLinks[license];
}

function fullName(license) {
  const licenseNames = {
    'APACHE_2.0': 'Apache License 2.0',
    'GPL_3.0': 'GNU General Public License v3.0',
    'BSD_2_CLAUSE': 'BSD 2-Clause "Simplified" License',
    'BSD_3_CLAUSE': 'BSD 3-Clause "New" or "Revised" License',
    'BSL_1.0': 'Boost Software License 1.0',
    'CC0_1.0': 'Creative Commons Zero v1.0 Universal',
    'EPL_2.0': 'Eclipse Public License 2.0',
    'AGPL_3.0': 'GNU Affero General Public License v3.0',
    'GPL_2.0': 'GNU General Public License v2.0',
    'LGPL_2.1': 'GNU Lesser General Public License v2.1',
    'MPL_2.0': 'Mozilla Public License 2.0',
    'MIT': 'MIT License',
    'UNLICENSE': 'The Unlicense'
  };
  return licenseNames[license];
}

// Get the current year
const currentYear = new Date().getFullYear();

// Function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license, userlicense) {
  if (license === 'none') return '';
  if (license === 'other') return `## License
   This project is licensed under the ${userlicense} license.`;
  return `## License
This project is licensed under the [${fullName(license)}](${renderLicenseLink(license)}).`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(getLicenseData(data))}

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

\`\`\`
${data.code}
\`\`\`

## Usage
${data.usage}

${renderLicenseSection(data.license, data.userlicense)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me with the information below:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
© ${currentYear} ${data.github}. All Rights Reserved.

`;
}

export default generateMarkdown;