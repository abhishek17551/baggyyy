const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose")

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    if (connection) {
      dbgr('Connected successfully to database');
    }
  } catch (error) {
    dbgr('Connection to database failed', error);
  }
}

module.exports = { initializeDatabase };