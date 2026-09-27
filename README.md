# 🍃 Mongo-Express

A beginner-friendly **MongoDB and Express.js** learning project built with **Node.js** and **Mongoose**. This project demonstrates how to connect a backend application with MongoDB and perform basic CRUD operations.

##  Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- JavaScript
- HTML
- CSS

## 📂 Project Structure

```text
Mongo-Express/
│
├── models/
│   └── ...
│
├── public/
│   └── ...
│
├── views/
│   └── ...
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

##  Features

- Express.js server setup
- MongoDB database connection
- Mongoose integration
- Schema and model creation
- Creating documents
- Reading documents
- Updating documents
- Deleting documents
- EJS templating
- Static files using the `public` folder
- Basic backend CRUD operations

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/GautamKumar200510/Mongo-Express.git
```

### 2. Open the project

```bash
cd Mongo-Express
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
node index.js
```

The application will run on the port configured in `index.js`.

##  MongoDB Setup

Make sure MongoDB is installed and running on your system.

The application uses **Mongoose** to connect Node.js with MongoDB.

Example connection:

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/databaseName");
```

Replace `databaseName` with the database name used in the project.

##  CRUD Operations

This project demonstrates the four basic database operations:

| Operation | Description |
|---|---|
| Create | Add new documents to MongoDB |
| Read | Retrieve documents from MongoDB |
| Update | Modify existing documents |
| Delete | Remove documents from MongoDB |

## Purpose

The main purpose of this project is to learn how **Express.js, MongoDB, Mongoose, and EJS** work together to build a basic backend web application.

##  Author

**Gautam Kumar**

GitHub: **GautamKumar200510**

---

⭐ If you find this project useful, consider giving it a star!
