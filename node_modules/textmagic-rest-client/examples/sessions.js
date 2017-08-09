module.exports = function(c) {

    c.Messages.send({text: 'test message', phones:'79045856906,9990001', dummy: 0}, function(err, res){
        console.log('******************************************');
        console.log('Messages.send()', err, res);
//      if (err) { return; }
        var sid = res.id;
        c.Messages.Sessions.get(sid, function(err, res){
            console.log('******************************************');
            console.log('Messages.Sessions.get()', err, res);
//      if (err) { return; }

            c.Messages.Sessions.messages(sid, function(err, res){
                console.log('******************************************');
                console.log('Messages.Sessions.messages()', err, res);
//      if (err) { return; }

                c.Messages.Sessions.delete(sid, function(err, res){
                    console.log('******************************************');
                    console.log('Messages.Sessions.delete()', err, res);
//      if (err) { return; }

                });
            });
        });
    });
}