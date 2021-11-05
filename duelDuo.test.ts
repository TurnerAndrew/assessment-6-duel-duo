
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.sleep(30000)
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

driver.sleep(1000)

test('Clicking draw button displays bot choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking "Add to Duo" displays "Your Duo"', async () => {
    await driver.findElement(By.id('draw')).click()
    driver.sleep(500)
    await driver.findElement(By.xpath('//button[@class="bot-btn"]')).click()
    driver.sleep(500)
    const duo = await driver.findElement(By.id('player-duo'))
    const displayed = await duo.isDisplayed()
    expect(displayed).toBeTruthy()
})

test('clicking "Remove from Duo" returns a bot to choices', async () => {
    await driver.findElement(By.id('draw')).click()
    driver.sleep(500)
    await driver.findElement(By.xpath('//button[@class="bot-btn"]')).click()
    driver.sleep(500)
    await driver.findElement(By.xpath('//div[@id="player-duo]/button[@class="bot-btn"')).click()
    driver.sleep(500)
    const duo = await driver.findElement(By.id('player-duo'))
    const displayed = await duo.isDisplayed()
    expect(displayed).toBeFalsy()
    
})