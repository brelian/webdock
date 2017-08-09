module.exports = function(c) {

    c.Messages.Replies.list({limit:3}, function(err, res){
        console.log('******************************************');
        console.log('Messages.Replies.list()', err, res);
        //      if (err) { return; }

        c.Messages.Replies.find({query:'a b c', limit:1}, function(err, res){
            console.log('******************************************');
            console.log('Messages.Replies.find()', err, res);
            //      if (err) { return; }

        });

    });

}