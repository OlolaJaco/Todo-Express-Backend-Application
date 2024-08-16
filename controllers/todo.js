const Todo = require('../models/todo');
const moment = require('moment');

const homeController = async(req, res, next) => {
    try {
        const todos = await Todo.find({}) // will get document

        res.locals.moment = moment // It help format the time in index.ejs
        res.render('index', {title: "Todo List || Application", todos}) // the Ejs file
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const newTodoFormController = (req, res) => {
    try {
        res.render('newTodo', {title: "New Todo List || Application"}) // the Ejs file
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const updateTodoFormController = async (req, res, next) => {
    try {
        const {id} = req.query;
        const todo = await Todo.findById(id); // single document
        res.render('updateTodo', {title: "Update Todo List || Application", todo}) // the Ejs file
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteTodoPageController = (req, res) => {
    try {
        const {id} = req.query;
        res.render('deleteTodo', {title: "Delete Todo List || Application", id}) // the Ejs file, There is no need adding the extention
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const addTodoController = async(req, res, next) => {
    try {
        const {title, desc} = req.body
        if(!title){
            return res.status(400).json({message: "Title is required"});
        }
        const newTodo = new Todo({title, desc}); // will create a document
        await newTodo.save();
        res.redirect('/')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateTodoController = async(req, res, next) => {
    try {
        const {id} = req.params;
        const {title, desc} = req.body;
        const todo = await Todo.findById(id); // ID of document to be updated.
        
        if(!todo) {
            return res.status(404).json({message: "Todo not found"});
        }

        // Coming from the frontend, attached to the one in the database
        todo.title = title
        todo.desc = desc

        await todo.save();
        res.redirect('/')
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

const deleteTodoController = async(req, res, next) => {
    try {
        const {id, confirm} = req.query

        if(confirm === 'yes') {
            await Todo.findByIdAndDelete(id)
        }

        res.redirect('/')
    }  catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {homeController, newTodoFormController, updateTodoFormController, deleteTodoPageController, addTodoController, updateTodoController, deleteTodoController};