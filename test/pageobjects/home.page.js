const { $, browser } = require('@wdio/globals');

class HomePage {
  normalizeMenu(menu) {
    const menuAliases = {
      'Account': 'Profile',  // ← invertido! o app usa Profile, não Account
    'Home': 'Home',
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
    const selectors = [
      `~${normalizedMenu}`,
      `id:tab-${normalizedMenu}`,
      `-ios predicate string:name == "${normalizedMenu}" OR label == "${normalizedMenu}"`,
      `//XCUIElementTypeButton[@name="${normalizedMenu}" or @label="${normalizedMenu}"]`,
    ];

    let btn;
    for (const selector of selectors) {
      try {
        const el = await $(selector);
        await el.waitForDisplayed({ timeout: 20000 });
        btn = el;
        break;
      } catch (e) {
        // ignore selectors that fail
      }
    }

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