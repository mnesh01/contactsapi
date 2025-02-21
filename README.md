# Contacts API

## Overview
The Contacts API is a backend application built using **Node.js, Express, MongoDB, and JWT authentication**. It allows users to perform **CRUD operations** on their contacts while ensuring security through authentication and authorization mechanisms.

## Features
- **User Authentication**: JWT-based authentication for secure access.
- **CRUD Operations**: Users can create, read, update, and delete their own contacts.
- **MongoDB Atlas**: Cloud-based database storage.
- **Secure Routes**: Protected routes using JWT middleware.
- **Error Handling**: Centralized error handling with custom error responses.

## Folder Structure
```
├── config
│   ├── dbConnection.js
├── controllers
│   ├── contactController.js
│   ├── usersController.js
├── middleware
│   ├── errorHandler.js
│   ├── validateTokenHandler.js
├── models
│   ├── contactModel.js
│   ├── userModel.js
├── routes
│   ├── contactRoutes.js
│   ├── userRoutes.js
├── .env
├── .gitignore
├── constants.js
├── package.json
├── package-lock.json
├── server.js
```

## Installation & Setup
### Prerequisites
- [Node.js](https://nodejs.org/) installed
- MongoDB Atlas account

### Steps
1. **Clone the repository**
```sh
  git clone https://github.com/yourusername/contactsapi.git
  cd contactsapi
```
2. **Install dependencies**
```sh
  npm install
```
3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   PORT=5005
   CONNECTION_STRING=mongodb+srv://<your_mongodb_connection>
   ACCESS_TOKEN_SECRET=your_secret_key
   ```
4. **Run the server**
```sh
  npm start
```
The API will run at `http://localhost:5005`.

## API Endpoints
### Authentication Routes
| Method | Endpoint      | Description |
|--------|--------------|-------------|
| POST   | /api/users/register | Register a new user |
| POST   | /api/users/login    | Login user & get token |

### Contact Routes (Protected)
| Method | Endpoint            | Description |
|--------|---------------------|-------------|
| GET    | /api/contacts       | Get all user contacts |
| POST   | /api/contacts       | Create a new contact |
| GET    | /api/contacts/:id   | Get a single contact by ID |
| PUT    | /api/contacts/:id   | Update a contact |
| DELETE | /api/contacts/:id   | Delete a contact |

## Contribution
This project is open for contributions! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License.

