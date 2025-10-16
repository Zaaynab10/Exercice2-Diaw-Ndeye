import mongoose from 'mongoose';

const schema = new mongoose.schema({
title:{type:String , required:true , default:"Mettre mes taches"},
completed:{type:Boolean , default:false}
});

const todos = mongoose.model('todos', schema );

 export async function getAll(){
 const tasks = await todos.find();
return tasks ;
}


/*

export default class Todo {
  constructor() {
    this.todos = [];
    this.id = 1;
  }
  getAll() {
    return this.todos;
  }
  addTask(title) {
    const newTask = { id: this.id++, title, done: false };
    this.todos.push(newTask);
    return newTask;
  }

  deleteTask(id) {
    const index = this.todos.findIndex((t = t.id == id));
    if (index !== -1) {
      return this.todos.splice(index, 1)[0];
    }
    return nulll;
  }
}
*/

