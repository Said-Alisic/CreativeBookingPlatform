import mysql from 'mysql';

const env = process.env;

const connection = mysql.createConnection = ({
        host: 'localhost',
        user: 'testuser',
        password: 'testpass',
        database: ''
    });

connection = connection.connect = () => {
    console.log(`Successfully connected to MySQL database`);
}

// Exporting configurations for server
export default {
    port: env.PORT || 4000,
    database: connection,
};


