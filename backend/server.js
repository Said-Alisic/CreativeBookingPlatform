import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import config from './config.js';
import teacherRoutes from './routes/teacherRoutes.js';

// Create server
const server = express();

// Allow cross-origin requests
server.use(cors());
server.use(bodyparser.urlencoded({ extended: true }));
server.use(bodyparser.json());

// Start server
server.listen(config.PORT, (err) => {
    if (err) throw err;
    console.log(`Node.js server is listening for requests at port: ${config.PORT}`);
    
});

server.get('/', (req, res, err) => {
    if (err) throw err;
    res.send('Our API server is running.');
    

});


// API Routes
teacherRoutes(server);


