require('dotenv/config');
const { sauceConf } = require('./sauce.conf.js');

if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
  throw new Error('Configure SAUCE_USERNAME e SAUCE_ACCESS_KEY antes de executar os testes.');
}

exports.config = sauceConf;