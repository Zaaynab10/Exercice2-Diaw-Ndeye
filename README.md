# Exercice2-Diaw-Ndeye

A simple backend Todo application built with Node.js, Express, and MongoDB.

## Features

- Add a task
- List all tasks
- Delete a task

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd backend-js
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

- `GET /todos` : List all tasks
- `POST /todos` : Add a new task (`{ "title": "My task" }`)
- `DELETE /todos/:id` : Delete a task by its ID

## Project Structure

```
backend-js/
  ├── .env
  ├── .gitignore
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
