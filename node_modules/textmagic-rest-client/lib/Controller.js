var _ = require('lodash');

function Controller(http, routes, that){
    this.routes = routes;
    this.http = http;
    var self = (that === undefined) ? this : that;

    for (var action in routes){
        if ( action[0] === action[0].toUpperCase()) {
            Object.defineProperty(self, action, { get: function (action) {
                var hidden = '__' + action + '__';
                if (this[hidden] !== undefined) {
                    return this[hidden];
                }
                this[hidden] = new Controller(http, require('..' + routes[action]));
                return this[hidden];
            }.bind(self, action)
            });

        } else {
            self[action] = function(action, options, result){
                if (! _.isFunction(result)) {
                    result = null;
                }
                this.request(action, options, result);
            }.bind(this, action);
        }
    }
}

Controller.prototype.request = function(action, options, result){
    var settings = this.routes[action];

    if (settings.single && _.isNumber(options)){
        options = {id: options};
    }

    if (_.isFunction(options)){
        result = options;
        options = {};
    }
    var args = _.assign(settings.args, options);
    var compile = _.template(settings.path);
    var path = compile(args);
//    console.log(args);
    this.http.request(settings, path, args, result);
}

module.exports = Controller;
