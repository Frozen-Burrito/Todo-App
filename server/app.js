const express = require('express');
const path = require('path');

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));