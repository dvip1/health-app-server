const mongoose = require('mongoose');

const databaseURL = process.env.NODE_ENV === "pro" ? process.env.REMOTE_DATABASE_URL || "" : "mongodb://127.0.0.1:27017/health-app";

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect(databaseURL, {
            useNewUrlParser: true, // Use the new URL parser
            useUnifiedTopology: true, // Use the new server discovery and monitoring engine
            useCreateIndex: true, // Ensure indexes are created for unique fields
            useFindAndModify: false // Disable the deprecated findAndModify() method
        });
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};

module.exports = connectDB;