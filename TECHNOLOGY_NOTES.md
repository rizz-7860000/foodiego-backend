# FoodieGo – Technology Notes

## 1. Node.js and npm

### Node.js

Node.js is a JavaScript runtime that allows JavaScript code to run outside the browser. In FoodieGo, Node.js is used to build and run the backend server.

**Example:** Node.js can run the FoodieGo Express server.

### npm

npm stands for Node Package Manager. It is used to install and manage packages required by a Node.js project.

**Example:** We use npm to install Express in the FoodieGo backend.

---

## 2. Express and Routing

### Express

Express is a Node.js web framework used to create backend applications and APIs.

**Example:** FoodieGo uses Express to create its backend server.

### Routing

Routing means defining how the server responds to requests for different URLs or endpoints.

**Example:** FoodieGo has a health route:

```text
GET /api/health
```

---

## 3. MongoDB Collection and Document

### Collection

A collection in MongoDB is a group of related documents.

**Example:** A `users` collection can store information about FoodieGo users.

### Document

A document is an individual record stored inside a MongoDB collection.

**Example:** One document in the `users` collection can represent one FoodieGo customer.

---

## 4. Mongoose Schema and Model

### Schema

A Mongoose schema defines the structure and expected fields of data.

**Example:** A user schema can define fields such as name, email, password, and role.

### Model

A Mongoose model provides an interface for interacting with a MongoDB collection using the schema.

**Example:** A `User` model can be used to create, find, update, and delete user records.

---

## 5. REST API and JSON

### REST API

A REST API allows different parts of an application to communicate using HTTP requests and endpoints.

**Example:** The FoodieGo frontend can send a request to a backend endpoint to retrieve restaurant information.

### JSON

JSON is a common data format used to exchange information between the frontend and backend.

**Example:**

```json
{
  "success": true,
  "message": "FoodieGo API is running"
}
```

---

## 6. HTTP Methods

### GET

Used to retrieve data.

**Example:** Getting a list of restaurants.

```text
GET /api/restaurants
```

### POST

Used to create new data.

**Example:** Creating a new order.

```text
POST /api/orders
```

### PATCH

Used to partially update existing data.

**Example:** Updating the status of an order.

```text
PATCH /api/orders/123
```

### PUT

Used to update or replace an existing resource.

**Example:** Updating restaurant information.

```text
PUT /api/restaurants/123
```

### DELETE

Used to delete data.

**Example:** Removing a menu item.

```text
DELETE /api/menu-items/123
```

---

## 7. HTTP Status Codes

### 200 – OK

The request was successful.

**Example:** Successfully retrieving restaurants.

### 201 – Created

A new resource was successfully created.

**Example:** Successfully creating a new order.

### 400 – Bad Request

The request contains invalid or incorrect information.

**Example:** Required order information is missing.

### 404 – Not Found

The requested resource or route could not be found.

**Example:** A restaurant ID does not exist.

### 500 – Internal Server Error

An unexpected error occurred on the server.

**Example:** The backend encounters an unexpected server-side error.

---

## 8. Frontend, Backend, and Database

### Frontend

The frontend is the part of the application that users interact with.

**Example:** FoodieGo screens where customers browse restaurants and add food items to their cart.

### Backend

The backend handles application logic, requests, validation, and communication with the database.

**Example:** The FoodieGo Express server processes an order request.

### Database

The database stores the application's persistent information.

**Example:** FoodieGo can store users, restaurants, menu items, orders, and reviews in the database.

---

## Conclusion

The FoodieGo application uses a frontend to interact with customers, a Node.js and Express backend to process requests and application logic, and a database to store persistent information. REST APIs, JSON, HTTP methods, and status codes allow the different parts of the application to communicate.