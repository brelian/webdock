var _ = require('lodash');

var Controller = require('./lib/Controller.js');
var HttpClient = require('./lib/HttpClient.js');

function TMRestClient(userName, apiKey, options) {
    var defaults = {
        host: 'rest.textmagic.com',
        version: 'v2',
        agent: 'textmagic-rest-nodejs/0.01',
        language: 'en;q=1'
    };

    if (!userName || !apiKey) {
        throw ('No username or token supplied.');
    }

    this.options = _.assign(defaults, options);

    var httpOptions = {
        hostname: this.options.host,
        port: 443,
        path: '/api/' + this.options.version + '/',
        method: 'GET',
        headers : {
            'user-agent': this.options.agent,
            'accept-language': this.options.language,
            'x-tm-key': apiKey,
            'x-tm-username': userName
        }
    };

    var http = new HttpClient(httpOptions);
    var a = new Controller(http, require('./resources/index.js'), this);

}

TMRestClient.prototype.host = function () {
    return 'https://' +  this.options.host ;
};


module.exports = TMRestClient;

