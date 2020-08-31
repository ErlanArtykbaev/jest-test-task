//selenium web driver
const {Builder } = require('selenium-webdriver')

//describing what we will do
describe('webdriver func', () => {
  //variables "global" for use
  let driver 
  let title

  //this title must mutch Google
  test('testing to google', async() => {
    //initializing our web driver and building
    driver = await new Builder().forBrowser('firefox').build()

    //get request for link
    await driver.get('https://google.com')

    //geting tiitle from site we got
    title = await driver.getTitle()

    //matching got title with what it should be
    expect(title).toBe('Google')
  })
})
