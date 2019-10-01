const internetPage = require('../pages/internet.page')

describe("Test element actions", function() {
    it('Should click element', () => {
        browser.url('/');
        internetPage.clickOnLink();
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    })
    it('Should get text', () => {
        browser.url('/');
        expect(internetPage.getSpecificChildElement(1)).equals('A/B Testing')
    })
    it('Checkbox can be checked', () => {
        browser.url('/');
        internetPage.clickLink(6);
        internetPage.clickCheckbox(1);
        expect(internetPage.checkbox(1).isSelected()).equals(true);
    })
    it('Checkbox can be unchecked', () => {
        if (browser.getUrl() != 'http://the-internet.herokuapp.com/checkboxes') {
            browser.url('/');
            internetPage.clickLink(6);
        }
        if (!internetPage.checkbox(1).isSelected) {
            internetPage.clickCheckbox(1);
        }
        internetPage.clickCheckbox(1);
        expect(internetPage.checkbox(1).isSelected()).equals(false);
    })
    it('Login can be entered', () => {
        if (browser.getUrl() != 'http://the-internet.herokuapp.com/login') {
            browser.url('/');
            internetPage.clickLink(21);
        }
        internetPage.enterUsername('loginchik')
        expect(internetPage.usernameField.getValue()).equals('loginchik');
    })
    it('Password can be entered', () => {
        if (browser.getUrl() != 'http://the-internet.herokuapp.com/login') {
            browser.url('/');
            internetPage.clickLink(21);
        }
        internetPage.enterPassword('parolchik')
        expect(internetPage.passwordField.getValue()).equals('parolchik');
    })

    it('Login field can be cleared', () => {
        if (browser.getUrl() != 'http://the-internet.herokuapp.com/login') {
            browser.url(`${browser.options.baseUrl}/login`);
        }
        internetPage.usernameField.click()
        internetPage.usernameField.clearValue()

        assert.equal('', internetPage.usernameField.getValue())
    })

    it('Password field can be cleared', () => {
        if (browser.getUrl() != 'http://the-internet.herokuapp.com/login') {
            browser.url(`${browser.options.baseUrl}/login`);
        }
        internetPage.passwordField.click()
        internetPage.passwordField.clearValue()

        assert.equal('', internetPage.passwordField.getValue())
    })

    
})