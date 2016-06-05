'use strict';

const koa = require('koa');
const app = koa();

function run() {
  app.use(function *() {
    this.body = 'Hello World';
  });

  app.listen(3000);
}

if (module.parent) module.exports = run;
else run();
