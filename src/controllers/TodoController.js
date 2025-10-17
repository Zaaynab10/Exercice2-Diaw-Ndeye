import TodoModel from "../models/TodoModel.js";

export default class TodoController {
  constructor() {
    this.todoModel = new TodoModel();
  }

  getAll = async (req, res) => {
    try {
      const tasks = await this.todoModel.getAll();
      res.status(200).json(tasks);
    } catch (error) {
      console.error("Erreur TodoController.getAll:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  };

  create = async (req, res) => {
    try {
      const { title } = req.body;
      if (!title) {
        return res
          .status(400)
          .json({ error: "Le titre de la tâche est requis" });
      }
      const task = await this.todoModel.create(title);
      res.status(201).json(task);
    } catch (error) {
      console.error("Erreur TodoController.create:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  };

  completed = async (req, res) => {
    try {
      const { status } = req.body;
      const { id } = req.params;
      if (id === undefined || status === undefined) {
        return res.status(400).json({ error: "L'id et le status sont requis" });
      }

      const task = await this.todoModel.completed(status, id);

      if (!task) {
        return res.status(404).json({ error: "Tâche non trouvée" });
      }

      res.status(200).json(task);
    } catch (error) {
      console.error("Erreur TodoController.completed:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  };

delete = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "L'id est requis" });
    }

    const task = await this.todoModel.delete(id);

    if (!task) {
      return res.status(404).json({ error: "Tâche non trouvée" });
    }

    res.status(200).json({ message: "Tâche supprimée", task });
  } catch (error) {
    console.error("Erreur TodoController.delete:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};


}
