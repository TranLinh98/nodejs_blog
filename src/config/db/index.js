const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connect successfully !');
  } catch (error) {
    console.log('Connect fail !');
  }
}

module.exports = { connect };
