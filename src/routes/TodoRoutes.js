import express from "express";
import TodoController from "../controllers/TodoController.js";

const router = express.Router();

router.get("/", TodoController.list);
router.post("/", TodoController.add);
router.delete("/:id", TodoController.delete);

export default router;
