module.exports = function(c) {

    c.Contacts.Customfields.list({limit:1}, function(err, res){
        console.log('******************************************');
        console.log("Contacts.Customfields.list()", err, res);
        if (err) {
            return;
        }

        c.Contacts.Customfields.create({name: 'test123'}, function(err, res){
            console.log('******************************************');
            console.log("Contacts.Customfields.create()", err, res);
            if (err) {
                return;
            }

            var cfid = res.id;

            c.Contacts.Customfields.update({id:cfid, name: 'test456'}, function(err, res){
                console.log('******************************************');
                console.log("Contacts.Customfields.update()", err, res);
                if (err) {
                    return;
                }


                c.Contacts.Customfields.get(cfid, function(err, res){
                    console.log('******************************************');
                    console.log("Contacts.Customfields.get()", err, res);
                    if (err) {
                        return;
                    }


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
                                phone: '17025555009',
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


                                c.Contacts.Customfields.updateForContact({id:cfid, contactId:cid, value: 'value'}, function(err, res){
                                    console.log('******************************************');
                                    console.log("Contacts.Customfields.updateForContact()", err, res);


                                    c.Contacts.delete(cid, function(err, res){
                                        console.log('******************************************');
                                        console.log('Contacts.delete()', err, res);


                                        c.Lists.delete(lid, function(err, res){
                                            console.log('******************************************');
                                            console.log('Lists.delete()', err, res);


                                            c.Contacts.Customfields.delete(cfid, function(err, res){
                                                console.log('******************************************');
                                                console.log('Contacts.Customfields.delete()', err, res);
                                            });

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