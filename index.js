// Import the modules
import fs from 'fs';
import inquirer from 'inquirer';
// Import the 'generateMarkdown' function from the local 'generateMarkdown.js' file
import generateMarkdown from './utils/generateMarkdown.js';

// Define an array of questions to prompt the user
const questions = [
  { type: 'input', name: 'title', message: 'What is the title of your project?' },
  { type: 'input', name: 'description', message: 'Provide a description of your project:' },
  { type: 'input', name: 'installation', message: 'Provide installation instructions:' },
  { type: 'input', name: 'code', message: 'Provide any code lines:' },
  { type: 'input', name: 'usage', message: 'Provide usage information:' },
  { type: 'input', name: 'contributing', message: 'Provide contribution guidelines:' },
  { type: 'input', name: 'tests', message: 'Provide test instructions:' },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: [
        { name: 'Apache License 2.0', value: 'APACHE_2.0' },
        { name: 'GNU General Public License v3.0', value: 'GPL_3.0' },
        { name: 'BSD 2-Clause "Simplified" License', value: 'BSD_2_CLAUSE' },
        { name: 'BSD 3-Clause "New" or "Revised" License', value: 'BSD_3_CLAUSE' },
        { name: 'Boost Software License 1.0', value: 'BSL_1.0' },
        { name: 'Creative Commons Zero v1.0 Universal', value: 'CC0_1.0' },
        { name: 'Eclipse Public License 2.0', value: 'EPL_2.0' },
        { name: 'GNU Affero General Public License v3.0', value: 'AGPL_3.0' },
        { name: 'GNU General Public License v2.0', value: 'GPL_2.0' },
        { name: 'GNU Lesser General Public License v2.1', value: 'LGPL_2.1' },
        { name: 'Mozilla Public License 2.0', value: 'MPL_2.0' },
        { name: 'MIT License', value: 'MIT' },
        { name: 'The Unlicense', value: 'UNLICENSE' },
        { name: 'None', value: 'none' },
        { name: 'Other', value: 'other'},
             ],
},
  // Prompt for custom license name if 'Other' is selected

{ when: (answers) => answers.license === 'other',
    type: 'input',
    name: 'userlicense',
    message: 'Enter the name of your custom license:',
},
{ type: 'input', name: 'github', message: 'Enter your GitHub username:' },
{ type: 'input', name: 'email', message: 'Enter your email address:' }
];

// Prompt the user to answer the questions
console.log('Please answer the following questions to generate your README.md file:');

// Use inquirer to prompt the user with the defined questions
inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateMarkdown(answers);
  fs.writeFileSync('README.md', readmeContent);
  console.log('README.md has been generated!');});

