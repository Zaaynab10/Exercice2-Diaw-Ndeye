import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    done: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default class TodoModel {
  constructor() {
    this.tasks = [];
  }

  async getAll() {
    try {
      const result = await Task.find();
      this.tasks = result;
      return this.tasks;
    } catch (error) {
      console.error("Erreur TodoModel.getAll:", error);
      throw error;
    }
  }

  async create(title) {
    try {
      const result = await Task.create({title});
      this.tasks=result;
      return this.tasks
    } catch (error) {
      console.error("Erreur TodoModel.create:", error);
      throw error;
    }
  }

  async completed(status, id) {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,                       
      { done: status },       
      { new: true }             
    );

    return updatedTask;        
  } catch (error) {
    console.error("Erreur TodoModel.completed:", error);
    throw error;
  }
}

  async delete(id) {
    try {
     
      const result = await Task.findByIdAndDelete(id)
      this.tasks=result;
      return this.tasks;
    } catch (error) {
      console.error("Erreur TodoModel.delete:", error);
      throw error;
    }
  }
}
