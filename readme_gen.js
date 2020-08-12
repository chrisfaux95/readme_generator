


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

    
    `
}