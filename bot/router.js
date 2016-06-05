'use strict';

const DB = require('./db');
const co = require('co');
const routeMap = new Map();
function router(bot) {
  // echo
  routeMap.set(/\/echo (.+)/, (msg, match) => {
    co(function* echo() {
      const fromId = msg.from.id;
      let resp = match[1];
      try {
        const res = yield DB.getData();
        resp += res;
        console.info('yielded!');
      } catch (e) {
        console.info('error', e);
        resp += e;
      }
      bot.sendMessage(fromId, resp);
    });
  });
  return routeMap;
}

module.exports = router;
