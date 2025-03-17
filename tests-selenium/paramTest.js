const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");
// var should = require("chai").should();

describe("add another todo tests", () => {
    it("successfully adding another todo to application", async () => {
        //launch browser
        let driver = await new Builder()
            .forBrowser("chrome")
            .build();

        // navigate to application
        await driver.get("https://lambdatest.github.io/sample-todo-app");

        //add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

        //assert
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then((value) => {
            return value
        });

        // assert using node assertion
        assert.strictEqual(todoText, "Learn Selenium");

        //assert using chai should => assert mais human readable
        // todoText.should.equal("Learn Selenium")

        // close the browser
        await driver.quit();
    });

});
