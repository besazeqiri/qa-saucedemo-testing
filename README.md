# SauceDemo QA Testing Project

## Project Overview

This project demonstrates a practical software testing workflow for the SauceDemo web application.

The project covers manual functional testing, negative testing, exploratory testing, API testing, test automation with Playwright, test documentation, and test execution reporting.

## Application Under Test

**Application:** SauceDemo
**URL:** https://www.saucedemo.com/
**Test User:** `standard_user`

## Testing Scope

The following areas were tested:

* User Login
* Product Management
* Shopping Cart
* Checkout
* Product Sorting
* REST API functionality
* Automated UI testing

## Testing Types

* Manual Functional Testing
* Negative Testing
* Exploratory Testing
* API Testing
* Validation Testing
* End-to-End Testing
* Automated UI Testing

## Tools & Technologies

* Google Chrome
* Playwright
* JavaScript
* Node.js
* Postman
* GitHub
* Markdown

## Project Structure

```text
qa-saucedemo-testing/

│
├── README.md
│
├── test-plan/
│   └── Test_Plan.md
│
├── test-cases/
│   ├── Login_Test_Cases.md
│   ├── Product_Test_Cases.md
│   ├── Cart_Test_Cases.md
│   └── Checkout_Test_Cases.md
│
├── test-execution/
│   └── Test_Execution_Summary.md
│
├── exploratory-testing/
│   └── Exploratory_Testing.md
│
├── api-testing/
│   └── API_Test_Cases.md
│
└── automation/
    ├── tests/
    │   ├── login.spec.js
    │   ├── products.spec.js
    │   ├── cart.spec.js
    │   └── checkout.spec.js
    │
    ├── playwright.config.js
    ├── package.json
    ├── package-lock.json
    └── .gitignore
```

## Manual Testing Results

| Module        | Test Cases | Passed | Failed |
| ------------- | ---------: | -----: | -----: |
| Login         |          5 |      5 |      0 |
| Products      |          6 |      6 |      0 |
| Shopping Cart |          5 |      5 |      0 |
| Checkout      |          6 |      6 |      0 |
| **Total**     |     **22** | **22** |  **0** |

**Manual Testing Pass Rate: 100%**

## Exploratory Testing Results

Product sorting was tested using the following scenarios:

* Name Z-A
* Price low-high
* Price high-low

**Result: 3/3 Passed**

No defects were identified during exploratory testing.

## API Testing Results

Six API test cases were executed using Postman.

| Test Case | Method | Endpoint    | Expected | Actual | Status |
| --------- | ------ | ----------- | -------: | -----: | ------ |
| API-001   | GET    | /posts      |      200 |    200 | Passed |
| API-002   | GET    | /posts/1    |      200 |    200 | Passed |
| API-003   | GET    | /posts/9999 |      404 |    404 | Passed |
| API-004   | POST   | /posts      |      201 |    201 | Passed |
| API-005   | PUT    | /posts/1    |      200 |    200 | Passed |
| API-006   | DELETE | /posts/1    |      200 |    200 | Passed |

**API Testing Pass Rate: 100%**

## Playwright Automation

The main functional test scenarios were automated using Playwright with Chromium.

### Automated Test Suites

| Test Suite    |  Tests | Passed | Failed |
| ------------- | -----: | -----: | -----: |
| Login         |      5 |      5 |      0 |
| Products      |      6 |      6 |      0 |
| Shopping Cart |      5 |      5 |      0 |
| Checkout      |      6 |      6 |      0 |
| **Total**     | **22** | **22** |  **0** |

**Automation Pass Rate: 100%**

### Automated Test Coverage

The automated tests cover:

* Valid login
* Invalid username
* Invalid password
* Empty login fields
* Product display and product information
* Product details
* Adding products to cart
* Removing products from cart
* Multiple products in cart
* Product price verification
* Opening the shopping cart
* Valid checkout
* Checkout validation
* Empty first name
* Empty last name
* Empty postal code
* Successful order completion
* Cancelling checkout

### Playwright Test Execution

To install project dependencies:

```bash
npm install
```

To run all automated tests:

```bash
npx playwright test --project=chromium
```

To run a specific test suite:

```bash
npx playwright test tests/login.spec.js --project=chromium
```

### HTML Automation Report

Playwright HTML reports are used to review test execution results.

To open the latest report:

```bash
npx playwright show-report
```

The report provides information about:

* Passed and failed tests
* Test execution time
* Test suites
* Error details for failed tests
* Test execution results

## Overall Test Results

| Testing Area          | Total | Passed | Failed |
| --------------------- | ----: | -----: | -----: |
| Manual Testing        |    22 |     22 |      0 |
| Exploratory Testing   |     3 |      3 |      0 |
| API Testing           |     6 |      6 |      0 |
| Playwright Automation |    22 |     22 |      0 |

The Playwright automation tests automate the functional scenarios already covered by the manual test cases, rather than representing 22 completely separate application scenarios.

## Conclusion

The SauceDemo application was tested using a combination of manual testing, exploratory testing, API testing, and Playwright test automation.

A total of 22 manual functional test cases were executed, along with 3 exploratory testing scenarios and 6 API test cases. The 22 functional scenarios were also automated using Playwright.

All executed test cases and automated tests passed successfully.

The project demonstrates practical experience with:

* Test case design
* Manual functional testing
* Negative testing
* Exploratory testing
* API testing with Postman
* UI test automation with Playwright
* End-to-End testing
* Test execution reporting
* QA documentation
* GitHub-based project organization
