'use strict';

// DB abstraction
// For postgreSQL use sequalize, as it returns Promises
const redis = require('redis');
const REDIS_URI = process.env.URI || require('../config').uri;
const client = redis.createClient(REDIS_URI);

class DB {
  constructor() {
    this.client = client;
  }
  getData() {
    return new Promise((res, rej) => {
      res(true);
    });
  }
}

module.exports = new DB();
