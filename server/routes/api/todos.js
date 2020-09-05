const express = require('express');
const router = express.Router();

const Todo = require('../../models/todo');

// GET api/v1/todos - Get list of todos - public
router.get('/', async ( req, res ) => {
    try {
        const todos = await Todo.find().sort({ date: -1 })

        res.status(200).json({
            success: true,
            todos,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'An error occured while finding your todo\'s',
        })
    }
})

// GET api/v1/todos/:id - Get todo by id - public
router.get('/:id', async ( req, res ) => {
    try {
        const todo = await Todo.findById({ id: req.params.id });

        res.status(200).json({
            success: true,
            todo,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Unable to find the todo you\'re looking for',
        })
    }
})

// POST api/v1/todos/new - Create new todo - public
router.post('/new', async ( req, res ) => {
    const newTodo = new Todo(req.body);

    try {
        const savedTodo = await newTodo.save();

        res.status(200).json({
            success: true,
            savedTodo,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Could not create new todo',
        })
    }
})

// PUT api/v1/todos/:id - Edit todo - public
router.put('/:id', async ( req, res ) => {
    try {
        let todo = await Todo.findById( req.params.id );
        todo.set(req.body);

        const updatedTodo = await todo.save();

        res.status(200).json({
            success: true,
            updatedTodo,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Could not update todo',
        })
    }
})

// DELETE api/v1/todos/:id - Delete todo by id - public
router.delete('/:id', async ( req, res ) => {
    try {
        await Todo.findByIdAndDelete( req.params.id );

        res.status(200).json({
            success: true,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'An error occured while deleting the todo',
        })
    }
})

module.exports = router;