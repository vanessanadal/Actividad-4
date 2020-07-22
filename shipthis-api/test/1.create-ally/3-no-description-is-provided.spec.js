// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('throws an error when no description is provided', function() {
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
  it('throws an error when no description is provided', async function() {
    await driver.get("http://localhost:8085/CommercialAllies")
    await driver.manage().window().setRect(1296, 706)
    await driver.findElement(By.css(".mdi-plus")).click()
    await driver.findElement(By.id("company-name")).click()
    await driver.findElement(By.id("company-name")).click()
    await driver.findElement(By.id("company-name")).sendKeys("Mercado Libre")
    await driver.findElement(By.id("compnay-email")).click()
    await driver.findElement(By.id("compnay-email")).sendKeys("ecommerce@outlook.com")
    await driver.findElement(By.id("company-phone-number")).click()
    await driver.findElement(By.id("company-phone-number")).sendKeys("+1 (212) 565-6946")
    {
      const element = await driver.findElement(By.css(".v-card__text"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css(".v-card__text"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.css(".v-card__text"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.id("manager-name")).click()
    await driver.findElement(By.id("manager-name")).sendKeys("Mario")
    await driver.findElement(By.id("manager-last-name")).click()
    await driver.findElement(By.id("manager-last-name")).sendKeys("Lopez")
    await driver.findElement(By.id("commercial-ally-description")).click()
    await driver.findElement(By.css(".blue--text > .v-btn__content")).click()
  })
})