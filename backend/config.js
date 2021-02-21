import mongoose from 'mongoose';


const env = process.env;

mongoose.Promise = global.Promise;
const connection = mongoose.connect('mongodb://localhost/CreativeBookingsDB', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});


// Exporting configurations for server
export default {
    PORT: env.PORT || 4000,
    database: connection,
};


