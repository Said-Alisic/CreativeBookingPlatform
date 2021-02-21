import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import config from './config.js'

// Create server
const server = express();

// Allow cross-origin requests
server.use(cors());
server.use(bodyparser.urlencoded({ extended: true}));
server.use(bodyparser.json());

// Start server
server.listen(config.PORT, () => {
    console.log(`Node.js server is listening for requests at port: ${config.PORT}`);
})

server.get('/', (req, res) => {
    res.send('Our API server is running.')

  })


