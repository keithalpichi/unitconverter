# Unitconverter

Unitconverter is a library to convert units such as length, mass, volume, and more.

## Table of Contents

1. [Installation](#installation)
1. [Usage](#usage)
1. [Documentation](#documentation)
1. [Develop](#develop)
1. [Contributing](#contributing)
1. [License](#license)
1. [Changelog](#changelog)

## Installation

`npm i @keithalpichi/unitconverter`

## Usage
Simply import the type of converter you'd like to use:
```
const { LengthConverter } from "@keithalpichi/unitconverter"

const item = new LengthConverter({ unit: "ft", value: 2 });

const value = item
                .to("in")
                .value()

console.log(value) // 24
```

## Documentation

*tbd*

## Develop

If you're interested in contributing please read the [Contributing Guide](./CONTRIBUTING.md)

* Fork this repo
* Install dependencies with `npm i`
* Create tests for your changes
* Make your changes
* Test your changes with `npm run test` (there is also  a git pre-commit hook that runs this script if you forget to)

## Contributing

*tbd*

## License

Unitconverter is [MIT licensed](./LICENSE)

## Changelog