const express = require('express');
const router = express.Router();

const todoController = require("../controllers/todo");

router.get('/', todoController.homeController);
router.get('/new-todo', todoController.newTodoFormController);
router.get('/update-todo', todoController.updateTodoFormController);
router.get('/delete-todo', todoController.deleteTodoPageController);
router.post('/update-todo/:id', todoController.updateTodoController);
router.post('/new-todo', todoController.addTodoController);
router.get('/confirm-delete', todoController.deleteTodoController)

module.exports = router;