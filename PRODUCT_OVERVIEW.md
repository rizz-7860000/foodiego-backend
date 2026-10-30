# FoodieGo – Product Overview

## 1. What Happens from Opening the App to Placing an Order?

FoodieGo is a food ordering application where customers can browse restaurants, view menu items, add items to a cart, and place orders.

The basic workflow is:

1. The customer opens the FoodieGo application.
2. The customer views the available restaurants.
3. The customer selects a restaurant.
4. The customer views the restaurant's menu items.
5. The customer selects food items and adds them to the cart.
6. The customer reviews the cart and quantities.
7. The customer places the order.
8. The customer can view the order in their order history.

### Simple Workflow Diagram

```text
Open FoodieGo
      ↓
View Restaurants
      ↓
Select Restaurant
      ↓
View Menu Items
      ↓
Add Items to Cart
      ↓
Review Cart
      ↓
Place Order
      ↓
View Order History
```

---

## 2. User Roles and Responsibilities

### Customer

The customer is the person who uses FoodieGo to order food.

Responsibilities:
- Register and log in.
- Browse restaurants.
- View menu items.
- Add food items to the cart.
- Change item quantities.
- Place orders.
- View order history.
- Submit reviews.

### Administrator

The administrator manages and maintains the FoodieGo platform.

Responsibilities:
- Manage restaurants.
- Manage menu items.
- Manage users and application data.
- Monitor the overall application.

### Restaurant Owner

The restaurant owner manages their restaurant and its menu.

Responsibilities:
- Manage restaurant information.
- Add menu items.
- Update menu items.
- Remove menu items.
- Keep restaurant and menu information up to date.

---

## 3. Key FoodieGo Modules

The main modules of FoodieGo are:

1. **User Authentication** – Handles customer registration and login.
2. **Restaurant Management** – Manages restaurant information.
3. **Menu Management** – Manages restaurant menu items.
4. **Cart Management** – Allows customers to add items and manage quantities.
5. **Order Management** – Handles placing orders and viewing order history.
6. **Review Management** – Allows customers to submit reviews.

---

## 4. Why Does FoodieGo Need a Backend?

The backend is required because the browser or frontend alone cannot safely manage all application data and business operations.

The backend can:

- Receive requests from the frontend.
- Process customer and restaurant data.
- Store and retrieve information from the database.
- Handle users, restaurants, menu items, carts, and orders.
- Apply application rules and validations.
- Provide APIs that the frontend can communicate with.

For example, when a customer places an order, the frontend sends the order information to the backend. The backend processes the request and stores the order information in the database.

---

## 5. Information That Should Be Stored

### Restaurants

The application should store information such as:

- Restaurant name
- Restaurant description
- Restaurant address
- Contact information
- Restaurant status

### Menu Items

The application should store information such as:

- Menu item name
- Description
- Price
- Restaurant reference
- Availability/status

### Users

The application should store information such as:

- Name
- Email
- Password information
- User role
- Account information

### Orders

The application should store information such as:

- Customer information
- Restaurant information
- Ordered menu items
- Item quantities
- Order status
- Order date/time

---

## Conclusion

FoodieGo is a food ordering platform that connects customers with restaurants. Customers can browse restaurants and menus, manage their cart, place orders, and view their order history. Administrators and restaurant owners manage the platform and restaurant information. A backend is necessary to process requests, manage application logic, and store data securely.