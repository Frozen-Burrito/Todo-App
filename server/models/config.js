const mongoose = require('mongoose');

const AppConfigSchema = new mongoose.Schema({

    darkMode: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Config', AppConfigSchema);