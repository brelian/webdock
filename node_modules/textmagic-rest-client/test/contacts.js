var assert = require("assert")
var nock = require('nock');
var TMClient = require('../index');

var c = new TMClient('user', '123');

describe('Contacts', function(){
    describe('... ', function(){
        it('list({limit: 3}) should get /api/v2/contacts?limit=3 url ', function(done){
            var test = nock(c.host())
                .get('/api/v2/contacts?limit=3')
                .reply(200, true);

            c.Contacts.list({limit: 3}, function(err,res){
                assert.ok(res);
                done();
            });
        });

        it('create({a:true}) should post /api/v2/contacts {a: 123}', function(done){
            var test = nock(c.host())
                .post('/api/v2/contacts', {a:  '123'})
                .reply(200, true);

            c.Contacts.create({a:'123'}, function(err,res){
                assert.ok(res);
                done();
            });
        });

        it('search({ids:123}) should get  /api/v2/contacts/search?ids=123 url', function(done){
            var test = nock(c.host())
                .get('/api/v2/contacts/search?ids=123')
                .reply(200, true);

            c.Contacts.find({ids:123}, function(err, res){
                assert.ok(res);
                done();
            });
        });

    })
})




