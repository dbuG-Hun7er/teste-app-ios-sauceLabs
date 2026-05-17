const { $ } = require('@wdio/globals');

class CheckoutPage {
  get btnCheckout() {
    return $('~completeCheckout');
  }

  get successMessageAndImage() {
    return $('~transactionSuccessfulImage');
  }

  get sucessTitle() {
    return $(
      '-ios predicate string:name == "Order Success" AND label == "Order Success" AND value == "Order Success"'
    );
  }

  async proceedToCheckout() {
    await this.btnCheckout.waitForDisplayed({ timeout: 15000 });
    await this.btnCheckout.click();
  }
}

module.exports = new CheckoutPage();