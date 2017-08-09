module.exports = function(c) {

    c.Lists.create({name: 'test'}, function(err, res){
        console.log('******************************************');
        console.log("Lists.create()", err, res);

        if (err) {
            return;
        }
        var lid = res.id;

        c.Lists.update({id:lid, name: 'testChange'}, function(err, res){
            console.log('******************************************');
            console.log('Lists.update()', err, res);
//            if (err) { return; }

            c.Lists.get(lid, function(err, res){
                console.log('******************************************');
                console.log('Lists.get()', err, res);
//                if (err) { return; }

                c.Contacts.create({
                    firstName: 'Jonn',
                    lastName: 'Doe',
                    phone: '17025555009',
                    email: 'jon@doe.com',
                    companyName: 'Company LLC',
                    country: 'US',
                    lists: lid
                },
                function(err, res){
                    console.log('******************************************');
                    console.log('Contacts.create()', err, res);
//                    if (err) { return; }
                    var cid = res.id;

                    c.Lists.assign({id:lid, contacts: cid}, function(err, res){
                        console.log('******************************************');
                        console.log('Lists.assign()', err, res);
//                        if (err) { return; }

                        c.Lists.contactsByList({id:lid, limit:1}, function(err, res){
                            console.log('******************************************');
                            console.log('Lists.contactsByList()', err, res);
//                            if (err) { return; }

                            c.Lists.unassign({id:lid, contacts: cid}, function(err, res){
                                console.log('******************************************');
                                console.log('Lists.unassign()', err, res);
//                                if (err) { return; }

                                c.Contacts.delete(cid, function(err, res){
                                    console.log('******************************************');
                                    console.log('Contacts.delete()', err, res);
//                                    if (err) { return; }

                                    c.Lists.delete(lid, function(err, res){
                                        console.log('******************************************');
                                        console.log('Lists.delete()', err, res);
//                                        if (err) { return; }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}