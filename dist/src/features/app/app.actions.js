'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = sendEmail;
async function sendEmail() {
  fetch('/email', { method: 'get' });
}