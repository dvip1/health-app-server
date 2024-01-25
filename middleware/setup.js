const express = require("express");
const cors = require("cors");

/**
 * @param {express.Express} app
 * @return {void}
 */
function setupMiddleware(app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());

    // Error handling middleware
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
}

module.exports = setupMiddleware;