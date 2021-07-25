// connection database

const mongoose = require("mongoose");
const config = require("../config");

const { mongoURL } = config;
const connectDb = () => {
  return mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

module.exports = connectDb;
