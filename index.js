require('dotenv/config');
const express = require('express');
const connectToDatabase = require('./src/database/mongoose.database'); 

const app = express();
connectToDatabase();

app.get('/', (req, res) => {
    res.status(200).send("Hello, World!");
});

app.listen(8000, () => console.info('listening on port 8000'));
