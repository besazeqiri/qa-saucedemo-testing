# Product Test Cases

## Test Case 1

**Test Case ID:** TC-PROD-001  
**Title:** Verify products are displayed  
**Priority:** High  
**Type:** Functional  

### Preconditions

- User is logged in.
- User is on the Products page.

### Test Steps

1. Log in to SauceDemo using valid credentials.
2. Navigate to the Products page.
3. Observe the products displayed on the page.

### Expected Result

The Products page should display the available products correctly.

### Actual Result

The Products page was displayed successfully and all 6 products were visible.

### Status

Passed


---

## Test Case 2

**Test Case ID:** TC-PROD-002  
**Title:** Verify product name  
**Priority:** Medium  
**Type:** Functional  

### Preconditions

- User is logged in.
- User is on the Products page.

### Test Steps

1. Log in to SauceDemo.
2. Locate a product on the Products page.
3. Verify that the product has a visible name.

### Expected Result

The product name should be displayed correctly.

### Actual Result

Product names were displayed correctly and were clearly visible on the Products page.

### Status

Passed


---

## Test Case 3

**Test Case ID:** TC-PROD-003  
**Title:** Verify product price  
**Priority:** Medium  
**Type:** Functional  

### Preconditions

- User is logged in.
- User is on the Products page.

### Test Steps

1. Log in to SauceDemo.
2. Locate a product.
3. Check the product price.

### Expected Result

The product price should be displayed correctly and should use the expected currency format.

### Actual Result

Product prices were displayed correctly with the expected currency format.

### Status

Passed


---

## Test Case 4

**Test Case ID:** TC-PROD-004  
**Title:** Open product details  
**Priority:** Medium  
**Type:** Functional  

### Preconditions

- User is logged in.
- User is on the Products page.

### Test Steps

1. Log in to SauceDemo.
2. Select a product.
3. Click on the product name or product image.

### Expected Result

The user should be redirected to the selected product's details page.

The product name, description, price and image should be displayed.

### Actual Result

The product details page opened successfully and displayed the product name, description, price, image, and Add to cart button.

### Status

Passed

---

## Test Case 5

**Test Case ID:** TC-PROD-005  
**Title:** Add product to cart  
**Priority:** High  
**Type:** Functional  

### Preconditions

- User is logged in.
- User is on the Products page.

### Test Steps

1. Log in to SauceDemo.
2. Select a product.
3. Click the Add to cart button.
4. Open the shopping cart.

### Expected Result

The selected product should be added to the shopping cart.

The cart should display the selected product.

### Actual Result

The selected product was successfully added to the shopping cart. The cart displayed the product with the correct price.

### Status

Passed


---

## Test Case 6

**Test Case ID:** TC-PROD-006  
**Title:** Remove product from cart  
**Priority:** High  
**Type:** Functional  

### Preconditions

- User is logged in.
- At least one product has been added to the cart.

### Test Steps

1. Log in to SauceDemo.
2. Add a product to the cart.
3. Open the shopping cart.
4. Click the Remove button for the selected product.

### Expected Result

The selected product should be removed from the shopping cart.

### Actual Result

The selected product was successfully removed from the shopping cart.

### Status

Passed
