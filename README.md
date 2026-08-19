# SauceDemo QA Testing Project

## Project Overview

This project demonstrates a practical software testing workflow for the SauceDemo web application.

The project covers manual functional testing, exploratory testing, API testing, test documentation, and test execution reporting.

## Application Under Test

**Application:** SauceDemo

**URL:** https://www.saucedemo.com/

**Test User:** standard_user

## Testing Scope

The following areas were tested:

- User Login
- Product Management
- Shopping Cart
- Checkout
- Product Sorting
- REST API functionality

## Testing Types

- Manual Functional Testing
- Negative Testing
- Exploratory Testing
- API Testing
- Validation Testing

## Tools Used

- Google Chrome
- Postman
- GitHub
- Markdown

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
└── api-testing/
    └── API_Test_Cases.md
```

## Manual Testing Results

| Module | Test Cases | Passed | Failed |
|---|---:|---:|---:|
| Login | 5 | 5 | 0 |
| Products | 6 | 6 | 0 |
| Shopping Cart | 5 | 5 | 0 |
| Checkout | 6 | 6 | 0 |
| **Total** | **22** | **22** | **0** |

**Manual Testing Pass Rate: 100%**

## Exploratory Testing Results

Product sorting was tested using the following scenarios:

- Name Z-A
- Price low-high
- Price high-low

**Result: 3/3 Passed**

No defects were identified during exploratory testing.

## API Testing Results

Six API test cases were executed using Postman.

| Test Case | Method | Endpoint | Expected | Actual | Status |
|---|---|---|---:|---:|---|
| API-001 | GET | /posts | 200 | 200 | Passed |
| API-002 | GET | /posts/1 | 200 | 200 | Passed |
| API-003 | GET | /posts/9999 | 404 | 404 | Passed |
| API-004 | POST | /posts | 201 | 201 | Passed |
| API-005 | PUT | /posts/1 | 200 | 200 | Passed |
| API-006 | DELETE | /posts/1 | 200 | 200 | Passed |

**API Testing Pass Rate: 100%**

## Overall Test Results

| Testing Area | Total | Passed | Failed |
|---|---:|---:|---:|
| Manual Testing | 22 | 22 | 0 |
| Exploratory Testing | 3 | 3 | 0 |
| API Testing | 6 | 6 | 0 |
| **Total** | **31** | **31** | **0** |

## Conclusion

The planned test scenarios were successfully executed against the SauceDemo application.

All 31 executed test scenarios passed successfully.

No defects were identified during the executed test scenarios.

This project demonstrates experience with test case design, test execution, negative testing, exploratory testing, API testing, and QA documentation.
