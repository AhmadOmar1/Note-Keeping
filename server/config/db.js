const mongoose = require('mongoose');
require('dotenv').config()
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.32dofvo.mongodb.net/?retryWrites=true&w=majority`;

const dbName = 'Notes';
let numberOfRetry = 5;

let interval;
async function connecToMongo() {
    await mongoose.connect(`${url}/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

async function connect() {
    try {
        await connecToMongo();
        console.log('Connected to the database');
    } catch (error) {
        numberOfRetry--;
        if (numberOfRetry !== 0) {
            interval = setInterval(() => {
                connecToMongo();
            }, 3000)
        }

        console.error('Error connecting to the database:', error);
    } finally {
        clearInterval(interval);
    }
}


module.exports = { connect };