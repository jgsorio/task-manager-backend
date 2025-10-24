const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(process.env.MONGO_DSN)
    .then(() => console.info('Connected to database'))
    .catch(err => console.error(err));
}

module.exports = connectToDatabase;
