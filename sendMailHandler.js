/*
 * Http client
 */
var request = require('request');

var message = {
  // sender info
  from: 'Sender Name <tparnyuk.test@gmail.com>',
  // Comma separated list of recipients
  to: '"Receiver Name" <t.parnyuk@videal.net>',
  // Subject of the message
  subject: 'Hello mail',

  headers: {
    'X-Laziness-level': 1000
  },
  // plaintext body
  text: 'Hello to myself!',
  // HTML body
  html: '<p><b>Hello</b> to myself</p>' +
          '<p>Message text<img src="http://127.0.0.1:3000/readmail"/></p>'
};
var auth = {
  user: "tparnyuk.test@gmail.com",
  pass: "videal13"
};

var options = {
  url: "http://127.0.0.1:3000/sendmail",
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  json: {
    message: message,
    auth: auth
  }
};

request.post(options, function(error, response, body) {
  console.log(body);
});


