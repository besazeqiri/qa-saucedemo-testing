import { test, expect } from '@playwright/test';

test('TC-CHECK-001 - Checkout with valid information', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('10000');
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('.title')).toHaveText('Checkout: Overview');

  await expect(page.locator('[data-test="inventory-item-name"]'))
    .toHaveText('Sauce Labs Backpack');

  await expect(page.locator('[data-test="inventory-item-price"]'))
    .toHaveText('$29.99');
});


test('TC-CHECK-002 - Checkout with empty first name', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('10000');
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('First Name is required');

  await expect(page.locator('.title'))
    .not.toHaveText('Checkout: Overview');
});


test('TC-CHECK-003 - Checkout with empty last name', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="postalCode"]').fill('10000');
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Last Name is required');

  await expect(page.locator('.title'))
    .not.toHaveText('Checkout: Overview');
});


test('TC-CHECK-004 - Checkout with empty postal code', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Postal Code is required');

  await expect(page.locator('.title'))
    .not.toHaveText('Checkout: Overview');
});



test('TC-CHECK-005 - Complete checkout successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('10000');

  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('.title')).toHaveText('Checkout: Overview');

  await expect(page.locator('[data-test="inventory-item-name"]'))
    .toHaveText('Sauce Labs Backpack');

  await page.locator('[data-test="finish"]').click();

  await expect(page.locator('[data-test="complete-header"]'))
    .toHaveText('Thank you for your order!');
});


test('TC-CHECK-006 - Cancel checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('10000');

  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('.title')).toHaveText('Checkout: Overview');

  await expect(page.locator('[data-test="inventory-item-name"]'))
    .toHaveText('Sauce Labs Backpack');

  await page.locator('[data-test="cancel"]').click();

  await expect(page.locator('.title')).toHaveText('Products');
});