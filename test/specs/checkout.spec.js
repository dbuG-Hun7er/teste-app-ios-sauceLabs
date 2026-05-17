const { expect } = require('@wdio/globals');
const homePage = require('../pageobjects/home.page.js');
const loginPage = require('../pageobjects/login.page.js');
const browsePage = require('../pageobjects/browse.page.js');
const productPage = require('../pageobjects/product.page.js');
const cartPage = require('../pageobjects/cart.page.js');
const addressPage = require('../pageobjects/address.page.js');
const checkoutPage = require('../pageobjects/checkout.page.js');

describe('Checkout', function () {
  this.timeout(300000);

  it('deve finalizar uma compra com sucesso', async function () {
    await homePage.openMenu('Account');
    await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ');
    await browser.pause(3000); // espera o app processar o login
    await homePage.openMenu('Profile'); // ← corrigido para 'Profile'
    await homePage.search();
    await browsePage.searchProduct('In');
    await browsePage.openFirstProduct();
    await productPage.btnAddToCart();

    const doesNotHaveAddress = await cartPage.doesNotHaveAddress();

    if (doesNotHaveAddress) {
      await cartPage.btnAddNewAddress();
      await addressPage.addNewAddress();
    }

    await cartPage.continueToPayment();
    await checkoutPage.proceedToCheckout();

    await expect(checkoutPage.sucessTitle).toBeDisplayed();
    await expect(checkoutPage.successMessageAndImage).toBeDisplayed();
  });
});