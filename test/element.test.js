const internetPage = require('../pages/internet.page')
describe('Interacting with elements', function() {
    it('Get text for element', () => {
        browser.url('/');
        //let text = $('//*[@id="page-footer"]').getText();
        //console.log(text);
        internetPage.getSpecificChildElement(2);
    })
    
    it('Is footer displayed', () => {
        internetPage.pageFooter.isDisplayed();
        console.log(internetPage.pageFooter.isDisplayed());
    })

    it('Does the header exist?', () => {
        internetPage.pageHeader.isExisting();
        console.log(internetPage.pageHeader.isExisting());
    })

    it('Is footer in the ViewPort', () => {
        internetPage.pageFooter.isDisplayedInViewport();
        console.log(internetPage.pageFooter.isDisplayedInViewport());
    })

    it('Is header in ViewPort?', () => {
        internetPage.pageHeader.isDisplayedInViewport();
        console.log(internetPage.pageHeader.isDisplayedInViewport());
    })
    it('Is subheader Enabled?', () => {
        internetPage.subHeading.isEnabled();
        console.log(internetPage.subHeading.isEnabled());
    })
    it('Click on the first link', () => {
        internetPage.clickOnLink();
    })
 })