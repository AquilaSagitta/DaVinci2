[![Build Status](https://travis-ci.org/AquilaSagitta/DaVinci2.svg?branch=master)](https://travis-ci.org/AquilaSagitta/DaVinci2)

# DaVinci 2

Simplicity Improved. DaVinci 2 is an opinionated foundation for new projects based on a PHP, MySQL, and *nix based
stack.

## Getting Started

Getting you up and running quickly! Make sure you have all requirements installed properly.

### Pre-requisites

- Vagrant
- Node.js 8
- PHP 5.6
- Composer

### Installation

DaVinci2 utilizes Vagrant to make setting up the development environment very simple. Simply

```
npm start
```

You can view your web app at `localhost:8888` and connect to the MySQL database at `localhost:8889`

## Running Tests

You can run the full test suite simply by

```
npm test
```

## Deployment

// TODO

## Built With

Ideally no frameworks will be used. The goal is simplicity through capturing the essence of a web app.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/AquilaSagitta/DaVinci2/tags). 

## Authors

* **Chris Blahut** - *Initial work* - [Aquila Sagitta](https://github.com/AquilaSagitta)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

### Roadmap

- [ ] create templated files from CLI to speed up repetitive boiler plate
- [ ] custom templates for extending in the future
- [x] tests and source files in same directory for readability and understandability purposes
- [ ] Feature testing using Behat and Cucumber