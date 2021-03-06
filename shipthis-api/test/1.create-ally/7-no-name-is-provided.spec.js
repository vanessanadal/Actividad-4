// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('R1-ally-name-not-provided', function() {
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
  it('R1-ally-name-not-provided', async function() {
    await driver.get("http://localhost:8085/")
    await driver.manage().window().setRect(1296, 706)
    await driver.findElement(By.id("login-email")).click()
    await driver.findElement(By.id("login-email")).sendKeys("admin@gmail.com")
    await driver.findElement(By.css(".v-input--is-focused .v-input__slot")).click()
    {
      const element = await driver.findElement(By.css(".v-btn__content"))
    }
    await driver.findElement(By.id("login-password")).sendKeys("password")
    await driver.findElement(By.css(".v-btn__content")).click()
    await driver.findElement(By.css("#dash4 > .dashboard-card__info")).click()
    {
      const element = await driver.findElement(By.css(".mdi-plus"))
    }
    await driver.findElement(By.css(".mdi-plus")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
    }
    await driver.findElement(By.id("company-name")).click()
    await driver.findElement(By.id("compnay-email")).click()
    await driver.findElement(By.id("compnay-email")).sendKeys("mercadolibre@gmail.com")
    await driver.findElement(By.id("company-phone-number")).click()
    await driver.findElement(By.id("company-phone-number")).sendKeys("+1 (212) 565-6565")
    await driver.findElement(By.id("manager-name")).click()
    await driver.findElement(By.id("manager-name")).sendKeys("Laura")
    await driver.findElement(By.id("manager-last-name")).click()
    await driver.findElement(By.id("manager-last-name")).sendKeys("Lopez")
    {
      const element = await driver.findElement(By.css(".v-card__text"))
    }
    {
      const element = await driver.findElement(By.css(".v-card__text"))
    }
    {
      const element = await driver.findElement(By.css(".v-card__text"))
    }
    await driver.findElement(By.id("commercial-ally-description")).click()
    await driver.findElement(By.id("commercial-ally-description")).sendKeys("Ecommerce")
    await driver.findElement(By.css(".blue--text > .v-btn__content")).click()
  })
})
