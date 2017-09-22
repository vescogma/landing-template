const apiKey = process.env.MAILGUN_API;
const domain = process.env.MAILGUN_DOMAIN;
const mailgun = require('mailgun-js')({ apiKey, domain });

function testEmail() {
  const data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'vescogma@gmail.com',
    subject: 'Earthling is calling you',
    text: 'Tetsing some shit with shit yeee'
  };

  return new Promise((resolve, reject) => {
    mailgun.messages().send(data, (error, body) => {
      if (error) {
        reject(error);
      } else {
        console.log('email has been sent');
        resolve(body);
      }
    });
  });
}

module.exports = { testEmail };
