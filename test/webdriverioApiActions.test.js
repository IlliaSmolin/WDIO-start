internetPage = require('../pages/internet.page')

describe('Webdriver IO API Actions', function() {
    it.skip('Hover appears after set mouse focus on avatar', () => {
        browser.url('/hovers')
        internetPage.mouseOnAvatar(4)
        expect(internetPage.hover(4).isDisplayed()).to.be.true
    })

    it.skip('Hover1 contains user info', () => {
        browser.url('/hovers')
        internetPage.mouseOnAvatar(3)
        expect(internetPage.figureDetails(3)).equals('name: user1')
    })
    it.skip('Hover2 contains user info', () => {
        browser.url('/hovers')
        internetPage.mouseOnAvatar(4)
        expect(internetPage.figureDetails(4)).equals('name: user2')
    })
    it.skip('Hover3 contains user info', () => {
        browser.url('/hovers')
        internetPage.mouseOnAvatar(5)
        expect(internetPage.figureDetails(5)).equals('name: user3')
    })
    it.skip('Alt is pressed', () => {
        browser.url('/key_presses')
        internetPage.pressKeyInTheField('Alt')
        assert.equal('You entered: ALT', internetPage.getKeyInfoFieldText())
    })
    it.skip('Insert is pressed', () => {
        browser.url('/key_presses')
        internetPage.pressKeyInTheField('Insert')
        assert.equal('You entered: INSERT', internetPage.getKeyInfoFieldText())
    })
    it.skip('Page footer is not observer by default', () => {
        browser.url('/')
        assert.equal(false, internetPage.pageFooter.isDisplayedInViewport())
    })
    it.skip('Page scrolls to the footer', () => {
        browser.url('/')
        internetPage.pageFooter.scrollIntoView()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    })
    it.skip('new tab by link + switching to the new tab', () => {
        browser.url('/windows')
        internetPage.openTheHereLink()
        browser.switchWindow('New Window')
        assert.equal('New Window', browser.getTitle())
    })
    it.skip('new tab creation', () => {
        browser.url('/windows')
        browser.newWindow(`${browser.options.baseUrl}/windows/new`)
        assert.equal('New Window', browser.getTitle())
    })
})