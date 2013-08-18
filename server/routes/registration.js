var aws = require('../modules/aws');

/**
 * Add token to sns
 * @param req
 * @param res
 */
exports.register = function (req, res) {
    var platformApplicationArn;
    if (req.params.platform == 'gcm') {
        platformApplicationArn = aws.config.gcmApplicationArn;
    }

    if (platformApplicationArn) {
        aws.sns.createPlatformEndpoint({
            "PlatformApplicationArn": platformApplicationArn,
            "Token": req.body.token
        }, function (err, data) {
            var responseHttpCode = 200;
            if (err) {
                console.log(err);
                responseHttpCode = 500;
            }
            res.send(responseHttpCode);
        });
    } else {
        res.send(400, "Platform missing");
    }
};


