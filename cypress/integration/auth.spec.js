import LoginPage from '../pages/login.page';
import ProfilePage  from '../pages/profile.page';

describe('Auth', function () {
    beforeEach(function () {
        LoginPage.open();
    })

    it('successful log in', function () {
        LoginPage.login('astrouskaya@yahoo.com', 'Greencard2021');
        ProfilePage.iconAvatar.should('be.visible');
    })

    it('wrong credantials throws error', function () {
        LoginPage.login('invalid@yahoo.com', 'invalid');
        LoginPage.notification.should('contain.text', 'Auth failed');
    })

    it('email format validation', function () {
        LoginPage.inputEmail.type('invalid');
        LoginPage.emailValidation.should('contain.text', '\'email\' is not a valid email')
    })

    it('email required validation', function () {
        LoginPage.inputEmail.type('astrouskaya@yahoo.com');
        LoginPage.inputEmail.smartClear();
        LoginPage.emailValidation.should('contain.text', 'Required');
    })

    it('password required validation', function () {
        LoginPage.inputPassword.type('Greencard2021');
        LoginPage.inputPassword.clear();
        LoginPage.passwordValidation .should('contain.text', 'Required');
    })
})