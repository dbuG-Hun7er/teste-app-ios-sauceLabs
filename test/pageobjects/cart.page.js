const { $ } = require('@wdio/globals');

class CartPage {
  get btnSelectAddressOrContinue() {
    return $('~selectAddressOrContinueToPayment');
  }

  get addNewAddressButton() {
    return $('~addNewAddress');
  }

  async doesNotHaveAddress() {
    const label = await (
      await this.btnSelectAddressOrContinue
    ).getAttribute('label');
    return label === 'Select address';
  }

  async continueToPayment() {
    await this.btnSelectAddressOrContinue.waitForDisplayed({ timeout: 15000 });
    await this.btnSelectAddressOrContinue.click();
  }

  async btnAddNewAddress() {
    await this.addNewAddressButton.waitForDisplayed({ timeout: 15000 });
    await this.addNewAddressButton.click();
  }
}

module.exports = new CartPage();