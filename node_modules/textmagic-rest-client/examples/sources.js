module.exports = function(c) {
    c.Sources.list({}, function(err, res){
        console.log('******************************************');
        console.log('c.Sources.list()', err, res);

        c.Sources.Numbers.list({}, function(err, res){
            console.log('******************************************');
            console.log('c.Sources.Numbers.list()', err, res);

            c.Sources.Numbers.list({}, function(err, res){
                console.log('******************************************');
                console.log('c.Sources.Numbers.list()', err, res);
                if (err) return;
                var nid = res.resources[0].id;

                c.Sources.Numbers.get(nid, function(err, res){
                    console.log('******************************************');
                    console.log('c.Sources.Numbers.get()', err, res);

                    c.Sources.Numbers.find({'country': 'GB'}, function(err, res){
                        console.log('******************************************');
                        console.log('c.Sources.Numbers.find()', err, res);

                    });
                });
            });
        });
    });
}