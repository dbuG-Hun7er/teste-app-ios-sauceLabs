import { expect } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";
import loginPage from "../pageobjects/login.page.js";
import browsePage from "../pageobjects/browse.page.js";
import productPage from "../pageobjects/product.page.js";
import cartPage from "../pageobjects/cart.page.js";
import addressPage from "../pageobjects/address.page.js";
import checkoutPage from "../pageobjects/checkout.page.js";

describe("Checkout", () => {
  it("deve finalizar uma compra com sucesso", async () => {
    await homePage.openMenu("Account");
    await loginPage.login("cliente@ebac.art.br", "GD*peToHNJ1#c$sgk08EaYJQ");
    await homePage.openMenu("Home");
    await homePage.search();
    await browsePage.searchProduct("In");
    await browsePage.openFirstProduct();
    await productPage.addToCart();

    const doesNotHaveAddress = await cartPage.doesNotHaveAddress();

    if (doesNotHaveAddress) {
      await cartPage.addNewAddress();
      await addressPage.addNewAddress();
    }

    await cartPage.continueToPayment();
    await checkoutPage.proceedToCheckout();

    await expect(checkoutPage.successTitle).toBeDisplayed();
    await expect(checkoutPage.successMessageAndImage).toBeDisplayed();
  });
});
