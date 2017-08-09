module.exports = function(c) {

    c.Contacts.Unsubscribers.create({phone: '79045856900'}, function(err, res){
        console.log('******************************************');
        console.log("c.Contacts.Unsubscribers.create()", err, res);
        if (err) {
            return;
        }

        c.Contacts.Unsubscribers.list({limit: 1}, function(err, res){
            console.log('******************************************');
            console.log("c.Contacts.Unsubscribers.list()", err, res);
            if (err) {
                return;
            }

            var id = res.resources[0].id;

            c.Contacts.Unsubscribers.get(id, function(err, res){
                console.log('******************************************');
                console.log("c.Contacts.Unsubscribers.get()", err, res);
                if (err) {
                    return;
                }

            });
        });

    });

}