import { $ } from "@wdio/globals";

class ProductPage {
  get addToCartButton() {
    return $("~addToCart");
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

export default new ProductPage();
