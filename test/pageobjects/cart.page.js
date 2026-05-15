import { $ } from "@wdio/globals";

class CartPage {
  get selectAddressOrContinueButton() {
    return $(`~selectAddressOrContinueToPayment`);
  }

  get addNewAddressButton() {
    return $("~addNewAddress");
  }

  async doesNotHaveAddress() {
    const label = await this.selectAddressOrContinueButton.getAttribute("label");
    return label === "Select address";
  }

  async continueToPayment() {
    await this.selectAddressOrContinueButton.click();
  }

  async addNewAddress() {
    await this.addNewAddressButton.click();
  }
}

export default new CartPage();
