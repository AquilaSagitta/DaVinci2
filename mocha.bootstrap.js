// runs before test suite using `mocha -r /path/to/mocha.bootstrap.js`

var chai = require('chai');
chai.should();
chai.use(require("sinon-chai"));