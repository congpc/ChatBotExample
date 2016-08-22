//  
//  Utils: logger.js
// 
//  Created by Pham Chi Cong on 07/27/16 (MM/DD/YY).
//  Copyright (c) 2016 Transcosmos. All rights reserved.
//

var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
transports: [
    new winston.transports.File({
        level: 'info',
        filename: './logs/all-logs.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880, //5MB
        maxFiles: 10,
        timestamp: true,
        colorize: false
    }),
    new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        json: false,
        timestamp: true,
        colorize: true
    })
],
exitOnError: false
});

module.exports = logger;
module.exports.stream = {
write: function(message, encoding){
    logger.info(message);
}
};