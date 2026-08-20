import { test, expect } from '@playwright/test';

test('TC-CART-001 - Add one product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]'))
    .toHaveText('Sauce Labs Backpack');
});


test('TC-CART-002 - Add multiple products to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]').filter({
    hasText: 'Sauce Labs Backpack'
  })).toBeVisible();

  await expect(page.locator('[data-test="inventory-item-name"]').filter({
    hasText: 'Sauce Labs Bolt T-Shirt'
  })).toBeVisible();
});


test('TC-CART-003 - Remove product from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  await expect(page.locator('[data-test="inventory-item-name"]'))
    .not.toBeVisible();
});


test('TC-CART-004 - Verify product price in cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  const productPrice = await page
    .locator('[data-test="inventory-item-price"]')
    .filter({ hasText: '$29.99' })
    .innerText();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  const cartPrice = await page
    .locator('[data-test="inventory-item-price"]')
    .innerText();

  expect(cartPrice).toBe(productPrice);
});


test('TC-CART-005 - Open shopping cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page.locator('.title')).toHaveText('Your Cart');
});