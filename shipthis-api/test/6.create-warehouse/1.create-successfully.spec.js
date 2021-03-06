// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('R6-create-successfully', function() {
  this.timeout(3000000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('R6-create-successfully', async function() {
    await driver.get("http://localhost:8085/")
    await driver.manage().window().setRect(697, 728)
    await driver.findElement(By.id("login-email")).click()
    await driver.findElement(By.id("login-email")).sendKeys("admin@gmail.com")
    await driver.findElement(By.id("login-password")).click()
    {
      const element = await driver.findElement(By.id("loginBtn"))
    }
    await driver.findElement(By.id("login-password")).sendKeys("password")
    await driver.findElement(By.id("loginBtn")).click()
    await driver.wait(until.elementLocated(By.id('dash4')),1000000);
    await driver.findElement(By.id("dash4")).click()
    await driver.executeScript("window.scrollTo(0,181)")
    
    await driver.findElement(By.css("tr:nth-child(1) .mdi-magnify")).click()
    {
      const element = await driver.findElement(By.css("tr:nth-child(1) .mdi-magnify"))
    }
    await driver.findElement(By.css("#CreateAllieBtn > .v-btn__content")).click()
    await driver.findElement(By.id("wh-name")).click()
    await driver.findElement(By.id("wh-name")).sendKeys("New Warehouse")
    await driver.findElement(By.id("wh-city")).click()
    await driver.findElement(By.id("wh-city")).sendKeys("New York")
    await driver.findElement(By.id("wh-state")).click()
    await driver.findElement(By.id("wh-state")).sendKeys("NY")
    await driver.findElement(By.id("wh-address")).click()
    await driver.findElement(By.id("wh-address")).sendKeys("199-45 W Brighton Ave. Syracuse, NY. USA")
    await driver.findElement(By.id("wh-zip-code")).click()
    await driver.findElement(By.id("wh-zip-code")).sendKeys("19945")
    await driver.findElement(By.css(".blue--text > .v-btn__content")).click()
  })
})
