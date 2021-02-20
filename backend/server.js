import express from 'express';
import cors from 'cors';
import { port } from './config'

// Create server
const server = express();

// Allow cross-origin requests
server.use(cors());

// Start server
server.listen(port, () => {
    console.log(`Node.js server is listening for requests at port: ${port}`);
})




