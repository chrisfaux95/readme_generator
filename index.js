var inquirer = require('inquirer')

var questions = [
    {
        type: 'input',
        name: 'title',
        message: "Project Title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your Project?"
    },
    {
        type: 'list',
        name: 'language',
        message: "What are you coding this in?",
        choices: ['JS', 'Python', 'Full Web', 'Java', 'Ruby']
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: [
            'MIT',
            'GNU'
        ]
    }
]

inquirer.prompt(questions).then((answers) => console.log(answers))
