const { $ } = require('@wdio/globals');

class ProductPage {
  get addToCartButton() {
    return $('~addToCart');
  }

  async btnAddToCart() {
    await this.addToCartButton.waitForDisplayed({ timeout: 15000 });
    await this.addToCartButton.click();
  }
}

module.exports = new ProductPage();