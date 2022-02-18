import { Selector } from 'testcafe'

// Basic description for the test file
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`

// Executed 1 time before all the tests    
.before(async t => {
    // Examples:
    // - Test setup goes here
    // - await runDatabaseReset();
    // - await seedTestData();
})
// Executed before each test
.beforeEach(async t => {
    // Example:
    // - Login
    // Setting test speed, value between 0.01 and 1
    await t.setTestSpeed(1);
    // Time to wait until the page is loaded. If not the test fail
    await t.setPageLoadTimeout(0);
})
// Executed after each test
.afterEach(async t => {
    // Example:
    // - Logout
})
// Executed 1 time after all the tests are executed
.after(async t => {
   // Example:
   // - Cleaning test data
   // - Logging and sending data to monitoring systems 
})

test.skip(`My first testcafe test`, async t => {
    const developer_name_input = Selector(`#developer-name`);
    const submit_button = Selector(`#submit-button`);
    const article_text = Selector(`#article-header`).innerText;

    // Take full screenshot
    // await t.takeScreenshot({ fullPage: true });
    // Tale Element screenshot
    // await t.takeElementScreenshot(submit_button);

    // When using and ID as the selection, it must starts with the # character
    await t.typeText(developer_name_input, `Javier`);
    // Wait 3 seconds before click on the "Submit" button (Use it for debugging purposes. Do not use in production environments)
    await t.wait(3000);
    await t.click(submit_button);

    await t.expect(article_text).contains(`Javier`);
});

// Example test to be skipped
test.skip(`Test to be skipped`, async t => {
    //-------------------------
    // TestCafe Actions API
    //-------------------------
    // Click
    await t.click(`selector`, { options });
    // Double click
    await t.doubleClick(`selector`, { options });
    // Right click
    await t.rightClick(`selector`, { options });
    // Drag element
    await t.drag(`selector`, 200, 0, { options });
    // Hover
    await t.hover(`selector`, { options });
    // Select text
    await t.selectText(`selector`, { options });
    // Type text
    await t.typeText(`selector`, `text`);
    // Press key on the keyboard
    await t.pressKey(`delete`);
    // Navigate
    await t.navigateTo('https://www.google.com');
    // Take screenshot
    await t.takeElementScreenshot({ fullPage: true });
    await t.takeElementScreenshot(`selector`);
    // Resize window
    await t.resizeWindow(800, 600);

    //-------------------------
    // Assertions API
    //-------------------------
    // Deep equal
    await t.expect(`foo`).eql(`foo`, `Message when assertion fails`, options);
    // Not deep equal
    await t.expect(`foo`).notEql(`foo`);
    // OK
    await t.expect(true).ok();
    // Not OK
    await t.expect(false).notOk();
    // Contains
    await t.expect(`foo`).contains(`o`);
    // Not Contains
    await t.expect(`foo`).notContains(`oFo`);
    // Greater or Less than
    await t.expect(10).gt(9);
    await t.expect(10).gte(10);
    await t.expect(10).lt(11);
    await t.expect(10).lte(10);
    // Within
    await t.expect(10).within(1, 100);
    // Not Within
    await t.expect(1).within(5, 50);

    // If you want to user an xpath in testCafe, you will need to follow the next steps:
    - npm install --save-dev xpath-to-css

    Then in the code
    import xPathToCss from 'xPathToCss'
    const xPath = `'//div[@id='foo'][2]/span[@class="bar"]//a[contains(@class, "bar")]'`;
    const css = xPathToCss(xPath);
    await t.click(css);
});