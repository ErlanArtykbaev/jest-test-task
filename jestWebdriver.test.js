//selenium web driver
const {Builder } = require('selenium-webdriver')

//describing what we will do
describe('webdriver func', () => {
  //variables "global" for use
  let driver 
  let title

  //hook before all
  beforeAll(async () => {
    //initializing our web driver and building
    driver = await new Builder().forBrowser('firefox').build()

    //get request for link
    await driver.get('https://google.com')
  })

  //this title must mutch Google
  test('testing to google', async() => {
    //geting tiitle from site we got
    title = await driver.getTitle()

    //matching got title with what it should be
    expect(title).toBe('Google')
  })

  //hook after all
  afterAll(async () => {
    await driver.quit()
  })
})
