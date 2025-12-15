const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    recordVideo: {
        dir: 'secretSauce'
    }
  });
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('div').nth(4).click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_error');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('svg').nth(1).click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="item-1-title-link"]').click();
  await page.locator('[data-test="item-sauce-labs-bolt-t-shirt-img"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="remove"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByText('carry.allTheThings() with the').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.locator('[data-test="back-to-products"]').click();

  // ---------------------
  await context.close();
  await browser.close();
})();