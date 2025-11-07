const express = require('express');
const TodoController = require('../controllers/TodoController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


const router = express.Router();
const todoController = new TodoController();

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


router.get("/", todoController.getAll);
router.post("/", todoController.create);
router.put("/:id", todoController.completed);
router.delete("/:id", todoController.delete);

module.exports=router;
