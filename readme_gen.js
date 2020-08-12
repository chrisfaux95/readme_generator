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
    let l;
    switch(input.license) {
        case 'MIT':
            break;
        case 'GNU':
            break;
        default:
            return null; 
    }
}

function contactInfo(input) {
    return ` You can contact me at ${input.email}
    `
}

module.exports = createReadmeText;