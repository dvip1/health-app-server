const express = require('express');
const connectDB = require('./config/connect');
const setupMiddleware = require('./middleware/setup');
const app = express();
const port = 3000;
const testRouter = require('./routes/test');

// Connect to the database
connectDB();

// middleware
setupMiddleware(app);

app.use('/test', testRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});