require('dotenv/config');
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/database/mongoose.database'); 
const taskRoutes = require('./src/routes/task.route');

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.listen(process.env.PORT, () => console.info(`listening on port ${process.env.PORT}`));
