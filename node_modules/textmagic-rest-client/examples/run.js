var TMClient = require('../index.js')
var path = './' + process.argv[2] + '.js';
var c = new TMClient(process.argv[3], process.argv[4]);

require(path)(c);
