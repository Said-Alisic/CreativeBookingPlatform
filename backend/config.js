import mongoose from 'mongoose';


const env = process.env;

const db_host = 'localhost'
const db = 'CreativeBookingsDB'

mongoose.Promise = global.Promise;
const dbconnection = mongoose.connect(`mongodb://${localhost}/${CreativeBookingsDB}`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});


// Exporting configurations for server
export default {
    PORT: env.PORT || 4000,
    dbconnection: connection,
};


