# Login Test Cases

## Test Case 1

**Test Case ID:** TC-LOGIN-001  
**Title:** Login with valid credentials  
**Priority:** High  
**Type:** Functional  

### Preconditions

- User is on the SauceDemo login page.
- Valid credentials are available.

### Test Data

**Username:** `standard_user`  
**Password:** `secret_sauce`

### Test Steps

1. Open the SauceDemo login page.
2. Enter `standard_user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click the Login button.

### Expected Result

The user should be successfully logged in and redirected to the Products page.

### Actual Result

The user was successfully logged in and redirected to the Products page.

### Status

Passed


---

## Test Case 2

**Test Case ID:** TC-LOGIN-002  
**Title:** Login with invalid username  
**Priority:** High  
**Type:** Negative  

### Preconditions

- User is on the SauceDemo login page.

### Test Data

**Username:** `invalid_user`  
**Password:** `secret_sauce`

### Test Steps

1. Open the SauceDemo login page.
2. Enter `invalid_user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click the Login button.

### Expected Result

An appropriate error message should be displayed and the user should not be logged in.

### Actual Result

The application rejected the invalid username and displayed the following error message:

"Epic sadface: Username and password do not match any user in this service"

### Status

Passed


---

## Test Case 3

**Test Case ID:** TC-LOGIN-003  
**Title:** Login with invalid password  
**Priority:** High  
**Type:** Negative  

### Preconditions

- User is on the SauceDemo login page.

### Test Data

**Username:** `standard_user`  
**Password:** `invalid_password`

### Test Steps

1. Open the SauceDemo login page.
2. Enter `standard_user` in the Username field.
3. Enter `invalid_password` in the Password field.
4. Click the Login button.

### Expected Result

An appropriate error message should be displayed and the user should not be logged in.

### Actual Result

To be completed during test execution.

### Status

Not Executed


---

## Test Case 4

**Test Case ID:** TC-LOGIN-004  
**Title:** Login with empty username  
**Priority:** Medium  
**Type:** Negative  

### Preconditions

- User is on the SauceDemo login page.

### Test Data

**Username:** Empty  
**Password:** `secret_sauce`

### Test Steps

1. Open the SauceDemo login page.
2. Leave the Username field empty.
3. Enter `secret_sauce` in the Password field.
4. Click the Login button.

### Expected Result

A validation/error message should be displayed and the user should not be logged in.

### Actual Result

To be completed during test execution.

### Status

Not Executed


---

## Test Case 5

**Test Case ID:** TC-LOGIN-005  
**Title:** Login with empty password  
**Priority:** Medium  
**Type:** Negative  

### Preconditions

- User is on the SauceDemo login page.

### Test Data

**Username:** `standard_user`  
**Password:** Empty

### Test Steps

1. Open the SauceDemo login page.
2. Enter `standard_user` in the Username field.
3. Leave the Password field empty.
4. Click the Login button.

### Expected Result

A validation/error message should be displayed and the user should not be logged in.

### Actual Result

To be completed during test execution.

### Status

Not Executed
