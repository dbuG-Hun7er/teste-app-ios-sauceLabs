require('dotenv').config();

const bundleId = 'br.com.lojaebac';

const sauceConf = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  baseUrl: 'wd/hub',
  capabilities: [
    {
      platformName: 'iOS',
      'appium:app': `storage:filename=${process.env.SAUCE_APP}`,
      'appium:deviceName': 'iPhone XR Simulator',
      'appium:platformVersion': '17.0',
      'appium:automationName': 'XCUITest',
      'sauce:options': {
        build: 'teste-ebacshop-ios',
        name: 'Teste Ebac Shop iOS',
        deviceOrientation: 'PORTRAIT',
        appiumVersion: '2.0.0'
      }
    }
  ],
  maxInstances: 1,
  logLevel: 'info',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 300000
  },
  specs: ['../test/specs/smoke.spec.js'],
  reporters: ['spec'],
  beforeTest: async function () {
    const state = await driver.queryAppState(bundleId);
    if (state !== 4) {
      await driver.execute('mobile: launchApp', { bundleId });
    }
  },
  afterTest: async function () {
    try {
      await driver.execute('mobile: terminateApp', { bundleId });
    } catch (error) {
      console.warn(`Nao foi possivel encerrar o app: ${error.message}`);
    }
  }
};

module.exports = { sauceConf };