//for e2e testing
const puppeteer = require('puppeteer')

//describing what we will do
describe('puppeteer ', () => {
  
  //"global" variables that we will use
  let browser
  let page 
  let title

  //hook (like useEffect in react) that runs before all test
  beforeAll(async () => {
    browser = await puppeteer.launch() //going to launch brouser chrome
    page = await browser.newPage() //opening new page
    await page.goto('https://www.google.com/') //in new page go to link
    title = await page.$eval('title', el => el.textContent) //and get that title content
  })

  //hook (like componendDidMount in react) that runs after all test
  afterAll(() => {
    browser.close() //closing browser and test
  })

  //test for that function gave us not null, underfinded, false, 0, ''
  test('title should be not fulsy', () => {
    expect(title).not.toBeFalsy()
  })

  //test to match title we got and what it should be
  test('should title be equal to Google', () => {
    expect(title).toBe('Google') //matching titles
  })
}, 10000)//timeout in how many ms we must do this test(default 5000)
