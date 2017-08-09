module.exports = function(c) {

    c.Messages.send({text: 'test message', phones:'9990001', dummy: 0}, function(err, res){
        console.log('******************************************');
        console.log('Messages.send()', err, res);
        if (err) { return; }
        var sid = res.id;

        c.Messages.Sessions.messages(sid, function(err, res){
            console.log('******************************************');
            console.log('Messages.Sessions.messages()', err, res);

            var mid = res.resources[0].id;

            c.Messages.get(mid, function(err, res){
                console.log('******************************************');
                console.log('Messages.get()', err, res);

                c.Messages.delete(mid, function(err, res){
                    console.log('******************************************');
                    console.log('Messages.delete()', err, res);
                });

            });
        });
    });
}