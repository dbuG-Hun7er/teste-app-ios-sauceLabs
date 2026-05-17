const { $, $$ , browser } = require('@wdio/globals');

class BrowsePage {
  get searchInput() {
    return $('~searchInput');
  }

  get products() {
    return $$('-ios predicate string:name == "productDetails"');
  }

  async searchProduct(term) {
    await this.searchInput.waitForDisplayed({ timeout: 15000 });
    await this.searchInput.setValue(term);
  }

  async clickOnFirstProduct() {
    await (await this.products).at(0).click();
  }

  async openFirstProduct() {
    await browser.waitUntil(
      async () => (await this.products).length > 0,
      {
        timeout: 15000,
        interval: 500,
        timeoutMsg: 'Nenhum produto apareceu na busca',
      }
    );

    const products = await this.products;
    const firstProduct = products[0];

    await firstProduct.waitForDisplayed({ timeout: 15000 });
    await firstProduct.click();
  }
}

module.exports = new BrowsePage();