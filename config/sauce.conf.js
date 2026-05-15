const appName = process.env.SAUCE_APP || "LojaEBAC-sim.zip";
const bundleId = "br.com.lojaebac";

export const sauceConf = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  protocol: "https",
  path: "/wd/hub",

  specs: ["../test/specs/**/*.js"],
  suites: {
    checkout: ["../test/specs/checkout.spec.js"],
  },

  maxInstances: 1,
  logLevel: "info",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 100000,
  },

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  capabilities: [
    {
      platformName: "iOS",
      "appium:app": `storage:filename=${appName}`,
      "appium:deviceName": process.env.IOS_DEVICE || "iPhone XR Simulator",
      "appium:platformVersion": process.env.IOS_VERSION || "17.0",
      "appium:automationName": "XCUITest",
      "sauce:options": {
        build: process.env.SAUCE_BUILD || "ebac-ios-checkout",
        name: "Checkout iOS - EBAC Shop",
        deviceOrientation: "PORTRAIT",
        appiumVersion: "2.0.0",
      },
    },
  ],

  beforeTest: async function () {
    const state = await driver.queryAppState(bundleId);

    if (state !== 4) {
      await driver.execute("mobile: launchApp", { bundleId });
    }
  },

  afterTest: async function () {
    try {
      await driver.takeScreenshot();
    } catch (error) {
      console.warn(`Nao foi possivel capturar screenshot no afterTest: ${error.message}`);
    }

    try {
      await driver.execute("mobile: terminateApp", { bundleId });
    } catch (error) {
      console.warn(`Nao foi possivel encerrar o app no afterTest: ${error.message}`);
    }
  },
};
