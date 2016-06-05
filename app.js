'use strict';

const argv = require('minimist')(process.argv.slice(2));
const bot = require('./bot');
const parser = require('./parser');
const web = require('./admin');

switch (argv.role) {
  case 'bot':
    bot();
    break;
  case 'parser':
    parser();
    break;
  case 'web':
    web();
    break;
  default:
    throw new Error(`Wrong 'role' paremeter: ${argv.role}`);
}