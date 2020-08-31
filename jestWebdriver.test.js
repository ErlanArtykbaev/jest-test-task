const {Builder } = require('selenium-webdriver')

describe('webdriver func', () => {
  let driver 
  let title


  test('testing to google', async() => {
    driver = await new Builder().forBrowser('firefox').build()
    await driver.get('https://google.com')
    title = await driver.getTitle()
    expect(title).toBe('Google')
  })
})
