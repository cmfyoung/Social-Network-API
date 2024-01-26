const mongoose = require ("mongoose")

const connectionString = 'mongodb://127.0.0.1:27017/studentsDB';

mongoose.connect(connectionString);

module.exports = mongoose.connection;