const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    complete: {
        type: Boolean,
        default: false,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Todo', TodoSchema);