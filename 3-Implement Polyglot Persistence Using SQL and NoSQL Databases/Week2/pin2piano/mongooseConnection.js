const mongoose = require('mongoose');
const config = require('./config');

function SetupMongooseConnections() {

  const initializeConn = () => {
    mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('MongoDB Connected...');
    }).catch((err) => {
      console.error('MongoDB connection error:', err.message);
    });
  };


  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + config.MONGO_URI);
  });


  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });


  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose disconnected on process termination');
      process.exit(0);
    });
  });

  return {
    initializeConn,
  };
}


const setupConn = new SetupMongooseConnections();
module.exports = setupConn;
