# Checkout Test Cases

## Test Case 1

**Test Case ID:** TC-CHECK-001  
**Title:** Checkout with valid information  
**Priority:** High  
**Type:** Functional  

### Preconditions

- User is logged in.
- At least one product is added to the cart.

### Test Data

**First Name:** John  
**Last Name:** Doe  
**Postal Code:** 10000

### Test Steps

1. Log in to SauceDemo using valid credentials.
2. Add a product to the shopping cart.
3. Open the shopping cart.
4. Click the Checkout button.
5. Enter a valid first name.
6. Enter a valid last name.
7. Enter a valid postal code.
8. Click Continue.

### Expected Result

The user should be redirected to the Checkout Overview page.

The selected product and order information should be displayed correctly.

### Actual Result

The user successfully proceeded to the Checkout Overview page using valid customer information. The selected product and order information were displayed correctly.

### Status

Passed


---

## Test Case 2

**Test Case ID:** TC-CHECK-002  
**Title:** Checkout with empty first name  
**Priority:** High  
**Type:** Negative  

### Preconditions

- User is logged in.
- At least one product is added to the cart.
- User is on the Checkout Information page.

### Test Steps

1. Leave the First Name field empty.
2. Enter a valid last name.
3. Enter a valid postal code.
4. Click Continue.

### Expected Result

A validation/error message should be displayed and the user should not proceed to the Checkout Overview page.

### Actual Result

The application prevented the user from continuing and displayed the following error message:

"Error: First Name is required"
### Status

Passed


---

## Test Case 3

**Test Case ID:** TC-CHECK-003  
**Title:** Checkout with empty last name  
**Priority:** High  
**Type:** Negative  

### Preconditions

- User is logged in.
- At least one product is added to the cart.
- User is on the Checkout Information page.

### Test Steps

1. Enter a valid first name.
2. Leave the Last Name field empty.
3. Enter a valid postal code.
4. Click Continue.

### Expected Result

A validation/error message should be displayed and the user should not proceed to the Checkout Overview page.

### Actual Result

The application prevented the user from continuing and displayed the following error message:

"Error: Last Name is required"


### Status

Passed


---

## Test Case 4

**Test Case ID:** TC-CHECK-004  
**Title:** Checkout with empty postal code  
**Priority:** High  
**Type:** Negative  

### Preconditions

- User is logged in.
- At least one product is added to the cart.
- User is on the Checkout Information page.

### Test Steps

1. Enter a valid first name.
2. Enter a valid last name.
3. Leave the Postal Code field empty.
4. Click Continue.

### Expected Result

A validation/error message should be displayed and the user should not proceed to the Checkout Overview page.

### Actual Result

The application prevented the user from continuing and displayed the following error message:

"Error: Postal Code is required"

### Status

Passed


---

## Test Case 5

**Test Case ID:** TC-CHECK-005  
**Title:** Complete checkout successfully  
**Priority:** Critical  
**Type:** End-to-End  

### Preconditions

- User is logged in.
- At least one product is added to the cart.

### Test Data

**First Name:** John  
**Last Name:** Doe  
**Postal Code:** 10000

### Test Steps

1. Log in to SauceDemo.
2. Add a product to the cart.
3. Open the shopping cart.
4. Click Checkout.
5. Enter valid checkout information.
6. Click Continue.
7. Review the order information.
8. Click Finish.

### Expected Result

The order should be completed successfully.

A confirmation message should be displayed indicating that the order has been completed.

### Actual Result

The checkout process was completed successfully and the confirmation message "Thank you for your order!" was displayed.

### Status

Passed


---

## Test Case 6

**Test Case ID:** TC-CHECK-006  
**Title:** Cancel checkout  
**Priority:** Medium  
**Type:** Functional  

### Preconditions

- User is logged in.
- At least one product is added to the cart.
- User is on the Checkout Information page.

### Test Steps

1. Click the Cancel button.

### Expected Result

The user should be returned to the previous page without completing the checkout process.

### Actual Result

The checkout process was cancelled successfully and the user was redirected to the Products page.

### Status

Passed
