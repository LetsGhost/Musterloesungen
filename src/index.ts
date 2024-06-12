import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Initializes the .env file
dotenv.config();

import connectToDatabase from './configs/mongodb.js';
import routes from './routes/routes.js';

// Connect to the database
connectToDatabase();

const server = express();

// Use bodyParser middleware to parse incoming JSON payloads, making them available under req.body in route handlers
server.use(bodyParser.json());

server.use('/api', routes);

// Start the server on the specified port
server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});