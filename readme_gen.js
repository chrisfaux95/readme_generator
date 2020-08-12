licenseList = [
    'MIT',
    'GNU GPLv3',
    'Apache 2.0',
    'GNU AGPLv3'
]

function createReadmeText(input) {
    return `
![Custom badge](https://img.shields.io/endpoint)  
# ${input.title}

${input.description}
---
### Table Of Contents
 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## Installation
 
${input.install} 

## Usage

${input.usage}

## Contributing

${input.contribute}

## Contact

${contactInfo(input)}

## License

${licenseInfo(input)}
`
}

function licenseInfo(input) {
    let licenseURL = "";
    switch (input.license) {
        case 'MIT':
            licenseURL = 'https://choosealicense.com/licenses/mit/';
            break;
        case 'GNU GPLv3':
            licenseURL = 'https://choosealicense.com/licenses/gpl-3.0/';
            break;
        case 'Apache 2.0':
            licenseURL = 'https://choosealicense.com/licenses/apache-2.0/'
            break;
        default:
            licenseURL: 'INSERT LICENSE URL HERE';
    }
    return `This project licensed under the [${input.license}](${licenseURL}) license.`
}

function contactInfo(input) {
    return ` You can contact me at ${input.email}
    `
}

module.exports = { createReadmeText: createReadmeText, licenseList: licenseList };

