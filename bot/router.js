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
        resp += fromId;
        console.info('yielded!');
      } catch (e) {
        console.info('error', e);
        resp += e;
      }
      bot.sendMessage(fromId, resp);
    });
  });

  routeMap.set(/\/(pilot|driver|пилот|гонщик) (.+)/, (msg, match) => {
    co(function* echo() {
      const toId = msg.from.id;
      const ru = match[1].charCodeAt(0) > 150;
      let res = ru ? 'Гонщик не найден' : 'Pilot not found';
      try {
        res = yield DB.getDriverInfo(match[2], ru);
        console.log(res);
        const p = yield bot.sendPhoto(toId, 'AgADAgADrKcxG_BsdQ0dpIg3NStr-CMUSA0ABM3BX8tkay-7vhQBAAEC');
      } catch (e) {
        console.info('error', e);
      }
      bot.sendMessage(toId, JSON.stringify(res)).catch(console.error);
    });
  });
  return routeMap;
}

module.exports = router;
