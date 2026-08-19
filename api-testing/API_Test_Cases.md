# API Test Cases

## API Under Test

JSONPlaceholder REST API

## Base URL

https://jsonplaceholder.typicode.com

---

## API-001 — Get All Posts

**Test Case ID:** API-001  
**Title:** Get all posts  
**Priority:** High  
**Method:** GET  
**Endpoint:** /posts  
**Expected Status Code:** 200

### Test Steps

1. Send a GET request to `/posts`.
2. Verify the HTTP status code.
3. Verify that the response contains post data.

### Expected Result

The API should return HTTP status code 200 and a list of posts.

### Actual Result

The API returned HTTP status code 200 and successfully returned a list of posts in JSON format.

### Status

Passed

---

## API-002 — Get a Specific Post

**Test Case ID:** API-002  
**Title:** Get a specific post  
**Priority:** High  
**Method:** GET  
**Endpoint:** /posts/1  
**Expected Status Code:** 200

### Test Steps

1. Send a GET request to `/posts/1`.
2. Verify the HTTP status code.
3. Verify that the response contains the requested post.

### Expected Result

The API should return HTTP status code 200 and the requested post.

### Actual Result

The API returned HTTP status code 200 and successfully returned the requested post with ID 1 as a JSON object.

### Status

Passed

---

## API-003 — Get Non-Existing Post

**Test Case ID:** API-003  
**Title:** Get non-existing post  
**Priority:** Medium  
**Method:** GET  
**Endpoint:** /posts/9999  
**Expected Status Code:** 404

### Test Steps

1. Send a GET request to `/posts/9999`.
2. Verify the HTTP status code.

### Expected Result

The API should return HTTP status code 404 because the requested post does not exist.

### Actual Result

The API returned HTTP status code 404 Not Found and an empty JSON object because the requested post does not exist.

### Status

Passed

---

## API-004 — Create a New Post

**Test Case ID:** API-004  
**Title:** Create a new post  
**Priority:** High  
**Method:** POST  
**Endpoint:** /posts  
**Expected Status Code:** 201

### Request Body

```json
{
  "title": "QA Test Post",
  "body": "This post was created during API testing.",
  "userId": 1
}
```

### Test Steps

1. Send a POST request to `/posts`.
2. Add the request body as JSON.
3. Verify the HTTP status code.
4. Verify that the response contains the submitted data.

### Expected Result

The API should return HTTP status code 201 and return the created post data.

### Actual Result

The API successfully created the new post and returned HTTP status code 201 Created. The response contained the submitted title, body, userId, and a generated post ID of 101.

### Status

Passed

---

## API-005 — Update an Existing Post

**Test Case ID:** API-005  
**Title:** Update an existing post  
**Priority:** Medium  
**Method:** PUT  
**Endpoint:** /posts/1  
**Expected Status Code:** 200

### Request Body

```json
{
  "id": 1,
  "title": "Updated QA Test Post",
  "body": "This post was updated during API testing.",
  "userId": 1
}
```

### Test Steps

1. Send a PUT request to `/posts/1`.
2. Add the request body as JSON.
3. Verify the HTTP status code.
4. Verify that the response contains the updated data.

### Expected Result

The API should return HTTP status code 200 and return the updated post data.

### Actual Result

The API successfully updated the post and returned HTTP status code 200 OK. The response contained the updated title, body, ID, and userId.

### Status

Passed

---

## API-006 — Delete an Existing Post

**Test Case ID:** API-006  
**Title:** Delete an existing post  
**Priority:** Medium  
**Method:** DELETE  
**Endpoint:** /posts/1  
**Expected Status Code:** 200

### Test Steps

1. Send a DELETE request to `/posts/1`.
2. Verify the HTTP status code.

### Expected Result

The API should return HTTP status code 200 and confirm that the request was processed.

### Actual Result

The API successfully processed the DELETE request and returned HTTP status code 200 OK with an empty JSON response.

### Status

Passed

---

## API Test Execution Summary

| Test Case | Method | Endpoint | Expected | Actual | Status |
|---|---|---|---:|---:|---|
| API-001 | GET | /posts | 200 | 200 | Passed |
| API-002 | GET | /posts/1 | 200 | 200 | Passed |
| API-003 | GET | /posts/9999 | 404 | 404 | Passed |
| API-004 | POST | /posts | 201 | 201 | Passed |
| API-005 | PUT | /posts/1 | 200 | 200 | Passed |
| API-006 | DELETE | /posts/1 | 200 | 200 | Passed |

## Overall Result

**6/6 API test cases passed successfully.**

**Pass Rate: 100%**
