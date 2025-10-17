import express from "express";
import TodoController from "../controllers/TodoController.js";

const router = express.Router();
const todoController = new TodoController();

router.get("/", todoController.getAll);
router.post("/", todoController.create);
router.put("/:id", todoController.completed);
router.delete("/:id", todoController.delete);

export default router;
