const { $ } = require('@wdio/globals');

class LoginPage {
  get inputEmail() {
    return $('id:email');
  }

  get inputPassword() {
    return $('-ios predicate string: name == "Password"');
  }

  get btnLogin() {
    return $('~btnLogin');
  }

  async login(username, password) {
    await this.inputEmail.waitForDisplayed({ timeout: 15000 });
    await this.inputEmail.setValue(username);

    await this.inputPassword.waitForDisplayed({ timeout: 15000 });
    await this.inputPassword.setValue(password);

    await this.btnLogin.waitForDisplayed({ timeout: 15000 });
    await this.btnLogin.click();
  }
}

module.exports = new LoginPage();