

//export default new LoginPage();
	export class LoginPage{

		login_username_txtbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
		login_pwd_txtbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
		login_submit_button = '.oxd-button'

		enterUserName(username) {
			cy.get(this.login_username_txtbox).type(username)
	}

	enterPassword(pwd) {
		cy.get(this.login_pwd_txtbox).type(pwd)
	}

	clickLogin() {
		cy.get(this.login_submit_button).click()
	}

}