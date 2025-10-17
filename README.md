# Exercice2-Diaw-Ndeye

A simple backend Todo application built with Node.js, Express, and PostgreSQL.

## Features

- Add a task
- List all tasks
- Mark a task as completed
- Delete a task

## Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

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
   DATABASE_URL=postgresql://postgres:password@localhost:5432/todoApp
   PORT=3000
   ```

4. Create PostgreSQL database and table:
   Run the SQL script in `createDB.sql` to create the database, table, and insert sample data.


5. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

- `GET /todos` : List all tasks
- `POST /todos` : Add a new task (body: `{ "title": "My task" }`)
- `PUT /todos/:id` : Mark a task as completed (body: `{ "status": true }`)
- `DELETE /todos/:id` : Delete a task by its ID

## Project Structure

```
Exercice2-Diaw-Ndeye/
  ├── .env
  ├── .gitignore
  ├── createDB.sql    # SQL script for database setup
  ├── db.js           # PostgreSQL connection
  ├── package.json
  ├── README.md
  ├── server.js
  └── src/
      ├── controllers/
      │   └── TodoController.js
      ├── models/
      │   └── TodoModel.js
      └── routes/
          └── TodoRoutes.js
```

## Author

-Seynabou 

