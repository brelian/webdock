// var TMClient = require('textmagic-rest-client');

// var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
// c.Messages.send({text: 'test message', phones:'18042670878'}, function(err, res){
//         console.log('Messages.send()', err, res);

// });

var text = require('textbelt');

text.send('18042670878', 'A sample text message!', undefined, function(err) {
  if (err) {
    console.log(err);
  }
});