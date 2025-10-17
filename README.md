# TodoApp - Backend PostgreSQL

A simple backend Todo application built with Node.js, Express, and PostgreSQL.

## Features

- Add a task
- List all tasks
- Mark a task as completed
- Delete a task

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [PostgreSQL](https://www.postgresql.org/) (version 12 or higher)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd Exercice2-Diaw-Ndeye
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root of the project and set your environment variables:
   ```
   DATABASE_URL=postgresql://postgres:password@localhost:5432/todoApp
   PORT=3000
   ```

4. Create the PostgreSQL database and table:
   - Run the `createDB.sql` script in your PostgreSQL client, or use the command:
     ```sh
     psql -U postgres -f createDB.sql
     ```
   - This will create the `todoApp` database, the `tasks` table, and insert sample data.

5. Start the server:
   ```sh
   npm run dev
   ```

The server will start on port 3000 (or the one defined in `.env`).

## API Endpoints

- `GET /todos` : Retrieve all tasks
- `POST /todos` : Add a new task (JSON body: `{ "title": "Task title" }`)
- `PUT /todos/:id` : Update a task's status (JSON body: `{ "status": true/false }`)
- `DELETE /todos/:id` : Delete a task by its ID

## Project Structure

```
Exercice2-Diaw-Ndeye/
├── .env
├── .gitignore
├── createDB.sql      # SQL script to create DB and table
├── db.js             # PostgreSQL connection
├── package.json
├── README.md
├── server.js         # Application entry point
└── src/
    ├── controllers/
    │   └── TodoController.js  # Controller logic
    ├── models/
    │   └── TodoModel.js       # Data model
    └── routes/
        └── TodoRoutes.js      # Route definitions
```

## Technologies Used

- **Node.js** : JavaScript runtime environment
- **Express** : Web framework for Node.js
- **PostgreSQL** : Relational database
- **pg** : PostgreSQL client for Node.js
- **dotenv** : Environment variable management
- **cors** : Cross-origin request handling
- **nodemon** : Development tool for automatic restarts

## Author

- Seynabou Diaw

> This project is for educational purposes.
