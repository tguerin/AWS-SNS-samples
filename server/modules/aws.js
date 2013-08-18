var fs = require('fs')
    , AWS = require('aws-sdk');

AWS.config.loadFromPath('./aws-credentials.config');

exports.sns = new AWS.SNS();

fs.readFile('./aws-config.json', 'utf8', function (err, data) {
    if (err) {
        console.log('Error: ' + err);
        return;
    }

    exports.config = JSON.parse(data);
});
