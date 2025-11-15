require('dotenv/config');
const express = require('express');
const connectToDatabase = require('./src/database/mongoose.database'); 
const taskRoutes = require('./src/routes/task.route');

const app = express();
connectToDatabase();

app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.listen(8000, () => console.info('listening on port 8000'));
