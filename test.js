const { after } = require('mocha');
const {Builder,By,Key,Browser} = require('selenium-webdriver');


//const assert = require('assert');


describe('First test', () => {
    let driver;
    before(async ()=> {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
    });

    it('surf youtube',async () => {
        await driver.get('https://google.com');
        await driver.findElement(By.name('q')).sendKeys('youtube.com', Key.ENTER);
        const search = await driver.findElement(By.className('LC20lb MBeuO DKV0Md'));
        search.click();
        await driver.findElement(By.id('text')).click();

        await driver.sleep(2000);

        //const text = search.getText();
        //assert.equal(text,'YouTube: Home');

        driver.quit()
    });

   

    it('timeout', function(done) {
        this.timeout(0);
    });



})