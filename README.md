# TodoApp-PostgreSQL

A simple backend Todo application built with Node.js, Express, and PostgreSQL.

## Features

- Add a task
- List all tasks 
- Delete a task

## Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd TodoApp-PostgreSQL
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
   ```sql
   CREATE DATABASE todoApp;
   
   CREATE TABLE tasks (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       status BOOLEAN DEFAULT FALSE,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

- `GET /tasks` : List all tasks
- `POST /tasks` : Add a new task (`{ "title": "My task" }`)
- `DELETE /tasks/:id` : Delete a task by its ID

## Project Structure

```
TodoApp-PostgreSQL/
  ├── .env
  ├── .gitignore
  ├── db.js          # PostgreSQL connection
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

- Seynabou

> This project is for educational purposes.
