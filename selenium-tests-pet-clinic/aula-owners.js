const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

describe("Owners page tests", () => {
    it("Search for owner", async () => {

        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().setRect({ width: 1200, height: 800 });

        await driver.get("http://localhost:8080");

        const navItems = await driver.findElements(By.className("nav-item"));

        await navItems[1].click();

        let url = await driver.getCurrentUrl();

        assert.ok(url.includes("/owners/find"));

        await driver.findElement(By.id("lastName"))
            .sendKeys("Davis", Key.RETURN);
        
        
        url = await driver.getCurrentUrl();
        
        assert.ok(url.includes("/owners?lastName=Davis"));

        const table = await driver.findElement(By.id("owners"));

        assert.ok(table.isDisplayed());

        driver.quit();
    });
});