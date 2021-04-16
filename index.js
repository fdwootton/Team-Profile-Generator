const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

let teamMemberArray = [];

const generateHTML = (response) => `<!DOCTYPE html>
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

    <div class="card text-center">
        <div class="card-body">
        <h5 class="card-title">Manager: ${response.managerName} </h5>
        <p class="card-text">ID: ${response.managerId}</p>
        <p class="card-text">Email: ${response.managerEmail}</p>
        <p class="card-text">Office #: ${response.managerOffice}</p>
        </div>
    </div>
    
</body>
</html>`

const appendEngineerHTML = (response) => `
    <div class="card text-center">
        <div class="card-body">
        <h5 class="card-title">Engineer: ${response.engineerName} </h5>
        <p class="card-text">ID: ${response.engineerId}</p>
        <p class="card-text">Email: ${response.engineerEmail}</p>
        <p class="card-text">Github Username: ${response.engineerGithub}</p>
        </div>
    </div>
</body>
</html>`

const appendInternHTML = (response) => `
    <div class="card text-center">
        <div class="card-body">
        <h5 class="card-title">Intern: ${response.internName} </h5>
        <p class="card-text">ID: ${response.internId}</p>
        <p class="card-text">Email: ${response.internEmail}</p>
        <p class="card-text">School: ${response.internSchool}</p>
        </div>
    </div>
</body>
</html>`

function addManager() {
    inquirer
    .prompt([{
        type: 'input',
        message: 'Enter the name of the team manager:',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'Enter the id of the team manager:',
        name: 'managerId'
    },
    {
        type: 'input',
        message: 'Enter the email of the team manager:',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'Enter the office number of the team manager:',
        name: 'managerOffice'
    },
    
])
    .then((response) => {
        let name = response.managerName;
        let id = response.managerId;
        let email = response.managerEmail;
        let officeNumber = response.managerOffice;
        let teamManager = new Manager(name, id, email, officeNumber);
        teamMemberArray.push(teamManager);

        const HTML = generateHTML(response);
        fs.writeFile('myteam.html', HTML, (error) => {
            error ? console.log(error) : console.log('Starter HTML created!');
        })

        addTeamMember();
    });
};

function addTeamMember() {
    inquirer
    .prompt([{
        type: 'list',
        message: 'Would you like to add another team member?',
        choices: [
            'Yes, add an Intern',
            'Yes, add an Engineer',
            'No, I am finished building my team'
        ],
        name: 'memberType'
    }])
    .then((response) => {

        const choice = response.memberType;
        if(choice === 'Yes, add an Intern') {
            addIntern();
        }
        else if(choice === 'Yes, add an Engineer') {
            addEngineer();
        }
        else {
            console.log('Team Complete!')
            console.log(teamMemberArray);
        }
    });
}

function addIntern() {
    inquirer
    .prompt([{
        type: 'input',
        message: 'Enter the name of the intern:',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'Enter the id of the intern:',
        name: 'internId'
    },
    {
        type: 'input',
        message: 'Enter the email of the intern:',
        name: 'internEmail'
    },
    {
        type: 'input',
        message: 'Enter the school of the intern:',
        name: 'internSchool'
    },
    
])
    .then((response) => {
        let name = response.internName;
        let id = response.internId;
        let email = response.internEmail;
        let school = response.internSchool;
        let teamIntern = new Intern(name, id, email, school);
        teamMemberArray.push(teamIntern);

        const internHTML = appendInternHTML(response);
        fs.appendFile('myteam.html', internHTML, (error) => {
            error ? console.log(error) : console.log('Starter HTML created!');
        })

        addTeamMember();
    }
)};

function addEngineer() {
    inquirer
    .prompt([{
        type: 'input',
        message: 'Enter the name of the engineer:',
        name: 'engineerName'
    },
    {
        type: 'input',
        message: 'Enter the id of the engineer:',
        name: 'engineerId'
    },
    {
        type: 'input',
        message: 'Enter the email of the engineer:',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'Enter the github username of the engineer:',
        name: 'engineerGithub'
    },
    
])
    .then((response) => {
        let name = response.engineerName;
        let id = response.engineerId;
        let email = response.engineerEmail;
        let github = response.engineerGithub;
        let teamEngineer = new Engineer(name, id, email, github);
        teamMemberArray.push(teamEngineer);

        const engineerHTML = appendEngineerHTML(response);
        fs.appendFile('myteam.html', engineerHTML, (error) => {
            error ? console.log(error) : console.log('Starter HTML created!');
        })
        
        addTeamMember();
    }
)};

addManager();