import connexion from "../../db.js";

export default class TodoModel {
  constructor() {
    this.tasks = [];
  }

  async getAll() {
    try {
      const query = `SELECT * FROM tasks ORDER BY id`;
      const result = await connexion.query(query);
      this.tasks = result.rows;
      return this.tasks;
    } catch (error) {
      console.error("Erreur TodoModel.getAll:", error);
      throw error;
    }
  }

  
async create(title) {
  try {
    const query = `INSERT INTO tasks (title) VALUES ($1) RETURNING *`;
    const values = [title];
    const result = await connexion.query(query, values);
    return result.rows[0]; 
  } catch (error) {
    console.error("Erreur TodoModel.create:", error);
    throw error;
  }
}

async completed(status, id) {
  try {
    const query = "UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *";
    const values = [status, id];
    const result = await connexion.query(query, values);
    return result.rows[0]; 
  } catch (error) {
    console.error("Erreur TodoModel.completed:", error);
    throw error;
  }
}

  async delete(id) {
  try {
    const query = "DELETE FROM tasks WHERE id = $1 RETURNING *";
    const values = [id];
    const result = await connexion.query(query, values);
    const task = result.rows[0];
    return task;
  } catch (error) {
    console.error("Erreur TodoModel.delete:", error);
    throw error;
  }
}

}
