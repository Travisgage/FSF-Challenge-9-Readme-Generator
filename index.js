// Import necessary modules 
const fs = require('fs');
const inquirer = require('inquirer');
//import generateMarkdown 
const generateMarkdown = require('./utils/generateMarkdown');

//Questions for user input to fill out README
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: function(input) {
            return input ? true : 'Please enter a valid Github username.'
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function(input) {
            //this regex tests to see if input is an email address
            const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            if (!regex.test(input)) {
                return 'Please enter a valid email address'
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'projectName',
        message: 'Please provide a name for your project',
        validate: function(input) {
            return input ? true : 'Please enter the name of your project.'
        }

    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project',
        validate: function(input) {
            return input ? true : 'Please enter a description of your project.'
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'How would you like your project to be licensed?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
        validate: function(input) {
            if (!['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'].includes(input)) {
                return 'Please select a valid license option'
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'dependencies',
        message: 'How do users install any necessary dependencies?',
        validate: function(input) {
            return input ? true : 'Please enter instructions to install dependencies or write N/A.'
        }
    },

    {
        type: 'input',
        name: 'tests',
        message: 'How do users run tests to verify functionality, if applicable?',
        validate: function(input) {
            return input ? true : 'Please enter the instructions to run tests or write N/A'
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What usage instructions would you like to provide for users?',
        validate: function(input) {
            return input ? true : 'Please enter usage information about your project.'
        }
    },

    {
        type: 'input', 
        name: 'contributions',
        message: 'How can users contribute to your project?',
        validate: function(input) {
            return input ? true : 'Please include information about contributing to your project or write N/A.'
        }
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Add any credits and acknowledgements for your project here.',
        validate: function(input) {
            return input ? true : 'Please add your credits/acknowledgements or write N/A.'
        }
    }
];

//Function to write user input to a file called generatedREADME.md
function writeToFile(fileName, data) {
    fs.writeFile('generatedREADME.md', data, (err) => {
        if (err)
            console.log("There's been an error.  Please try again.");
        else {
            console.log('README has been successfully generated.  Please check generatedREADME.md for your new README.');
        }
    })
}

//Prompts user to answer questions and writes responses to generatedREADME.md
function init() {
    inquirer.prompt(questions)
    .then(data => {
        return generateMarkdown(data);
    })
    .then(data => {
        return writeToFile('generatedREADME.md', data);
});  
}

// Function call to initialize app
init();
