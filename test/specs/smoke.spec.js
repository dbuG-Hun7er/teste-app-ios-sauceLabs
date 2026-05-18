const { expect } = require('@wdio/globals');
const homePage = require('../pageobjects/home.page.js');
const loginPage = require('../pageobjects/login.page.js');

describe('Smoke Test', function () {
  this.timeout(300000);

  it.only('deve realizar o login com sucesso', async function () {
    await homePage.openMenu('Profile');
    await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ');
    await browser.pause(5000);
    await expect($('~btnLogin')).not.toBeDisplayed();
  });
});