// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('R6-no-direction-provided', function() {
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
  it('R6-no-direction-provided', async function() {
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
    await driver.executeScript("window.scrollTo(0,600)")
    await driver.findElement(By.css("#dash4 .dashboard-card__info-title")).click()
    await driver.findElement(By.css("tr:nth-child(1) .mdi-magnify")).click()
    {
      const element = await driver.findElement(By.css("tr:nth-child(1) .mdi-magnify"))
    }
    {
      const element = await driver.findElement(By.css("#CreateAllieBtn > .v-btn__content"))
    }
    await driver.findElement(By.css("#CreateAllieBtn > .v-btn__content")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
    }
    await driver.findElement(By.id("wh-name")).click()
    await driver.findElement(By.id("wh-name")).sendKeys("New Warehouse")
    await driver.findElement(By.id("wh-city")).click()
    await driver.findElement(By.id("wh-city")).sendKeys("New York")
    await driver.findElement(By.id("wh-state")).click()
    await driver.findElement(By.id("wh-state")).sendKeys("NY")
    await driver.findElement(By.id("wh-zip-code")).click()
    await driver.findElement(By.id("wh-zip-code")).sendKeys("19945")
    await driver.findElement(By.css(".blue--text > .v-btn__content")).click()
  })
})
