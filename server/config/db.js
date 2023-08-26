const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const dbName = 'Notes';

async function connect() {
    try {
        await mongoose.connect(`${url}/${dbName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}


module.exports = {connect};