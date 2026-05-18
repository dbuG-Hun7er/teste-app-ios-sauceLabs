const { $ } = require('@wdio/globals');

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

  async openMenu(menu) {
    const normalizedMenu = this.normalizeMenu(menu);
    const btn = await $(`~${normalizedMenu}`);
    await btn.waitForDisplayed({ timeout: 15000 });
    await btn.click();
  }
}

module.exports = new HomePage();