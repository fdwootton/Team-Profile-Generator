const inquirer = require('inquirer');
const fs = require('fs');
// const { COMPLETIONSTATEMENT_TYPES } = require('@babel/types'); 

const questions = [
    {
        type: 'input',
        message: 'What is your team members name?',
        name: 'name'
    }
];

const starterHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <title>My Team</title>
</head>
<body>
    <header class = "jumbotron" style="text-align: center";>
        <h1>My Team</h1>
    </header>
    
</body>
</html>`

inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);

        fs.writeFile('myteam.html', starterHTML, (error) => {
            error ? console.log(error) : console.log('Starter HTML created!');
        })
    });



