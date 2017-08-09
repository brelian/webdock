module.exports = function(c) {

    c.Messages.Schedules.list({limit:1}, function(err, res){
        console.log('******************************************');
        console.log('Messages.Schedules.list()', err, res);
        if (err) { return; }

        var sid = res.resources[0].id;
        c.Messages.Schedules.get(sid, function(err, res){
            console.log('******************************************');
            console.log('Messages.Schedules.get()', err, res);
            if (err) { return; }

            c.Messages.send({text: 'test message', phones:'9990001', dummy: 0, sendingTime: 1465546328}, function(err, res){
                console.log('******************************************');
                console.log('Messages.send()', err, res);
                if (err) { return; }
                var mid = res.id;

                c.Messages.Schedules.delete(mid, function(err, res){
                    console.log('******************************************');
                    console.log('Messages.Schedules.delete()', err, res);
                });
            });
        });
    });

}