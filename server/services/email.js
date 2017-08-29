const apiKey = 'key-ae93e1a16dbcbba337654eed3ab22275';
const domain = 'sandboxae045883d4274b24af8a4dd1579734aa.mailgun.org';
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
        resolve(body);
      }
    });
  });
}

module.exports = { testEmail };
