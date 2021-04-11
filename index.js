const inquirer = require('inquirer');
const fs = require('fs');

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

function addManager() {
    inquirer
    .prompt({
        type: 'input',
        message: 'Enter the name of your team manager:',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'Enter the id of your team manager:',
        name: 'managerId'
    },
    {
        type: 'input',
        message: 'Enter the email of your team manager:',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'Enter the office number of your team manager:',
        name: 'managerOffice'
    },
    
    )
    .then((response) => {
        console.log(response);

        fs.writeFile('myteam.html', starterHTML, (error) => {
            error ? console.log(error) : console.log('Starter HTML created!');
        })

        addTeamMember();
    });
};

function addTeamMember() {
    inquirer
    .prompt({
        type: 'list',
        message: 'Would you like to add another team member?',
        choices: [
            'Yes, add an Intern',
            'Yes, add an Engineer',
            'No, I am finished building my team'
        ],
        name: 'memberType'
    })
    .then((response) => {
        console.log(response);

        const choice = response.memberType;
        if(choice === 'Yes, add an Intern') {
            addIntern();
        }
        else if(choice === 'Yes, add an Engineer') {
            addEngineer();
        }
        else {
            console.log('Team Complete!')
        }

        fs.writeFile('myteam.html', starterHTML, (error) => {
            error ? console.log(error) : console.log('Starter HTML created!');
        })

        addTeamMember();
    });
}

addManager();