import { LoginPage } from "./LoginPage/LoginFunc"

const loginPage=new LoginPage()

beforeEach(() => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

describe('LoginTCs', () => {

	it('LoginDemo',() => {

		
		loginPage.enterUserName('Admin')
		loginPage.enterPassword('admin123')
		loginPage.clickLogin()
	

	})

	it('InvalidLoginDemo', () => {

		loginPage.enterUserName('Admin123')
		loginPage.enterPassword('admin123')
		loginPage.clickLogin()


	})
})


