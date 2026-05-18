const { $ } = require('@wdio/globals');

class AddressPage {
  async addNewAddress() {
    await (await this.inputName).waitForDisplayed({ timeout: 15000 });
    await (await this.inputName).setValue('João da Silva');

    await (await this.inputNumber).waitForDisplayed({ timeout: 15000 });
    await (await this.inputNumber).setValue('61999999999');

    await (await this.inputAddress).waitForDisplayed({ timeout: 15000 });
    await (await this.inputAddress).setValue('rua teste, 123');

    await (await this.inputCity).waitForDisplayed({ timeout: 15000 });
    await (await this.inputCity).setValue('boiteux');

    await (await this.inputState).waitForDisplayed({ timeout: 15000 });
    await (await this.inputState).setValue('sao paulo');

    await (await this.inputZipCode).waitForDisplayed({ timeout: 15000 });
    await (await this.inputZipCode).setValue('18000-000');

    await (await this.btnSave).waitForDisplayed({ timeout: 15000 });
    await (await this.btnSave).click();
  }

  get inputName() {
    return $('-ios predicate string:value == "Enter your name"');
  }

  get inputNumber() {
    return $('-ios predicate string:value == "Enter your mobile number"');
  }

  get inputAddress() {
    return $('-ios predicate string:value == "Enter your address"');
  }

  get inputCity() {
    return $(
      '-ios predicate string:value == "City" AND type == "XCUIElementTypeTextField"'
    );
  }

  get inputState() {
    return $(
      '-ios predicate string:value == "State" AND type == "XCUIElementTypeTextField"'
    );
  }

  get inputZipCode() {
    return $(
      '-ios predicate string:value == "ZipCode" AND type == "XCUIElementTypeTextField"'
    );
  }

  get btnSave() {
    return $('~save');
  }
}

module.exports = new AddressPage();