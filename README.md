
# FoodieGo Backend

FoodieGo is a food ordering application project developed as part of Full Stack Development Training.

The backend provides the foundation for the FoodieGo application and handles API requests using Node.js and Express.

## Technology Stack

- Node.js
- npm
- Express.js
- MongoDB
- Mongoose
- REST API
- JSON
- Git and GitHub

## Project Structure

```text
foodiego-backend/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── PRODUCT_OVERVIEW.md
├── TECHNOLOGY_NOTES.md
├── MVP_REQUIREMENTS.md
├── DATA_MODEL.md
└── README.md
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rizz-7860000/foodiego-backend.git
```

### 2. Open the Project Folder

```bash
cd foodiego-backend
```

### 3. Install Dependencies

```bash
npm install
```

## Running the Backend

### Development Mode

Run:

```bash
npm run dev
```

The server starts at:

```text
http://localhost:5000
```

### Normal Start

The backend can also be started using:

```bash
npm start
```

## Health Check API

FoodieGo provides a health check endpoint:

```text
GET /api/health
```

Open the following URL in a browser:

```text
http://localhost:5000/api/health
```

Expected response:

```json
{
  "success": true,
  "message": "FoodieGo API is running"
}
### Health Endpoint Screenshot

![FoodieGo API Health Endpoint](health-endpoint.png)
```

## 404 Route Handling

The backend also provides a basic response for unknown routes.

Example:

```text
http://localhost:5000/abc
```

Expected response:

```json
{
  "success": false,
  "message": "Route not found"
}
```

## What I Learned

1. I learned how Node.js can be used to run JavaScript on the server.
2. I learned how npm is used to install and manage project dependencies.
3. I learned how Express can be used to create backend servers and API routes.
4. I learned how HTTP methods, JSON responses, and status codes are used in REST APIs.
5. I learned how Git and GitHub can be used to track and store a software project.

## Questions

1. How should authentication and authorization be implemented securely in the FoodieGo backend?
2. How should MongoDB and Mongoose models be connected and organized as the FoodieGo project grows?

## Current Status

The initial FoodieGo backend foundation is complete.

The project currently includes:

- Express backend server
- Configurable server port
- JSON request support
- Health check API
- Basic 404 route handling
- npm start and development scripts
- Git repository
- GitHub repository

Future development can add authentication, MongoDB integration, restaurant APIs, menu APIs, cart management, order management, and reviews.