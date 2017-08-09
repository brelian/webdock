module.exports = function(c) {
    c.Templates.list({limit:1}, function(err, res){
        console.log('******************************************');
        console.log('Templates.list()', err, res);
        if (err) { return; }

        c.Templates.create({name:'test_node', content:'123456'}, function(err, res){
            console.log('******************************************');
            console.log('Templates.create()', err, res);
            if (err) { return; }
            var tid = res.id;

            c.Templates.find({ids:tid, limit:1}, function(err, res){
                console.log('******************************************');
                console.log('Templates.find()', err, res);

                c.Templates.update({id:tid, name:'test_node', content:'987654'}, function(err, res){
                    console.log('******************************************');
                    console.log('Templates.update()', err, res);

                    c.Templates.get(tid, function(err, res){
                        console.log('******************************************');
                        console.log('Templates.get()', err, res);

                        c.Templates.delete(tid, function(err, res){
                            console.log('******************************************');
                            console.log('Templates.delete()', err, res);
                            if (err) { return; }
                        });

                    });
                });
            });
        });
    });
}
