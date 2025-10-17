# Exercice2-Diaw-Ndeye

A simple Todo application built with Node.js, Express, and MongoDB, including a frontend interface.

## Features

- Add a task
- List all tasks
- Mark a task as completed
- Delete a task
- Web interface for managing todos

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```sh
   git clone <repo-url>
   cd Exercice2-Diaw-Ndeye
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file and set your environment variables:
   ```
   DATABASE_URL=mongodb://localhost:27017/todoApp
   PORT=3000
   ```

4. Create MongoDB database and insert sample data:
   Run the script in `createDB.js` using mongosh or node to create the database and insert sample data.

5. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

- `GET /todos` : List all tasks
- `POST /todos` : Add a new task (body: `{ "title": "My task" }`)
- `PUT /todos/:id` : Mark a task as completed (body: `{ "done": true }`)
- `DELETE /todos/:id` : Delete a task by its ID

## Frontend

The application includes a simple web interface accessible at `http://localhost:3000` after starting the server. The frontend files are located in `src/view/`.

## Project Structure

```
Exercice2-Diaw-Ndeye/
  ├── .env
  ├── .gitignore
  ├── createDB.js     # MongoDB script for database setup
  ├── db.js           # MongoDB connection
  ├── package.json
  ├── README.md
  ├── server.js
  └── src/
      ├── controllers/
      │   └── TodoController.js
      ├── models/
      │   └── TodoModel.js
      ├── routes/
      │   └── TodoRoutes.js
      └── view/
          ├── app.js
          └── index.html
```

## Author

- Seynabou 

