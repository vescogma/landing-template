'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return new _promise2.default((resolve, reject) => {
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