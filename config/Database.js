const mongoose = require("mongoose");

const uri = "mongodb+srv://farhaan:pgq75gbNTQEZKo4b@cluster0.cq8jb4q.mongodb.net/?retryWrites=true&w=majority"

const connectDatabase = () => {
  mongoose
    .connect(uri)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectDatabase;