internetPage = require('../pages/internet.page')

describe('Drag and drop', function() {
    it.skip('Drag and drop works', () => {
        browser.url('/drag_and_drop')
        internetPage.dragColumnAToColumnB()
        browser.pause(3000)
        assert.equal(internetPage.columnBHeader.getText(), 'A')
    })
    it('Should drag and drop', () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        $('#draggable').waitForDisplayed()
        $('#draggable').dragAndDrop($('#droppable'))
        browser.pause(1000)
        assert.equal('Dropped!', $('#droppable p').getText())
    })
})