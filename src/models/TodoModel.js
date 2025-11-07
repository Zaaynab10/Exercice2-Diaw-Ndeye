const dotenv = require("dotenv");
const { pool } = require("../../db.js"); // Import SQL connection
const mongoose = require("mongoose");    // Import mongoose

dotenv.config();

class TodoModel {
  constructor() {
    this.dbType = process.env.DB_TYPE;
    
    if (this.dbType === "SQL") {
      this.db = pool;
    } 
    else if (this.dbType === "NOSQL") {
      const taskSchema = new mongoose.Schema({
        title: String,
        done: { type: Boolean, default: false }
      });
      this.Task = mongoose.model('Task', taskSchema);
    }
  }

  async getAll() {
    if (this.dbType === "SQL") {
      const [rows] = await this.db.query("SELECT * FROM tasks");
      return rows;
    } else {
      return await this.Task.find();
    }
  }

  async create(title) {
    if (this.dbType === "SQL") {
      const [result] = await this.db.query(
        "INSERT INTO tasks (title, done) VALUES (?, ?)",
        [title, false]
      );
      return { id: result.insertId, title, done: false };
    } else {
      return await this.Task.create({ title });
    }
  }

  async completed(status, id) {
    if (this.dbType === "SQL") {
      await this.db.query("UPDATE tasks SET done = ? WHERE id = ?", [status, id]);
      const [rows] = await this.db.query("SELECT * FROM tasks WHERE id = ?", [id]);
      return rows[0];
    } else {
      return await this.Task.findByIdAndUpdate(id, { done: status }, { new: true });
    }
  }

  async delete(id) {
    if (this.dbType === "SQL") {
      await this.db.query("DELETE FROM tasks WHERE id = ?", [id]);
      return { message: "Tâche supprimée" };
    } else {
      return await this.Task.findByIdAndDelete(id);
    }
  }
}

module.exports = TodoModel;