/*
 * Mail Routes
 */
var sender = require('../lib/sendmail'),
        express = require('express');

module.exports = function(app) {
  app.post('/sendmail', express.bodyParser(), function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    
    var auth = req.body['auth'];
    var message = req.body['message'];
    console.log('Auth:\n' + JSON.stringify(auth));
    console.log('Message:\n' + JSON.stringify(message));
    res.end(sender.sendmail(message, auth));
  });

};