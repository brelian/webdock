module.exports = function(c) {

    c.Lists.create({name: 'test'}, function(err, res){
        console.log('******************************************');
        console.log("Lists.create()", err, res);

        if (err) {
            return;
        }
        var lid = res.id;

        c.Contacts.create({
            firstName: 'Jonn',
            lastName: 'Doe',
            phone: '+17025555009',
            email: 'jon@doe.com',
            companyName: 'Company LLC',
            country: 'US',
            lists: res.id
        },
        function(err, res){
            console.log('******************************************');
            console.log('Contacts.create()', err, res);
            if (err) { return; }
            var cid = res.id;

            c.Contacts.find({ids: cid, limit:1}, function(err, res){
                console.log('******************************************');
                console.log('Contacts.find()', err, res);
                if (err) { return; }

                c.Contacts.contactLists({id:cid}, function(err, res){
                    console.log('******************************************');
                    console.log('Contacts.contactLists()', err, res);
                    if (err) { return; }

                    c.Contacts.update({
                        id: cid,
                        firstName: 'Jonny',
                        lastName: 'Doe',
                        phone: '17025555009',
                        email: 'jon@doe.com',
                        companyName: 'Company LLC',
                        country: 'US',
                        lists: lid
                    },
                    function(err, res){
                        console.log('******************************************');
                        console.log('Contacts.update()', err, res);
                        if (err) { return; }

                        c.Contacts.get(cid, function(err, res){
                            console.log('******************************************');
                            console.log('Contacts.get()', err, res);
                            if (err) { return; }

                            c.Contacts.delete(cid, function(err, res){
                                console.log('******************************************');
                                console.log('Contacts.delete()', err, res);
                                if (err) { return; }

                                c.Lists.delete(lid, function(err, res){
                                    console.log('******************************************');
                                    console.log('Lists.delete()', err, res);
                                    if (err) { return; }


                                    c.Contacts.get(cid, function(err, res){
                                        console.log('******************************************');
                                        console.log('Contacts.get()', err, res);
                                    });

                                    c.Lists.get(lid, function(err, res){
                                        console.log('******************************************');
                                        console.log('Lists.get()', err, res);
                                    })

                                });

                            });

                        });

                    });

                });

            });

        });
    });

}