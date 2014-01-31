module.exports.sendmail = function(message, auth) {
  var nodemailer = require('nodemailer');

// Create a SMTP transport object
  var transport = nodemailer.createTransport("SMTP", {
    //service: 'Gmail', // use well known service.
    auth: auth
  });

  console.log('SMTP Configured');

  console.log('Sending Mail');
  transport.sendMail(message, function(err) {
    if (err) {
      console.log('Error occured');
      console.log(err.message);
      return JSON.stringify({error: err.message});
    }
    console.log('Message sent successfully!');

    // if you don't want to use this transport object anymore, uncomment following line
    transport.close(); // close the connection pool
  });
  return JSON.stringify({status: 'ok'});
};
