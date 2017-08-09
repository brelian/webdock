var qs = require('querystring');
var https = require('https');
var _ = require('lodash');

function HttpClient(options){
    this.options = options;
}

HttpClient.prototype.request = function(settings, path, args, result){

    if (! _.isFunction(result)) {
        result = function(){};
    }
    var method = settings.method;
    var prefix = settings.prefix;
    var isGetDelete = method === 'GET' || method === 'DELETE';
    var options = _.cloneDeep(this.options);
    options.method = method;

    if (isGetDelete) {
        options.path = options.path + path + '?' + qs.stringify(args);
    } else {
        options.path = options.path + path;
        delete args.id;
        var data = qs.stringify(args);
        _.assign(
            options.headers,
            {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(data)
            }
        );
    }

    var req = https.request(options, function(res) {
        var response = '';
        res.on('data', function chunk(chunk) { response = response + chunk; });

        res.on('end', function end() {
            if (res.statusCode >= 500) {
                result(new Error('Oops unknown error!'));
            } else if (res.statusCode >= 400) {
                var parsed = JSON.parse(response);
                result(new Error(parsed.message), parsed);
            } else if (res.statusCode == 204){
                result(null, {});
            }
            else {
                result(null, JSON.parse(response));
            }
        })
    });

    req.on('error', function(e) { result(e);});

    if (! isGetDelete) {
        req.write(data);
    }
    this.prevRequestTime = Date.now();
    req.end();
}

module.exports = HttpClient;
