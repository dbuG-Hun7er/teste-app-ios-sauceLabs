const { $, browser } = require('@wdio/globals');

class HomePage {
  normalizeMenu(menu) {
    const menuAliases = {
      'Profile': 'tab-Account',
      'Home': 'tab-Home',
      'Browse': 'tab-Browse',
      'Order': 'tab-Order',
    };
    return menuAliases[menu] || menu;
  }

  async findDisplayed(selectors, timeout = 15000) {
    let foundElement;

    await browser.waitUntil(
      async () => {
        for (const selector of selectors) {
          const element = await $(selector);
          if ((await element.isExisting()) && (await element.isDisplayed())) {
            foundElement = element;
            return true;
          }
        }
        return false;
      },
      {
        timeout,
        interval: 500,
        timeoutMsg: `Nenhum dos seletores apareceu: ${selectors.join(', ')}`,
      }
    );

    return foundElement;
  }

   async openMenu(menu) {
    const normalizedMenu = this.normalizeMenu(menu);
    const btn = await $(`~${normalizedMenu}`);
    await btn.waitForDisplayed({ timeout: 15000 });
    if (!btn) throw new Error(`Nenhum seletor funcionou para menu: ${menu}`);
    await btn.click();
  }

  async search() {
    const searchProducts = await this.findDisplayed([
      '~Search Products',
      '~search-products',
      '-ios predicate string:name == "Search Products" OR label == "Search Products" OR value == "Search Products"',
      '//XCUIElementTypeSearchField[contains(@name, "Search") or contains(@label, "Search") or contains(@value, "Search")]',
      '//XCUIElementTypeTextField[contains(@name, "Search") or contains(@label, "Search") or contains(@value, "Search")]',
    ]);

    await searchProducts.click();
  }
}

module.exports = new HomePage();