// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('R4-delete-successfully', function() {
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
  it('R4-delete-successfully', async function() {
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
    await driver.executeScript("window.scrollTo(0,181)")
    {
      const element = await driver.findElement(By.css(".v-data-table__wrapper"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css(".v-data-table__wrapper"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.css(".v-data-table__wrapper"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css("tr:nth-child(1) .mdi-delete")).click()
    {
      const element = await driver.findElement(By.css("tr:nth-child(1) .mdi-delete"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".blue--text")).click()
  })
})
