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

  getDriverInfo(name, ru) {
    console.log('infooo');
    return new Promise((res, rej) => {
      res({
        name: 'Vettel',
        stats: {
          championships: 4,
          wins: 40,
          poles: 40,
          fastlaps: 40,
          seasons: 9,
        },
        bio: 'some big text',
        photo: '/home/vk/Sebastian_Vettel_2011_Sebastian_Vettel_in_Yokohama_Infiniti_event.jpg',
      });
    });
  }
}

module.exports = new DB();
