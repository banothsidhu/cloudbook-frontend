const mongoose = require('mongoose');
const mongooseURI = "mongodb+srv://banothsidhu2007:hGiXUiqDGqKESo9b@cluster0.rfgfub2.mongodb.net/inotebook";

const connectToMongoDB = () => {
  mongoose.connect(mongooseURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('Error connecting to MongoDB:', error.message));
}

module.exports = connectToMongoDB;
