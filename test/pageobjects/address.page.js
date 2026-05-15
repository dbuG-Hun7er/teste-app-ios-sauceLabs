import { $ } from "@wdio/globals";

class AddressPage {
  async addNewAddress() {
    await this.inputName.setValue("Endereco Teste");
    await this.inputNumber.setValue("55619876544321");
    await this.inputAddress.setValue("240");
    await this.inputCity.setValue("boituva");
    await this.inputState.setValue("sao paulo");
    await this.inputZipCode.setValue("18550000");
  }

  get inputName() {
    return $(`-ios predicate string:value == "Enter your name"`);
  }
  get inputNumber() {
    return $(`-ios predicate string:value == "Enter your mobile number"`);
  }
  get inputAddress() {
    return $(`-ios predicate string:value == "Enter your address"`);
  }
  get inputCity() {
    return $(
      `-ios predicate string:value == "City" AND type == "XCUIElementTypeTextField"`
    );
  }
  get inputState() {
    return $(
      `-ios predicate string:value == "State" AND type == "XCUIElementTypeTextField"`
    );
  }
  get inputZipCode() {
    return $(
      `-ios predicate string:value == "ZipCode" AND type == "XCUIElementTypeTextField"`
    );
  }
  get btnSave() {
    return $(`~save`);
  }
}

export default new AddressPage();
