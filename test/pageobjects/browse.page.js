import { $, $$ } from "@wdio/globals";

class BrowsePage {
  get searchInput() {
    return $("~searchInput");
  }

  get products() {
    return $$('-ios predicate string:name == "productDetails"');
  }

  async openFirstProduct() {
    const firstProduct = await this.products[0];
    await firstProduct.waitForDisplayed({ timeout: 15000 });
    await firstProduct.click();
  }
}

export default new BrowsePage();