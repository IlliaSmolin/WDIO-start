internetPage = require('../pages/internet.page')

describe("Dropdown testing", function() {
    it('Select by Attribute', () => {
        browser.url('/dropdown')
        internetPage.chooseDropdownOptionByAttribute(2)
        assert.equal(true, internetPage.dropdownOption(3).isSelected())
    })
    it('Select by index', () => {
        browser.url('/dropdown')
        internetPage.chooseDropdownOptionByIndex(1)
        assert.equal(true, internetPage.dropdownOption(2).isSelected())
    })
    it('Select by visible text', () => {
        browser.url('/dropdown')
        internetPage.chooseDropdownOptionByVisibleText('Option 2')
        assert.equal(true, internetPage.dropdownOption(3).isSelected())
    })
    it('Select click by click', () => {
        browser.url('/dropdown')
        internetPage.dropdown.waitForDisplayed()
        internetPage.dropdown.click()
        internetPage.dropdownOption(1).waitForDisplayed()
        internetPage.dropdownOption(2).click()
        assert.equal(true, internetPage.dropdownOption(2).isSelected())
    })
})