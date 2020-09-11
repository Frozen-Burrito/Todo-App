const express = require('express');

const apiTodos = require('./routes/api/todos');

const connectToMongo = require('./config/connectMongoDB');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: './.env' });
} 

const app =  express();

connectToMongo(process.env.MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use('/api/v1/todos', apiTodos);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));