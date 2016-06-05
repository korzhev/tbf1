'use strict';

const TOKEN = process.env.TOKEN || require('../config').token;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(TOKEN, { polling: true });
const routsObj = require('./router')(bot);

function run() {
  routsObj.forEach((value, key) => {
    bot.onText(key, value);
  });
}

if (module.parent) module.exports = run;
else run();
