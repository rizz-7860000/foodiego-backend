# FoodieGo – Initial Data Model

## 1. Overview

FoodieGo will use MongoDB to store application data. The initial data model contains five main collections:

1. Users
2. Restaurants
3. Menu Items
4. Orders
5. Reviews

These collections will store the information required for the FoodieGo MVP.

---

## 2. Users Collection

### Purpose

The `users` collection stores information about customers, administrators, and restaurant owners.

### Proposed Fields

| Field | Description |
|---|---|
| `_id` | Unique identifier for the user |
| `name` | User's name |
| `email` | User's email address |
| `password` | User's password information |
| `role` | User role such as customer, administrator, or restaurant owner |
| `createdAt` | Date and time when the account was created |

---

## 3. Restaurants Collection

### Purpose

The `restaurants` collection stores information about restaurants available on FoodieGo.

### Proposed Fields

| Field | Description |
|---|---|
| `_id` | Unique identifier for the restaurant |
| `name` | Restaurant name |
| `description` | Description of the restaurant |
| `address` | Restaurant address |
| `contact` | Restaurant contact information |
| `status` | Restaurant availability/status |
| `ownerId` | Reference to the restaurant owner |

---

## 4. Menu Items Collection

### Purpose

The `menuItems` collection stores food items offered by restaurants.

### Proposed Fields

| Field | Description |
|---|---|
| `_id` | Unique identifier for the menu item |
| `name` | Name of the food item |
| `description` | Description of the food item |
| `price` | Price of the food item |
| `restaurantId` | Reference to the restaurant |
| `availability` | Indicates whether the item is available |
| `status` | Current status of the menu item |

---

## 5. Orders Collection

### Purpose

The `orders` collection stores customer orders placed through FoodieGo.

### Proposed Fields

| Field | Description |
|---|---|
| `_id` | Unique identifier for the order |
| `customerId` | Reference to the customer |
| `restaurantId` | Reference to the restaurant |
| `items` | Ordered menu items and quantities |
| `status` | Current order status |
| `totalAmount` | Total order amount |
| `createdAt` | Date and time when the order was created |

---

## 6. Reviews Collection

### Purpose

The `reviews` collection stores customer reviews and ratings for restaurants.

### Proposed Fields

| Field | Description |
|---|---|
| `_id` | Unique identifier for the review |
| `userId` | Reference to the customer who wrote the review |
| `restaurantId` | Reference to the restaurant |
| `rating` | Rating given by the customer |
| `comment` | Review comment |
| `createdAt` | Date and time when the review was created |

---

## 7. Collection Map

The basic relationship between the collections can be represented as:

```text
Users
  |
  | places
  v
Orders ---------> Restaurants
  |                    |
  | contains           | has
  v                    v
Menu Items <-----------+

Users
  |
  | writes
  v
Reviews
  |
  | about
  v
Restaurants
```

### Relationship Summary

- A user can place multiple orders.
- A restaurant can receive multiple orders.
- A restaurant can have multiple menu items.
- An order contains one or more menu items.
- A user can write reviews.
- A restaurant can have multiple reviews.
- Restaurant owners can manage their restaurant and menu items.

## Conclusion

This initial data model provides the basic structure needed for the FoodieGo MVP. The collections can later be implemented using MongoDB and Mongoose models as the backend project grows.