// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('R2-get-allies', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('R2-get-allies', async function() {
    await driver.get("http://localhost:8085/")
    await driver.manage().window().setRect(697, 728)
    await driver.findElement(By.id("login-email")).click()
    await driver.findElement(By.id("login-email")).sendKeys("admin@gmail.com")
    await driver.findElement(By.id("login-password")).click()
    {
      const element = await driver.findElement(By.css(".v-btn__content"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.id("login-password")).sendKeys("password")
    await driver.findElement(By.css(".v-btn__content")).click()
    await driver.findElement(By.id("dash4")).click()
  })
})
