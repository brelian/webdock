var sms = require('free-mobile-sms-api');

sms.account(18042670878,'myPrivateKey');
sms.send("Hello world!");