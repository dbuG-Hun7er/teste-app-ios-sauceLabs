import { $ } from "@wdio/globals";

class HomePage {
  async openMenu(menu) {
     await $(`id:tab-${menu}`).click();
  }

  async search() {
    const searchProducts = await $(`-ios predicate string:name ENDSWITH "Search Products"`);

    if (await searchProducts.isExisting()) {
      await searchProducts.click();
      return;
    }

    await $("~search-products").click();
  }
}

export default new HomePage();
