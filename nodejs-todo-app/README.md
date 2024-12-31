# Node.js Todo App

This project is a simple Todo application built with Node.js, Express, and MongoDB. It allows users to register, log in, and manage their todos with a RESTful API.

## Project Structure

```
nodejs-todo-app
├── src
│   ├── controllers          # Contains the logic for handling requests
│   │   ├── authController.js  # Handles user authentication
│   │   └── todoController.js  # Manages todos
│   ├── middlewares          # Contains middleware functions
│   │   └── authMiddleware.js  # Authenticates users via JWT
│   ├── models               # Defines the data models
│   │   ├── todo.js           # Todo model
│   │   └── user.js           # User model
│   ├── routes               # Defines the API routes
│   │   ├── authRoutes.js      # Authentication routes
│   │   └── todoRoutes.js      # Todo routes
│   ├── app.js               # Initializes the Express app
│   └── server.js            # Entry point of the application
├── package.json             # NPM configuration file
├── .env                     # Environment variables
└── README.md                # Project documentation
```

## Features

- User registration and login
- JWT-based authentication
- Create, read, update, and delete todos
- Organized structure for easy maintenance and scalability

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd nodejs-todo-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret key.

## Usage

1. Start the server:
   ```
   npm start
   ```
2. The server will run on `http://localhost:3000`.

## API Endpoints

- **Authentication**
  - `POST /signup` - Register a new user
  - `POST /login` - Log in an existing user

- **Todos**
  - `POST /todos` - Create a new todo
  - `GET /todos` - Retrieve all todos for the authenticated user
  - `PUT /todos/:id` - Update a specific todo
  - `DELETE /todos/:id` - Delete a specific todo

## License

This project is licensed under the MIT License.