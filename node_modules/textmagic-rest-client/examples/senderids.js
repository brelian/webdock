module.exports = function(c) {

    c.Sources.SenderIds.list({limit:2}, function(err, res){
        console.log('******************************************');
        console.log('c.Sources.SenderIds.list()', err, res);

        c.Sources.SenderIds.create({senderId:'BNodetest', explanation:'test working'}, function(err, res){
            console.log('******************************************');
            console.log('c.Sources.SenderIds.create()', err, res);
            if (err) return;
            var sid = res.id;
            c.Sources.SenderIds.get(sid, function(err, res){
                console.log('******************************************');
                console.log('c.Sources.SenderIds.get()', err, res);

                c.Sources.SenderIds.delete(sid, function(err, res){
                    console.log('******************************************');
                    console.log('c.Sources.SenderIds.delete()', err, res);

                });
            });

        });
    });

}