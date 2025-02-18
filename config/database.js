const mongoose = require('mongoose');

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    if (connection) {
      console.log('Connected successfully to database');
    }
  } catch (error) {
    console.log('Connection to database failed', error);
  }
}

module.exports = { initializeDatabase };