import LoginPage from '../pages/login.page';
import ProfilePage  from '../pages/profile.page';

describe('Auth', function () {
    it('successful log in', function () {
        LoginPage.open();
        LoginPage.login('astrouskaya@yahoo.com', 'Greencard2021');
        ProfilePage.iconAvatar.should('be.visible');

        // cy.visit('/user/login');
        // cy.get('#normal_login_email')
        //     .type('astrouskaya@yahoo.com');
        // cy.get('#normal_login_password')
        //     .type('Greencard2021');
        // cy.get('.login-form-button')
        //     .click();
        // cy.get('.ant-avatar-square')
        //     .should('be.visible')
    })
})