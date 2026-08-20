import { test, expect } from '@playwright/test';

test('TC-PROD-001 - Verify Products Are Displayed', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('.title')).toHaveText('Products');
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});


test('TC-PROD-002 - Verify Product Name', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(
    page.locator('[data-test="inventory-item-name"]').filter({
      hasText: 'Sauce Labs Backpack'
    })
  ).toBeVisible();
});


test('TC-PROD-003 - Verify Product Price', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const backpack = page.locator('[data-test="inventory-item"]', {
    hasText: 'Sauce Labs Backpack'
  });

  await expect(backpack.locator('[data-test="inventory-item-price"]'))
    .toHaveText('$29.99');
});

test('TC-PROD-004 - Open Product Details', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="item-4-title-link"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]'))
    .toHaveText('Sauce Labs Backpack');

  await expect(page.locator('[data-test="inventory-item-price"]'))
    .toHaveText('$29.99');
});


test('TC-PROD-005 - Add Product to Cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]'))
    .toHaveText('Sauce Labs Backpack');

  await expect(page.locator('[data-test="inventory-item-price"]'))
    .toHaveText('$29.99');
});


test('TC-PROD-006 - Remove Product from Cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]'))
    .not.toBeVisible();
});