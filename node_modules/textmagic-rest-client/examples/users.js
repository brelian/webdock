module.exports = function(c) {

    c.User.statsMessages({}, function(err, res){
        console.log('******************************************');
        console.log("c.User.statsMessages()", err, res);

        c.User.statsSpending({limit: 1}, function(err, res){
            console.log('******************************************');
            console.log("c.User.statsSpending()", err, res);

            c.User.timezones({}, function(err, res){
                console.log('******************************************');
                console.log("c.User.timezones()", err, res);

                c.User.info({}, function(err, res){
                    console.log('******************************************');
                    console.log("c.User.info()", err, res);

                    res.lastName = res.lastName + '.'

                    delete res.id;
                    delete res.username;
                    delete res.balance;
                    delete res.currency;

                    res.company = 'Textmagic';

                    c.User.update(res, function(err, res){
                        console.log('******************************************');
                        console.log("c.User.update()", err, res);

                        if (err) { return; }
                        c.User.info({}, function(err, res){
                            console.log('******************************************');
                            console.log("c.User.info()", err, res);
                        });
                    });

                });

            });
        });

    });






}