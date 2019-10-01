class Internet {
    get pageHeader() {return $('.headings')}
    get subHeading() {return $('h2')}
    get h3Header() {return $('h3')}
    get pageFooter() {return $('#page-footer')}
    get parent() {return $('ul')}
    get childElements() {return this.parent.$$('li')}
    get firstLink() {return $('ul li:nth-child(1) a')}
    get usernameField() {return $('#username')}
    get passwordField() {return $('#password')}
    get keyPressField() {return $('#target')}
    get keyInfoField() {return $('#result')}
    get hereLink() {return $('.example a')}
    get iframeBody() {return $('#tinymce')}
    get iframe() {return $('#mceu_27 #mce_0_ifr')}
    get iframeBodyContent() {return this.iframeBody.$('p')}
    get columnA() {return $('#column-a')}
    get columnB() {return $('#column-b')}
    get columnBHeader() {return $('#column-b header')}
    get dropdown() {return $('#dropdown')}
    get result() {return $('#result')}
    
    alertButton(index) {return $(`ul li:nth-child(${index}) button`)}
    dropdownOption(index) {return $(`select option:nth-child(${index})`)}
    avatar(index) {return $(`.example .figure:nth-child(${index}) img`)}
    hover(index) {return $(`.example .figure:nth-child(${index}) h5`)}
    specificChildElement(index) {return this.parent.$(`li:nth-child(${index})`)}
    link(index) {return $(`ul li:nth-child(${index}) a`)}
    checkbox(index) {return $(`#checkboxes input:nth-child(${index})`)}

    clickOnButton(index) {
        this.alertButton(index).waitForDisplayed()
        this.alertButton(index).click()
    }
    chooseDropdownOptionByAttribute(option) {
        this.dropdown.waitForDisplayed()
        this.dropdown.scrollIntoView()
        this.dropdown.selectByAttribute('value', option)
    }

    chooseDropdownOptionByIndex(option) {
        this.dropdown.waitForDisplayed()
        this.dropdown.scrollIntoView()
        this.dropdown.selectByAttribute('value', option)
    }

    chooseDropdownOptionByVisibleText(text) {
        this.dropdown.waitForDisplayed()
        this.dropdown.scrollIntoView()
        this.dropdown.selectByVisibleText(text)
    }

    dragColumnAToColumnB() {
        this.columnA.waitForDisplayed()
        this.columnA.dragAndDrop(this.columnB)
    }
    /**
     * Enter text in the iframe
     * @param {String} text which should be pasted into the iframe body 
     */
    sendTextToBody(text) {
        this.iframeBody.waitForDisplayed()
        this.iframeBody.clearValue()
        this.iframeBody.click()
        this.iframeBody.keys(text)
    }    
    openTheHereLink() {
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }
    pressKeyInTheField(index) {
        this.keyPressField.waitForDisplayed()
        this.keyPressField.click()
        browser.keys(`${index}`)
    }
    getKeyInfoFieldText() {
        this.keyInfoField.waitForDisplayed()
        return this.keyInfoField.getText()
    }
    mouseOnAvatar(index) {
        this.avatar(index).waitForDisplayed()
        this.avatar(index).moveTo(1,1)
    }
    figureDetails(index) {
        this.hover(index).waitForDisplayed()
        return this.hover(index).getText()
    }
    enterUsername(text) {
        this.usernameField.waitForDisplayed();
        this.usernameField.setValue(text);
    }
    enterPassword(text) {
        this.passwordField.waitForDisplayed();
        this.passwordField.setValue(text);
    }
    clickLink(index) {
        this.link(index).waitForDisplayed();
        this.link(index).click();
    }
    clickCheckbox(index) {
        this.checkbox(index).waitForDisplayed();
        this.checkbox(index).click();
    }
    getSpecificChildElement(index) {
        this.specificChildElement(index).waitForDisplayed()
        return this.specificChildElement(index).getText()
    }
    getLiText() {
        this.childElements.forEach(el => {
            console.log(el.getText())
        })
    }
    clickOnLink() {
        if(this.firstLink.isDisplayed() === true) {
            this.firstLink.click()
        }
        this.h3Header.waitForDisplayed();
    }
}
module.exports = new Internet()