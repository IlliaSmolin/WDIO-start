internetPage = require('../pages/internet.page')

describe("Alerts testing", function() {
    it('Alert OK clicking', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPage.clickOnButton(1)
        browser.acceptAlert()
        assert.equal('You successfuly clicked an alert', internetPage.result.getText())
    })
    it('Confirm OK clicking', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPage.clickOnButton(2)
        browser.acceptAlert()
        assert.equal('You clicked: Ok', internetPage.result.getText())
    })
    it('Confirm Cancel clicking', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPage.clickOnButton(2)
        browser.dismissAlert()
        assert.equal('You clicked: Cancel', internetPage.result.getText())
    })
    it('Prompt text', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPage.clickOnButton(3)
        assert.equal('I am a JS prompt', browser.getAlertText())
    })
    it('Confirm text', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPage.clickOnButton(2)
        assert.equal('I am a JS Confirm', browser.getAlertText())
    })
    it('Send propmt value', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPage.clickOnButton(3)
        browser.sendAlertText('super stringZzz')
        browser.acceptAlert()
        assert.equal('You entered: super stringZzz', internetPage.result.getText())
    })
})