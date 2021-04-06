const inquirer = require('inquirer');
const fs = require('fs');

const prompts = [
    {
        type: 'input',
        message: 'What is your team members name?',
        name: 'name'
    }
];

