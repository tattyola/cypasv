import Page from './page';

class LoginPage extends Page{
    get inputEmail() { return cy.get('#normal_login_email') }
    get inputPassword() { return cy.get('#normal_login_password') }
    get buttonLogIn() { return cy.get('.login-form-button') }

    login(email, password){
        this.inputEmail.type(email);
        this.inputPassword.type(password);
        this.buttonLogIn.click();
    }

    open() {
         return super.open('/user/login');
    }
}

export default new LoginPage();