var inquirer = require('inquirer');
var fs = require('fs');
const readme_gen = require("./readme_gen.js");

const resultFile = "generated_README"

var questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project?"
    },
    {
        type: 'input',
        name: 'install',
        message: 'Instructions for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for usage?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Instructions for contributing?'
    },
    // {
    //     type: 'list',
    //     name: 'language',
    //     message: "What are you coding this in?",
    //     choices: ['JS', 'Python', 'Full Web', 'Java', 'Ruby']
    // },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: readme_gen.licenseList
    }
]

// inquirer.prompt(questions).then((answers) => console.log(readme_gen.createReadmeText(answers)))

function writeToFile(filename, input){
    fs.writeFile(`./${filename}.md`, readme_gen.createReadmeText(input), err => {
        if (err) throw err;
        console.log('Saved!')
    });
}

function init() {
    inquirer.prompt(questions).then(answers => writeToFile(resultFile, answers));
}

init();