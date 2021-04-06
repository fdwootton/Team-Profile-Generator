const inquirer = require('inquirer');
const fs = require('fs');
const { COMPLETIONSTATEMENT_TYPES } = require('@babel/types');

const questions = [
    {
        type: 'input',
        message: 'What is your team members name?',
        name: 'name'
    }
];

inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
    });

    