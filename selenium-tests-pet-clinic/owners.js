const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");

describe("Owners page tests", () => {
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().setRect({ width: 1200, height: 800 });
    });

    after(async () => {
        await driver.quit();
    });

    beforeEach(async () => {
        await driver.get("http://localhost:8080");
        
        const navItems = await driver.findElements(By.className("nav-item"));

        await navItems[1].click();

        const url = await driver.getCurrentUrl();

        assert.ok(url.includes("/owners/find"));
    });


    it("Search for owner", async () => {
        await driver.findElement(By.id("lastName"))
            .sendKeys("Davis", Key.RETURN);

        const url = await driver.getCurrentUrl();

        assert.ok(url.includes("/owners?lastName=Davis"));

        const table = await driver.findElement(By.id("owners"));

        const isDisplayed = await table.isDisplayed();

        assert.ok(isDisplayed);
    });

});
