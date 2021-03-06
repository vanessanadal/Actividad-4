// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('R8-update-successfully', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('R8-update-successfully', async function() {
    await driver.get("http://localhost:8085/")
    await driver.manage().window().setRect(697, 728)
    await driver.findElement(By.id("login-email")).click()
    await driver.findElement(By.id("login-email")).sendKeys("admin@gmail.com")
    await driver.findElement(By.id("login-password")).click()
    await driver.findElement(By.id("login-password")).sendKeys("password")
    await driver.findElement(By.css(".v-input:nth-child(2) > .v-input__control")).click()
    {
      const element = await driver.findElement(By.css(".v-btn__content"))
    }
    await driver.findElement(By.css(".v-btn__content")).click()
    {
      const element = await driver.findElement(By.id("loginBtn"))

    }
    await driver.executeScript("window.scrollTo(0,500)")
    await driver.wait(until.elementLocated(By.id("dash4")),30000);
    await driver.findElement(By.id("dash4")).click()
    await driver.executeScript("window.scrollTo(0,181)")
    await driver.wait(until.elementLocated(By.css("tr:nth-child(1) .mdi-magnify")),30000);
    await driver.findElement(By.css("tr:nth-child(1) .mdi-magnify")).click()
    await driver.wait(until.elementLocated(By.css("tr:nth-child(1) .mr-2")),30000);
    await driver.findElement(By.css("tr:nth-child(1) .mr-2")).click()
    await driver.findElement(By.css(".align-center .v-btn__content")).click()
    await driver.findElement(By.id("wh-city")).click()
    await driver.findElement(By.id("wh-city")).sendKeys("Florida")
    await driver.findElement(By.id("wh-state")).click()
    await driver.findElement(By.id("wh-state")).sendKeys("FL")
    await driver.findElement(By.id("wh-name")).click()
    await driver.findElement(By.id("wh-name")).sendKeys("Main Warehouse 2")
    await driver.findElement(By.css(".v-form .col")).click()
    await driver.findElement(By.id("wh-address")).click()
    await driver.findElement(By.id("wh-address")).sendKeys("New Jersey Turnpike Newark Bay Extension, Oak Island Junction, Newark, Essex County, New Jersey, 07114, USA")
    await driver.findElement(By.id("wh-zip-code")).click()
    {
      const element = await driver.findElement(By.css(".blue--text > .v-btn__content"))
    }
    await driver.findElement(By.id("wh-zip-code")).sendKeys("07114")
    await driver.findElement(By.css(".blue--text > .v-btn__content")).click()
  })
})
