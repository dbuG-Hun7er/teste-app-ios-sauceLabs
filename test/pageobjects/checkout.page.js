import { $ } from "@wdio/globals";

class CheckoutPage {
  get checkoutButton() {
    return $(`~completeCheckout`);
  }

  get successMessageAndImage() {
    return $(`~transactionSuccessfulImage`);
  }

  get successTitle() {
    return $(
      `-ios predicate string:name == "Order Success" AND label == "Order Success" AND value == "Order Success"`
    );
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

export default new CheckoutPage();
